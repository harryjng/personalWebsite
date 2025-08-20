import './Project.css'
import WordSmith from '../assets/WordSmith.png'
import personalWebsite from '../assets/personalwebsite.png'
import ARV from '../assets/ARVcopy.jpeg'
import BlackAndWhite from '../assets/blackandwhite.png'
import wsa from '../assets/wsa.png'

export default function Project() {
  return (
    <>
      <div className='project-container' id="Projects">
        <section className="project-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <a href="https://www.youtube.com/watch?v=SOMgoDBU5QQ" target="_blank"
            rel="noopener noreferrer"
            className="contents">

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Image - positioned like date in experience section */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2 flex justify-start">
              <img src={WordSmith} alt="Project Logo" className='project-images' />
            </div>

            {/* Content - positioned like content in experience section */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out z-10">
                      WordSmith Mobile – AI Writing & Learning Platform
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
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium z-10 relative">
                Built a modular course system on Supabase with AI writing validation, Elo-based progress tracking, and voice/OCR integration using SwiftUI, Python, and OpenAI API.
              </p>

              {/* Skills */}
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {[
                  'Supabase',
                  'Python',
                  'SwiftUI',
                  'OpenAI API',
                  'AI/ML & Algorithm Development',
                  'Computer Vision & NLP',
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
        <section className="project-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <a href="https://github.com/harryjng/personalWebsite" target="_blank"
            rel="noopener noreferrer"
            className="contents">

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Image - positioned like date in experience section */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2 flex justify-start">
              <img src={personalWebsite} alt="Project Logo" className='project-images border border-white' />
            </div>

            {/* Content - positioned like content in experience section */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out z-10">
                      Personal Website – Portfolio & Resume
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
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium z-10 relative">
              Portfolio website showcasing my software engineering expertise, federal sector work, AI projects, research, and passion for impactful technology.
              </p>

              {/* Skills */}
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {[
                  'JavaScript',
                  'HTML',
                  'CSS',
                  'React',
                  'HTML',
                  'Node.js',
                  'Tailwind CSS',
                  'Bootstrap',
                  'Figma',
                  'Vercel',
                  'Github',
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

        <section className="project-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <a href="https://github.com/harryjng/personalWebsite" target="_blank"
            rel="noopener noreferrer"
            className="contents">

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Image - positioned like date in experience section */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2 flex justify-start">
              <img src={ARV} alt="Project Logo" className='project-images border border-white' />
            </div>

            {/* Content - positioned like content in experience section */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out z-10">
                      Autonomous Robotic Vehicle Team
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
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium z-10 relative">
                Built a real-time lane detection system with custom algorithms and object detection, using scalable ML pipelines and automated dataset management for reproducible, collaborative development.
              </p>
              {/* Skills */}
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {[
                  'Python',
                  'TensorFlow',
                  'OpenCV',
                  'Machine Learning',
                  'Computer Vision',
                  'Github',
                  'Jupyter Notebook',
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

        <section className="project-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <a href="https://github.com/mandyschen/BWToColorized/blob/main/BWToColorizedReport.pdf" target="_blank"
            rel="noopener noreferrer"
            className="contents">

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Image - positioned like date in experience section */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2 flex justify-start">
              <img src={BlackAndWhite} alt="Project Logo" className='project-images' />
            </div>

            {/* Content - positioned like content in experience section */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out z-10">
                      Black and White Scene Colorizer
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
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium z-10 relative">
                Developed an automatic image colorization CNN in Python/TensorFlow with LAB preprocessing and hyperparameter tuning; achieved a 4.19/5 survey score, showcasing computer vision and deep learning skills.
              </p>
              {/* Skills */}
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {[
                  'Python', 'TensorFlow/Keras', 'Machine Learning', 'Computer Vision', 'CNNs', 'Image Preprocessing',
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
        <section className="project-section group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <a href="https://www.wolverinesportsanalytics.com/projects/nba-stats-predictor" target="_blank"
            rel="noopener noreferrer"
            className="contents">

            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Image - positioned like date in experience section */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2 flex justify-start">
              <img src={wsa} alt="Project Logo" className='project-images' />            </div>

            {/* Content - positioned like content in experience section */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base relative">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span className="text-base leading-relaxed font-sans antialiased no-underline transition-colors duration-300 ease-in-out z-10">
                      NBA Fanduel Optimizer
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
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400 text-base leading-relaxed font-sans antialiased font-medium z-10 relative">
                Developed a data pipeline and ML toolkit at Wolverine Sports Analytics to forecast NBA player performance. Processed stats in MySQL, engineered features, and built an 85%-accurate scikit-learn model, revealing a 10% boost in offensive efficiency.
              </p>
              {/* Skills */}
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {[
                  'Python', 'scikit-learn', 'Machine Learning', 'MySQL', 'Web Scraping', 'numpy', 'pandas',
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
      </div>
    </>
  );
}