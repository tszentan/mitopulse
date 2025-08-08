import React, { useState } from "react";

export default function Qmt() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is QMT used for?",
      a: "QMT (Quantum Mitohormesis Technology) is a medical device for gentle, non-exertive muscle activation. It’s designed for clinical environments to support rehab, reduce weakness/atrophy, and complement physiotherapy."
    },
    {
      q: "How does it feel for the patient?",
      a: "Sessions are comfortable and non-invasive. Patients typically feel a gentle sensation while seated or reclined. No effort is required from the user."
    },
    {
      q: "Where can it be deployed?",
      a: "Hospitals, rehab centres, physiotherapy clinics, and step-down care settings. The applicator is designed for bedside or chair-side use."
    },
    {
      q: "Is it certified?",
      a: "Models are cleared/registered for clinical use in multiple markets (see Regulatory Status). Your local usage depends on the specific model and jurisdiction."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Split Hero (left text / right metrics) */}
      <section className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
          <div className="flex flex-col justify-center">
            <p className="uppercase tracking-wider text-sm text-accent font-exo2">Clinical Rehabilitation</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-primary font-exo2">
              QMT — Medical-grade, non-exertive muscle activation
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Quantum Mitohormesis Technology (QMT) delivers gentle electromagnetic signals to stimulate
              deep muscle and support mitochondrial function — without requiring the patient to exercise.
              Built for real-world clinical workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center rounded-full border border-accent bg-accent text-white px-5 py-2.5 text-base font-medium hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent transition"
              >
                Enquire for Clinical Trial / Demo
              </a>
              <a
                href="#evidence"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-base font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/60"
              >
                See outcomes & evidence →
              </a>
            </div>
          </div>

          {/* Right metrics panel */}
          <div className="relative">
            <div className="h-full w-full rounded-2xl border border-secondary/30 p-6 md:p-8 bg-secondary/5">
              <h3 className="text-xl font-semibold text-primary">Why clinicians choose QMT</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 rounded-full bg-accent"></span>
                  Non-invasive, patient-friendly sessions (seated or bedside)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 rounded-full bg-accent"></span>
                  Targeted field applicator for consistent placement
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 rounded-full bg-accent"></span>
                  Fits into rehab pathways where exercise tolerance is low
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 rounded-full bg-accent"></span>
                  Designed for clinical governance & repeatability
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-3 divide-x divide-secondary/20 rounded-xl border border-secondary/30 overflow-hidden bg-white">
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-xs text-gray-500">mobility gains*</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">+17%</div>
                  <div className="text-xs text-gray-500">knee strength†</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary">60%</div>
                  <div className="text-xs text-gray-500">greater pain drop†</div>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                *Frail elderly after 12 weeks. †In osteoarthritis cohorts vs exercise-only groups. Sources below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works – stepper */}
      <section className="w-full bg-white border-y border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">How QMT works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-secondary/30 bg-white p-6">
              <p className="text-sm font-semibold tracking-wide uppercase text-secondary/80">01 • Placement</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Targeted applicator</h3>
              <p className="mt-3 text-gray-700">
                The field applicator is positioned at the target muscle group. Configurations suit seated
                or bedside use without patient exertion.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 bg-white p-6">
              <p className="text-sm font-semibold tracking-wide uppercase text-secondary/80">02 • Signaling</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Gentle electromagnetic cues</h3>
              <p className="mt-3 text-gray-700">
                Low-frequency signals engage muscle tissue and support mitochondrial pathways associated
                with recovery and conditioning.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 bg-white p-6">
              <p className="text-sm font-semibold tracking-wide uppercase text-secondary/80">03 • Outcomes</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Clinical workflow friendly</h3>
              <p className="mt-3 text-gray-700">
                Sessions integrate into rehab schedules, helping reduce weakness/atrophy and improve
                mobility where exercise tolerance is limited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky "Who it's for" + use cases */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
          <aside className="md:col-span-2 md:sticky md:top-6 h-fit">
            <div className="rounded-2xl border border-secondary/30 p-6">
              <h3 className="text-xl font-semibold text-primary">Who it’s for</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Post-operative & non-ambulatory patients</li>
                <li>• Frailty & sarcopenia management</li>
                <li>• Osteoarthritis and joint pain cohorts</li>
                <li>• Stroke & neuro-rehab adjunct</li>
                <li>• Deconditioning, long-stay wards</li>
              </ul>
              <a
                href="#enquire"
                className="mt-6 inline-block rounded-full border border-primary px-5 py-2.5 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
              >
                Ask about protocols
              </a>
            </div>
          </aside>
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold text-primary">Clinical use cases</h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-secondary/30 p-5">
                <h4 className="font-semibold text-primary">Rehab where exercise is limited</h4>
                <p className="mt-2 text-gray-700">
                  Provide stimulus without exertion to support conditioning and functional gains during
                  early or low-tolerance phases.
                </p>
              </div>
              <div className="rounded-xl border border-secondary/30 p-5">
                <h4 className="font-semibold text-primary">Adjunct to physiotherapy</h4>
                <p className="mt-2 text-gray-700">
                  Slot sessions before or between therapy blocks to complement conventional exercise and
                  potentially reduce pain barriers.
                </p>
              </div>
              <div className="rounded-xl border border-secondary/30 p-5">
                <h4 className="font-semibold text-primary">Bedside deployment</h4>
                <p className="mt-2 text-gray-700">
                  Designed for ward workflows and chair-side setups to minimise transfers and maintain
                  consistency across sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Evidence */}
      <section id="evidence" className="w-full bg-white border-y border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Outcomes & evidence</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-secondary/30 p-6">
              <div className="text-5xl font-bold text-accent">85%</div>
              <p className="mt-2 text-gray-700">
                Improved mobility, balance, sit-to-stand in frail elderly after 12 weeks.
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 p-6">
              <div className="text-5xl font-bold text-accent">+17%</div>
              <p className="mt-2 text-gray-700">
                Increase in knee strength in osteoarthritis patients (vs ~1% with exercise alone).
              </p>
            </div>
            <div className="rounded-xl border border-secondary/30 p-6">
              <div className="text-5xl font-bold text-accent">60%</div>
              <p className="mt-2 text-gray-700">
                Greater pain reduction compared to exercise-only groups.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p className="font-medium text-primary">Sources:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                MitoCharge QMT overview —{" "}
                <a className="underline text-primary hover:text-accent" href="https://www.mitocharge.com/qmt" target="_blank" rel="noreferrer">
                  mitocharge.com/qmt
                </a>
              </li>
              <li>
                NUS MUSCLE Programme coverage (The Straits Times) —{" "}
                <a className="underline text-primary hover:text-accent" href="https://nus.edu.sg/newshub/news/2025/2025-03/2025-03-10/MUSCLE-st-10mar-pA16.pdf" target="_blank" rel="noreferrer">
                  nus.edu.sg/newshub/.../MUSCLE-st-10mar-pA16.pdf
                </a>
              </li>
              <li>
                Clinical study in Hong Kong (Straits Times via Care Corner) —{" "}
                <a className="underline text-primary hover:text-accent" href="https://www.carecorner.org.sg/wp-content/uploads/2024/12/2024.12.02_The-Straits-Times_Clinical-study-in-HK-confirms-Singapores-Bixeps-machine-improves-muscle-strength-1.pdf" target="_blank" rel="noreferrer">
                  carecorner.org.sg/.../Clinical-study-in-HK...
                </a>
              </li>
              <li>
                Approvals & use in SG/US —{" "}
                <a className="underline text-primary hover:text-accent" href="https://www.straitstimes.com/singapore/singapore-machine-for-muscle-strengthening-approved-for-clinical-use-locally-and-in-us" target="_blank" rel="noreferrer">
                  straitstimes.com/.../approved-for-clinical-use
                </a>
              </li>
              <li>
                Op-ed on senior access —{" "}
                <a className="underline text-primary hover:text-accent" href="https://www.straitstimes.com/opinion/more-seniors-should-have-access-to-bixeps-to-strengthen-muscles-and-stay-active-for-longer" target="_blank" rel="noreferrer">
                  straitstimes.com/.../more-seniors-should-have-access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Regulatory badges */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-secondary/30 bg-white p-6 md:p-8">
            <h3 className="text-xl font-semibold text-primary">Regulatory status</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-secondary/30 p-4">
                <p className="text-sm text-gray-500">United States</p>
                <p className="font-medium text-primary">FDA-cleared model (clinical)</p>
              </div>
              <div className="rounded-lg border border-secondary/30 p-4">
                <p className="text-sm text-gray-500">Singapore</p>
                <p className="font-medium text-primary">HSA-registered model</p>
              </div>
              <div className="rounded-lg border border-secondary/30 p-4">
                <p className="text-sm text-gray-500">Safety</p>
                <p className="font-medium text-primary">Designed to IEC 60601 for medical electrical equipment</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Availability varies by model and market. Contact us for local regulatory details and the correct SKU for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-secondary/20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">QMT — Frequently asked questions</h2>
          <div className="mt-6 divide-y rounded-2xl border border-secondary/30 bg-white">
            {faqs.map((item, idx) => (
              <div key={idx} className="px-5">
                <button
                  className="w-full text-left py-5 flex items-center justify-between text-primary"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`faq-${idx}`}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className={`transition-transform text-accent ${open === idx ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  id={`faq-${idx}`}
                  className={`overflow-hidden transition-[max-height] duration-300 ${open === idx ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="pb-5 text-gray-700">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="enquire" className="w-full bg-accent text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-exo2">Bring QMT to your facility</h2>
            <p className="mt-3 text-white/90">
              Book a live demonstration, discuss protocols, and get model/market guidance.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="mailto:sales@yourdomain.com?subject=QMT%20Enquiry"
              className="inline-flex items-center rounded-full bg-white text-primary px-6 py-3 font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
            >
              Email Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
