export default function Experience() {
  return (
<section id="Experience" className="mt-[8rem] mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mr-[6.8rem]">
      {/* Hover background and inset shadow */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      {/* Date */}
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label="2024 to Present"
      >
        2024 — Present
      </header>

      {/* Content */}
<div className="z-10 sm:col-span-6">
  <h3 className="font-medium leading-snug text-slate-200">
    <div>
      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
        <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out">
          Software Engineer ·{' '}
          <span className="inline-block">
            Akima
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </span>
    </div>
  </h3>


        {/* Description */}
        <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium">
Built an XR tool for 3D construction visualization using Meta Quest 3. Reduced design review time by 25% and increased collaboration efficiency by 30% through virtual walkthroughs. Developed a military Emergency 911 system, improving response time by 30% through geospatial mapping and real-time data integration.

        </p>

        {/* Skills */}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {[
            'React.js',
            'Express.js',
            'MySQL',
            'AWS',
            'Leaflet',
            'Unity3D',
            'C#',
          ].map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}