import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Impilo Pharmaceuticals Pvt Ltd — Women's Health, Bengaluru" },
      {
        name: "description",
        content:
          "Impilo Pharmaceuticals Pvt Ltd is a Bengaluru-based pharmaceutical company dedicated to women's health — fertility, pregnancy, lactation medications and medical supplies.",
      },
      { property: "og:title", content: "Impilo Pharmaceuticals Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Pharmaceutical formulations for fertility, pregnancy, lactation and women's health. Established 2015, Rajajinagar, Bengaluru.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          name: "Impilo Pharmaceuticals Private Limited",
          foundingDate: "2015-01-05",
          email: "impilopharma@gmail.com",
          telephone: "+91 99803 11983",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shed No. 101, 1st Floor, Industrial Estate, Rajajinagar",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560010",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

const focusAreas = [
  {
    n: "01",
    title: "Fertility",
    body: "Formulations that support couples through conception, prescribed alongside specialist fertility care.",
  },
  {
    n: "02",
    title: "Pregnancy",
    body: "Supplements and medications developed for maternal nutrition and safe antenatal management.",
  },
  {
    n: "03",
    title: "Lactation",
    body: "Post-natal support for nursing mothers, focused on recovery, comfort and infant wellbeing.",
  },
  {
    n: "04",
    title: "Women's Health",
    body: "Everyday therapies across a woman's life stages, from adolescence through menopause.",
  },
];

const catalogue = [
  { name: "Pharmaceutical Tablets", note: "All types of tablet formulations" },
  { name: "Sulphur Powder", note: "Salfer XT" },
  { name: "Blood Group Test Kit", note: "Diagnostic supplies" },
  { name: "Surgical Suture", note: "Surgical consumables" },
  { name: "Tissue Tapes", note: "Wound care and dressing" },
];

const facts: [string, string][] = [
  ["Incorporated", "5 January 2015"],
  ["CIN", "U24232KA2015PTC078093"],
  ["Nature of business", "Manufacturer & Wholesaler"],
  ["Legal status", "Private Limited Company"],
  ["Company status", "Active"],
  ["Headquarters", "Rajajinagar, Bengaluru"],
];

const navLinks = [
  ["About", "#about"],
  ["Therapy areas", "#focus"],
  ["Products", "#products"],
  ["Contact", "#contact"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm text-primary-foreground">
              I
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight text-navy">
                Impilo Pharmaceuticals
              </span>
              <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                Bengaluru · Est. 2015
              </span>
            </span>
          </a>
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-7 text-[0.8rem] tracking-wide text-muted-foreground lg:flex">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="transition-colors hover:text-teal">
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="shrink-0 rounded-xs bg-navy px-5 py-2.5 text-[0.8rem] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-navy-mid"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Split-screen hero */}
        <section className="grid lg:min-h-[calc(100vh-73px)] lg:grid-cols-2">
          <div
            className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-24"
            style={{ background: "var(--gradient-navy)" }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-aqua">
              Pharmaceutical manufacturing
            </p>
            <h1 className="mt-8 font-display text-[2.4rem] leading-[1.15] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Medicine dedicated to
              <em className="not-italic text-aqua"> women's health.</em>
            </h1>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-primary-foreground/70">
              Impilo Pharmaceuticals Pvt Ltd develops and supplies formulations across fertility,
              pregnancy, lactation and women's healthcare — built on integrity, clinical rigour and
              continuous research.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-xs bg-aqua px-7 py-3.5 text-sm font-medium text-navy transition-opacity hover:opacity-90"
              >
                View our range
              </a>
              <a
                href="#contact"
                className="rounded-xs border border-primary-foreground/25 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk to us
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              {[
                ["11+", "Years operating"],
                ["5", "Product lines"],
                ["B2B", "Wholesale supply"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="font-display text-2xl text-aqua">{v}</dt>
                  <dd className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-primary-foreground/60">
                    {k}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="/images/hero-lab.jpg"
              alt="Pharmaceutical laboratory bench with vials and tablet blister packs"
              width={1600}
              height={1104}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-teal">About us</p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-navy md:text-[2.5rem]">
                A small company with a long-term commitment
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Incorporated in January 2015 and headquartered in Rajajinagar, Bengaluru, Impilo
                Pharmaceuticals Private Limited manufactures and wholesales pharmaceutical
                formulations and medical supplies for hospitals, clinics and distributors.
              </p>
              <p>
                Our work centres on the health of women and their families at every stage of life.
                Integrity, excellence, innovation and research guide every product we bring to
                market.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-card p-7">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-3 text-[0.95rem] text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Therapy areas */}
        <section id="focus" className="bg-navy">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-aqua">
                  Therapy areas
                </p>
                <h2 className="mt-6 font-display text-3xl leading-tight text-primary-foreground md:text-[2.5rem]">
                  Care across every stage of life
                </h2>
              </div>
              <div className="grid gap-px bg-primary-foreground/15 sm:grid-cols-2">
                {focusAreas.map((f) => (
                  <article key={f.title} className="bg-navy p-8">
                    <span className="font-display text-sm text-aqua">{f.n}</span>
                    <h3 className="mt-4 font-display text-xl text-primary-foreground">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
                      {f.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote / image split */}
        <section className="grid lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[520px]">
            <img
              src="/images/womens-health.jpg"
              alt="Mother holding her newborn baby"
              width={1200}
              height={912}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-secondary px-6 py-20 lg:px-16">
            <blockquote className="font-display text-2xl leading-snug text-navy md:text-[2rem]">
              “Impilo” means health.
            </blockquote>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              It is the standard we hold ourselves to — every batch, every prescription, every
              family we serve.
            </p>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-teal">Portfolio</p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-navy md:text-[2.5rem]">
                Products &amp; supplies
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Bulk and wholesale enquiries welcome. Availability may vary by region and
                prescription requirement.
              </p>
            </div>
            <ul className="border-t border-border">
              {catalogue.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border py-6"
                >
                  <span className="font-display text-lg text-navy">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-teal">Contact</p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-navy md:text-[2.5rem]">
                Get in touch
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                For product enquiries, distribution partnerships or regulatory documentation, reach
                our Bengaluru office.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Registered office
                </p>
                <address className="mt-3 not-italic leading-relaxed text-navy">
                  Shed No. 101, 1st Floor, Industrial Estate,
                  <br />
                  Rajajinagar, Bengaluru, Karnataka 560010, India
                </address>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <a href="tel:+919980311983" className="mt-3 block text-navy hover:text-teal">
                  +91 99803 11983
                </a>
              </div>
              <div className="min-w-0">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:impilopharma@gmail.com"
                  className="mt-3 block truncate text-navy hover:text-teal"
                >
                  impilopharma@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-primary-foreground/55 lg:px-10">
          <span>© {new Date().getFullYear()} Impilo Pharmaceuticals Private Limited</span>
          <span>CIN U24232KA2015PTC078093</span>
        </div>
      </footer>
    </div>
  );
}
