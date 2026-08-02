import { createFileRoute } from "@tanstack/react-router";
import heroLab from "@/assets/hero-lab.jpg";
import womensHealth from "@/assets/womens-health.jpg";

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
    title: "Fertility",
    body: "Formulations that support couples through conception, prescribed alongside specialist fertility care.",
  },
  {
    title: "Pregnancy",
    body: "Supplements and medications developed for maternal nutrition and safe antenatal management.",
  },
  {
    title: "Lactation",
    body: "Post-natal support for nursing mothers, focused on recovery, comfort and infant wellbeing.",
  },
  {
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

const facts = [
  ["Incorporated", "5 January 2015"],
  ["CIN", "U24232KA2015PTC078093"],
  ["Nature of business", "Manufacturer & Wholesaler"],
  ["Legal status", "Private Limited Company"],
  ["Status", "Active"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight text-primary">Impilo</span>
            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
              Pharmaceuticals
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#focus" className="transition-colors hover:text-primary">
              Therapy areas
            </a>
            <a href="#products" className="transition-colors hover:text-primary">
              Products
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <a
            href="tel:+919980311983"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enquire
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              Bengaluru, Karnataka · Since 2015
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-primary md:text-6xl">
              Medicine dedicated to women's health.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Impilo Pharmaceuticals Pvt Ltd develops and supplies formulations across fertility,
              pregnancy, lactation and women's healthcare — built on integrity, clinical rigour and
              continuous research.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View our range
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                Talk to us
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroLab}
              alt="Pharmaceutical laboratory bench with vials and tablet blister packs"
              width={1600}
              height={1104}
              className="w-full rounded-sm object-cover"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </section>

        <section id="about" className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-3xl tracking-tight text-primary md:text-4xl">
              A small company with a long-term commitment
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Incorporated in January 2015 and headquartered in Rajajinagar, Bengaluru, Impilo
                Pharmaceuticals Private Limited manufactures and wholesales pharmaceutical
                formulations and medical supplies for hospitals, clinics and distributors.
              </p>
              <p>
                Our work centres on the health of women and their families at every stage of life.
                Integrity, excellence, innovation and research guide the products we bring to
                market.
              </p>
              <dl className="grid gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl tracking-tight text-primary md:text-4xl">
            Therapy areas
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {focusAreas.map((f) => (
              <article key={f.title} className="bg-card p-8">
                <h3 className="font-display text-xl text-primary">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 md:grid-cols-2">
          <img
            src={womensHealth}
            alt="Mother holding her newborn baby"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full rounded-sm object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
          <blockquote className="font-display text-2xl leading-snug tracking-tight text-primary md:text-3xl">
            “Impilo” means health.
            <span className="mt-4 block font-sans text-base font-normal leading-relaxed text-muted-foreground">
              It is the standard we hold ourselves to — every batch, every prescription, every
              family we serve.
            </span>
          </blockquote>
        </section>

        <section id="products" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-3xl tracking-tight text-primary md:text-4xl">
              Products &amp; supplies
            </h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {catalogue.map((p) => (
                <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <span className="text-lg text-foreground">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Bulk and wholesale enquiries welcome. Availability may vary by region and
              prescription requirement.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-primary md:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                For product enquiries, distribution partnerships or regulatory documentation, reach
                our Bengaluru office.
              </p>
            </div>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Registered office
                </p>
                <address className="mt-2 not-italic leading-relaxed text-foreground">
                  Shed No. 101, 1st Floor, Industrial Estate,
                  <br />
                  Rajajinagar, Bengaluru, Karnataka 560010, India
                </address>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Phone
                </p>
                <a href="tel:+919980311983" className="mt-2 block text-foreground hover:text-primary">
                  +91 99803 11983
                </a>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:impilopharma@gmail.com"
                  className="mt-2 block text-foreground hover:text-primary"
                >
                  impilopharma@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Impilo Pharmaceuticals Private Limited</span>
          <span>CIN U24232KA2015PTC078093</span>
        </div>
      </footer>
    </div>
  );
}
