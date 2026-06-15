export default function Home() {
  const faqs = [
    {
      q: "How does the keyword comparison work?",
      a: "We extract meaningful terms from your resume and the job description using NLP, then highlight what's missing so you can tailor your application."
    },
    {
      q: "What file formats are supported?",
      a: "You can upload PDF or plain-text resumes, and paste job descriptions directly. We handle the parsing automatically."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the Keywords Your Resume Is Missing
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a job description, upload your resume, and instantly see which keywords are absent — with specific suggestions to close the gap and get past ATS filters.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $7 / month
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Upload Resume", desc: "Drop your PDF or paste plain text." },
            { step: "2", title: "Add Job Post", desc: "Paste the job description URL or text." },
            { step: "3", title: "Get Your Gap Report", desc: "See missing keywords with suggestions." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
              <div className="w-9 h-9 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                {item.step}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited resume comparisons",
              "ATS keyword gap reports",
              "Actionable rewrite suggestions",
              "PDF & plain-text support",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Resume Keyword Gap Finder. All rights reserved.
      </footer>
    </main>
  );
}
