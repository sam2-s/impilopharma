import { createFileRoute } from "@tanstack/react-router";
import filmAsset from "@/assets/impilo-film.mp4.asset.json";


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

const brands = [
  {
    name: "Salfer XT",
    composition: "Ferrous Ascorbate + Folic Acid",
    form: "Tablets",
    tag: "Anaemia",
  },
  {
    name: "Sal9",
    composition: "L-Methyl Folate + Methylcobalamine + Pyridoxal-5-phosphate + DHA",
    form: "Capsule",
    tag: "Prenatal",
  },
  {
    name: "Impgest-SR",
    composition: "Progesterone 200 mg / 300 mg",
    form: "SR Tablets",
    tag: "Fertility",
  },
  {
    name: "Novositol",
    composition: "Myo-inositol, D-Chiro inositol, NAC, L-Methylfolate, Chromium, Vitamin D3",
    form: "Tablets",
    tag: "PCOS",
  },
  {
    name: "Impauz-MF",
    composition: "Tranexamic Acid 500 mg + Mefenamic Acid 250 mg",
    form: "Tablets",
    tag: "Gynaecology",
  },
  {
    name: "Impcal",
    composition: "Calcium Orotate + Vitamin D3",
    form: "Tablets",
    tag: "Bone health",
  },
  {
    name: "Valid-D3 60K",
    composition: "Cholecalciferol 60000 IU",
    form: "Softgel Capsule",
    tag: "Supplement",
  },
  {
    name: "Can3",
    composition: "Clotrimazole 200 mg + Clindamycin 100 mg",
    form: "Capsule",
    tag: "Antifungal",
  },
  {
    name: "Eqcef",
    composition: "Cefuroxime Axetil IP 250/500 mg · Injection 750 mg / 1.5 g",
    form: "Tablets & Injection",
    tag: "Antibiotic",
  },
  {
    name: "Muprowin",
    composition: "Mupirocin 2%",
    form: "Ointment",
    tag: "Topical",
  },
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
    <div className="mesh-bg relative min-h-screen overflow-x-clip font-sans text-foreground antialiased">
      {/* floating liquid orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="floaty absolute -left-24 top-24 h-72 w-72 rounded-full bg-aqua/30 blur-2xl" />
        <div
          className="floaty absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-teal/20 blur-2xl"
          style={{ animationDelay: "-7s" }}
        />
      </div>


      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="glass glass-specular mx-auto flex max-w-6xl items-center gap-4 rounded-[1.75rem] px-4 py-3 sm:px-6">
          <a href="#top" className="press flex min-w-0 flex-1 items-center gap-3">
            <img
              src="/images/impilo-logo.png"
              alt="Impilo Pharmaceuticals logo"
              width={1363}
              height={396}
              className="h-8 w-auto shrink-0 sm:h-9"
            />
            <span className="hidden text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Pharmaceuticals Pvt. Ltd.
            </span>
          </a>
          <nav className="glass-thin hidden items-center gap-1 rounded-full p-1 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="press rounded-full px-4 py-2 text-[0.82rem] font-medium text-muted-foreground transition-colors hover:bg-white/70 hover:text-navy"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="press shrink-0 rounded-full bg-navy px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground shadow-lg"
          >
            Enquire
          </a>
        </div>
      </header>

      {/* iOS-style floating dock (mobile) */}
      <nav className="glass glass-specular fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 lg:hidden">
        {navLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="press rounded-full px-3.5 py-2 text-[0.72rem] font-semibold text-navy"
          >
            {label}
          </a>
        ))}
      </nav>


      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Est. 2015 · Bengaluru
              </span>
              <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-navy sm:text-6xl">
                Medicine dedicated to{" "}
                <span className="bg-linear-to-r from-teal to-navy-mid bg-clip-text text-transparent">
                  women's health.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
                Impilo Pharmaceuticals Pvt Ltd develops and supplies formulations across fertility,
                pregnancy, lactation and women's healthcare — built on integrity, clinical rigour
                and continuous research.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="press rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl"
                >
                  View our range
                </a>
                <a
                  href="#contact"
                  className="glass glass-specular press rounded-full px-7 py-3.5 text-sm font-semibold text-navy"
                >
                  Talk to us
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                {[
                  ["11+", "Years"],
                  ["10", "Brands"],
                  ["B2B", "Wholesale"],
                ].map(([v, k]) => (
                  <div key={k} className="glass glass-specular glass-hover rounded-3xl px-4 py-5 text-center">
                    <dt className="text-2xl font-extrabold tracking-tight text-navy">{v}</dt>
                    <dd className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {k}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="glass glass-specular relative overflow-hidden rounded-[2.25rem] p-2">
              <img
                src="/images/hero-lab.jpg"
                alt="Pharmaceutical laboratory bench with vials and tablet blister packs"
                width={1600}
                height={1104}
                className="h-[320px] w-full rounded-[1.75rem] object-cover sm:h-[460px]"
              />
              <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
                  Manufacturing & wholesale
                </p>
                <p className="mt-1 text-sm font-medium text-navy">
                  Formulations, diagnostics and surgical supplies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass rounded-[2.25rem] p-7 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-teal">
                  About us
                </p>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-navy md:text-[2.4rem]">
                  Built on clinical rigour, trusted by clinicians
                </h2>

              </div>
              <div className="space-y-5 text-[1rem] leading-relaxed text-muted-foreground">
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
            <dl className="reveal-stagger mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map(([k, v]) => (
                <div key={k} className="glass glass-specular glass-hover rounded-2xl p-5">
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] font-semibold text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Therapy areas */}
        <section id="focus" className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div
            className="relative overflow-hidden rounded-[2.25rem] p-7 sm:p-12"
            style={{ background: "var(--gradient-navy)" }}
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-aqua/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
            <div className="relative">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-aqua">
                Therapy areas
              </p>
              <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-primary-foreground md:text-[2.4rem]">
                Care across every stage of life
              </h2>
              <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {focusAreas.map((f) => (
                  <article key={f.title} className="glass-dark glass-specular glass-hover rounded-3xl p-6">
                    <span className="text-xs font-bold tracking-widest text-aqua">{f.n}</span>
                    <h3 className="mt-4 text-lg font-bold text-primary-foreground">{f.title}</h3>
                    <p className="mt-3 text-[0.85rem] leading-relaxed text-primary-foreground/70">
                      {f.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Film */}
        <section className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass glass-specular relative overflow-hidden rounded-[2.25rem] p-2">
            <video
              ref={videoRef}
              src={filmAsset.url}
              className="h-[260px] w-full rounded-[1.75rem] object-cover sm:h-[520px]"
              muted
              loop
              playsInline
              preload="none"
              aria-label="Inside Impilo Pharmaceuticals"
            />

            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 sm:right-auto sm:max-w-sm">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
                Inside Impilo
              </p>
              <p className="mt-1 text-sm font-medium text-navy">
                A look at how we make and move our medicines
              </p>
            </div>
          </div>
        </section>

        {/* Quote / image */}
        <section className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="glass overflow-hidden rounded-[2.25rem] p-2">
              <img
                src="/images/womens-health.jpg"
                alt="Mother holding her newborn baby"
                width={1200}
                height={912}
                loading="lazy"
                className="scroll-zoom h-[300px] w-full rounded-[1.75rem] object-cover lg:h-full"
              />
            </div>
            <div className="glass flex flex-col justify-center rounded-[2.25rem] p-8 sm:p-12">
              <blockquote className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-navy md:text-[2.4rem]">
                “Impilo” means health.
              </blockquote>
              <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
                It is the standard we hold ourselves to — every batch, every prescription, every
                family we serve.
              </p>
            </div>
          </div>
        </section>


        {/* Products */}
        <section id="products" className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-teal">
              Portfolio
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-navy md:text-[2.4rem]">
              Our brands
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Bulk and wholesale enquiries welcome. Availability may vary by region and prescription
              requirement.
            </p>
          </div>
          <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((p) => (
              <article key={p.name} className="glass glass-specular glass-hover flex flex-col rounded-3xl p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-navy">{p.name}</h3>
                  <span className="glass shrink-0 rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-teal">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 grow text-[0.85rem] leading-relaxed text-muted-foreground">
                  {p.composition}
                </p>
                <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-mid">
                  {p.form}
                </p>
              </article>
            ))}
          </div>
          <div className="glass mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-3xl px-6 py-5 text-[0.85rem] text-muted-foreground">
            <span className="font-semibold text-navy">Also supplied:</span>
            <span>Blood group test kits</span>
            <span>Surgical sutures</span>
            <span>Tissue tapes</span>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="reveal mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="glass rounded-[2.25rem] p-7 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-teal">
                  Contact
                </p>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-navy md:text-[2.4rem]">
                  Get in touch
                </h2>
                <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
                  For product enquiries, distribution partnerships or regulatory documentation,
                  reach our Bengaluru office.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5 sm:col-span-2">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Registered office
                  </p>
                  <address className="mt-2 not-italic font-medium leading-relaxed text-navy">
                    Shed No. 101, 1st Floor, Industrial Estate,
                    <br />
                    Rajajinagar, Bengaluru, Karnataka 560010, India
                  </address>
                </div>
                <a href="tel:+919980311983" className="glass glass-specular glass-hover rounded-2xl p-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </p>
                  <span className="mt-2 block font-semibold text-navy">+91 99803 11983</span>
                </a>
                <a
                  href="mailto:impilopharma@gmail.com"
                  className="glass glass-specular glass-hover min-w-0 rounded-2xl p-5"
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </p>
                  <span className="mt-2 block truncate font-semibold text-navy">
                    impilopharma@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:pb-8">
        <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-3xl px-6 py-5 text-xs font-medium text-muted-foreground">
          <img
            src="/images/impilo-logo.png"
            alt="Impilo Pharmaceuticals logo"
            width={1363}
            height={396}
            loading="lazy"
            className="h-7 w-auto"
          />
          <span>© {new Date().getFullYear()} Impilo Pharmaceuticals Private Limited</span>
          <span>CIN U24232KA2015PTC078093</span>
        </div>
      </footer>
    </div>
  );
}
