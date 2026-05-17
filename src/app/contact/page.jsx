export const metadata = {
  title: "Contact",
  description:
    "Contact Arpit Aggarwal - software developer. Send a message or connect via LinkedIn, GitHub, and Printables.",
  keywords: [
    "Contact Arpit Aggarwal",
    "Software Developer Contact",
    "Next.js Developer India",
  ],
  openGraph: {
    title: "Contact | Arpit Aggarwal",
    description:
      "Send a message to Arpit Aggarwal or connect via LinkedIn, GitHub, and Printables.",
    url: "https://arpitaggarwal.netlify.app/contact",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const success = params?.success === "1";

  return (
    <main className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      <section className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-3xl font-light">Let’s Connect</h1>

          <p className="text-sm opacity-70 leading-relaxed">
            Have an opportunity, idea, or just want to say hello?
            Drop a message - I usually reply within a day.
          </p>

          <div className="flex gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/arpit-aggarwal-5b6040257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" width={36} />
            </a>

            <a
              href="https://github.com/arpitaggarwal0511"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/githubicon.png" alt="GitHub" width={36} />
            </a>

            <a
              href="https://www.printables.com/@tinfoilhat_2004974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/printables.png" alt="Printables" width={36} />
            </a>
          </div>

          {success && (
            <div className="mt-4 rounded-md bg-green-500/10 border border-green-500/30 p-3">
              <p className="text-xs text-green-400">
                Thanks! Your message has been sent successfully.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: FORM */}
        <form
          action="/api/v1/contact"
          method="POST"
          className="space-y-6 bg-[#2f2f2f] p-8 rounded-xl shadow-lg"
        >
          <div>
            <label className="block text-xs mb-2 opacity-70">
              Your Name
            </label>
            <input
              name="name"
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs mb-2 opacity-70">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs mb-2 opacity-70">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-sm underline underline-offset-8 hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
