
export const metadata = {
  title: "Resume",
  description:
    "View and download the resume of Arpit Aggarwal, a software developer specializing in modern web development.",
  keywords: [
    "Arpit Aggarwal Resume",
    "Software Developer Resume",
    "Frontend Developer Resume",
    "Next.js Developer Resume",
    "Full Stack Developer Resume",
  ],
  openGraph: {
    title: "Resume | Arpit Aggarwal",
    description:
      "Professional resume of Arpit Aggarwal - software developer.",
    url: "https://arpitaggarwal.netlify.app/resume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Arpit Aggarwal",
    description:
      "Professional resume of Arpit Aggarwal - software developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-light mb-4">Resume</h1>
        <p className="text-sm opacity-70 max-w-xl mx-auto">
          A concise overview of my skills, experience, and projects.
          You can view it below.
        </p>

        <a
          href="https://drive.google.com/file/d/1jnB4bsiscMeC0XoIkIp_HXGHCpc6BsI8/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm underline underline-offset-8 hover:opacity-80"
        >
          Open resume in new tab
        </a>
      </section>

      {/* Resume Viewer */}
      <section
        className="
          relative w-full overflow-hidden rounded-xl shadow-lg bg-[#2f2f2f]
          h-[75vh]
          md:h-[120vh]
        "
      >
        <iframe
          src="https://drive.google.com/file/d/1jnB4bsiscMeC0XoIkIp_HXGHCpc6BsI8/preview"
          title="Arpit Aggarwal Resume"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </main>
  );
}
