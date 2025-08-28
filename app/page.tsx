import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6">
        <section className="pt-20 pb-8 sm:pt-28">
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1220] mb-6 leading-tight">
                Everything you need for your passion project
              </h1>
              <p className="text-base text-[#475569] mb-8 leading-relaxed">
                I'm Sparki, I will listen, understand, and show you what's possible so you can finally start your passion project that changes your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/onboarding"
                  className="inline-flex items-center justify-center bg-[#63C5DA] hover:bg-[#3DAFC7] text-white rounded-xl px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#63C5DA]/40"
                >
                  Start My Journey
                </Link>
                <Link 
                  href="#how"
                  className="inline-flex items-center justify-center border border-[#E5E7EB] hover:border-[#63C5DA] text-[#0B1220] rounded-xl px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#63C5DA]/40"
                >
                  How it works
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#63C5DA] to-[#3DAFC7] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">✨</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-12">
          <h2 className="text-2xl font-bold text-[#0B1220] text-center mb-8">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Step 
              title="Tap your picks"
              body="Domain, format, audience, novelty, visibility, boundaries."
            />
            <Step 
              title="We match smart"
              body="Rules ranker + curated ideas. No generic fluff."
            />
            <Step 
              title="Pick a spark"
              body="3 cards (title + one-line hook)."
            />
          </div>
        </section>

        {/* Why Sparki Section */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-[#0B1220] text-center mb-8">
            Why Sparki
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              title="Personal, not random"
              body="Uses your picks to surface ideas that fit your style."
            />
            <Card 
              title="Respects constraints"
              body="No budget / No travel / Behind-the-scenes honored."
            />
            <Card 
              title="Curated corpus"
              body="Ideas hand-crafted for high schoolers."
            />
            <Card 
              title="Delight built-in"
              body="Friendly avatar + confetti when you commit."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/60 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#475569]">© Sparki</p>
            <div className="flex gap-6">
              <Link 
                href="/onboarding"
                className="text-[#475569] hover:text-[#63C5DA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#63C5DA]/40 rounded"
              >
                Get started
              </Link>
              <Link 
                href="#how"
                className="text-[#475569] hover:text-[#63C5DA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#63C5DA]/40 rounded"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Inline components to keep the diff contained
function Step({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E5E7EB]">
      <h3 className="text-lg font-semibold text-[#0B1220] mb-3">{title}</h3>
      <p className="text-base text-[#475569]">{body}</p>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#F8FAFC] rounded-lg p-6 border border-[#E5E7EB]">
      <h3 className="text-lg font-semibold text-[#0B1220] mb-3">{title}</h3>
      <p className="text-base text-[#475569]">{body}</p>
    </div>
  );
}