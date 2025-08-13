import './Experience.css'

export default function Experience() {
  return (
    <>
      {/* First Experience - Software Engineer at Akima */}
      <section id="Experience" className="experience-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<h1 className="experience-heading">EXPERIENCE</h1>        <a href="https://www.linkedin.com/company/cloud-lake-technology/" target="_blank"
          rel="noopener noreferrer"
          className="contents">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

          {/* Date */}
          <header
            className="z-10 mb-2 mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label="2024 to Present"
          >
            Jul 2025 — Present
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
                      Cloudlake LLC / Akima
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
            <p className="mt-2 text-[0.6rem] leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium">
              Deployed an AI-driven research platform for the Department of Defense Information Analysis Center, cutting workflow time by 97% (from 30 minutes to 1 minute). Integrated AI/ML automation for document processing and advanced search to accelerate decision-making. Delivered the project in an Agile Scrum environment, leading sprints, backlog prioritization, and stakeholder demos.           </p>

            {/* Skills */}
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {[
                'Next.js',
                'Keycloak',
                'FastAPI',
                'JWT',
                'PostgreSQL',
                'AWS (EC2, RDS, S3, VPC, Neptune, OpenSearch, Bedrock)',
                'AI/ML automation',
                'Docker',
                'GitHub',
                'Jira',
                'Confluence',
              ].map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[0.8rem] font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </section>

      <section id="Experience-2" className="experience-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background and inset shadow */}
        <a href="https://www.linkedin.com/posts/akima_internship-summerinterns-summerinternship2024-activity-7230231896318730243-4DYI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADD0bjgBVhO5Fe0R6OuKWLdsRoEnWAxo84c" target="_blank"
          rel="noopener noreferrer"
          className="contents">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

          {/* Date */}
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label="2024 to Present"
          >
            May — Aug 2024
          </header>

          {/* Content */}
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out">
                    Software Engineering Intern ·{' '}
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
                'Node.js',
                'MySQL',
                'AWS (including EC2)',
                'JavaScript',
                'C#',
                'Unity3D',
                'Bitbucket',
                'Agile',
                'Confluence'
              ].map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </section>

      {/* Second Experience - Undergraduate Researcher */}
      <section id="Experience-3" className="experience-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background and inset shadow */}
        <a href="https://rtcl.eecs.umich.edu/rtclweb/assets/publications/2023/usenix23-tang.pdf" target="_blank"
          rel="noopener noreferrer"
          className="contents">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

          {/* Date */}
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label="Apr 2024 to Aug 2024"
          >
            Apr — Aug 2024
          </header>

          {/* Content */}
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out">
                    Undergraduate Software Researcher ·{' '}
                    <span className="inline-block">
                      University of Michigan Real-Time Computing Lab
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
              Developed a Kotlin algorithm in Android Studio to prevent shoulder surfing with low user disruption. Optimized screen blurring for close distance reading while reducing wide angle recognition rates by 30%. Conducted user testing to optimize visibility and security, leading to a 20% reduction in CPU and memory usage through system improvements.
            </p>

            {/* Skills */}
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {[
                'Kotlin',
                'OpenCV',
                'Python',
                'Android Studio',
                'Java',
                'User Testing',
                'Algorithm Development',
                'Security',
              ].map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </section>

      <section id="Experience-4" className="experience-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background and inset shadow */}
        <a href="https://www.linkedin.com/company/akp-sports-foundation/posts/?feedView=all" target="_blank"
          rel="noopener noreferrer"
          className="contents">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

          {/* Date */}
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label="Apr 2024 to Aug 2024"
          >
            Apr 2023 — Aug 2024
          </header>

          {/* Content */}
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out">
                    Software Engineering Intern ·{' '}
                    <span className="inline-block">
                      AKP Sports Foundation
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
              Managed sporting operations for the Asian American community across America, using data-driven strategies and technology to improve event coordination and participant engagement.
              Streamlined document processing, reducing manual workload by 25% weekly.
              Enhanced data accuracy by 15% by developing a data entry system with validation and error tracking.
            </p>
            {/* Skills */}
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {[
                'Google Apps Script',
                'JavaScript',
              ].map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </section>
      
      <div className="resume">
        <a 
          href="/Harry_Jung_ResumeCopy.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/link resume"
        >
          <span>View Full&nbsp;</span>
          <span className="inline-block">
            Résumé
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}