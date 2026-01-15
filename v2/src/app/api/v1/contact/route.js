export const runtime = "nodejs";

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

function loadTemplate(fileName, variables) {
  const filePath = path.resolve(process.cwd(), "emails", fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Email template not found: ${filePath}`);
  }

  let html = fs.readFileSync(filePath, "utf8");

  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    html = html.replace(regex, value);
  });

  return html;
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const ownerHTML = loadTemplate("owner-notification.html", {
      name,
      email,
      message: message.replace(/\n/g, "<br />"),
    });

    const visitorHTML = loadTemplate("visitor-reply.html", {
      name,
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: ownerHTML,
    });

    await transporter.sendMail({
      from: `"Arpit Aggarwal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: visitorHTML,
    });

    return Response.redirect(
      new URL("/contact?success=1", req.url),
      303
    );
  } catch (err) {
  console.error("CONTACT API ERROR FULL:", err);
  return new Response(
    JSON.stringify({
      error: err.message,
      stack: err.stack,
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

}
