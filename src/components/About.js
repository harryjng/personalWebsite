import './About.css';

export default function Hero() {
    return (
        <section id="AboutMe" className="about-section">
            <div className='about'>
                <p>
                    I’m a software engineer with a strong foundation in <span className='highlight-word'>full-stack development</span>, 
                    <span className='highlight-word'> machine learning</span>, and <span className='highlight-word'>human-centered design</span>. I’m passionate about building impactful tools 
                    from secure <span className='highlight-word'>mobile apps</span> and AI-powered systems to real-time mapping platforms that solve real-world problems.
                </p>
                <p>
                    Currently, I’m a Software Engineer at <span className='highlight-word'>Akima</span>, where I support federal 
                    clients by building internal tools. I recently delivered an XR-based construction 
                    visualization tool, as well as a military-grade emergency response platform. I hold a Secret-level clearance 
                    and enjoy contributing to engineering in the public sector.
                </p>
                <p>
                    My work spans startups, labs, and <span className='highlight-word'>nonprofit</span> settings. At the <span className='highlight-word'>Real time Computing Lab</span>, I've developed 
                    algorithms to reduce shoulder surfing. I’ve also led <span className='highlight-word'>full-stack projects</span> for organizations, improved 
                    automation, and built several AI-powered tools—from a <span className='highlight-word'>colorization model</span> to a real-time NBA 
                    performance predictor.

                </p>
                <p>
                    In my spare time, you’ll often find me spending time with friends and family, playing 
                    soccer, and exploring new cities and cuisines.

                </p>
            </div>
        </section>
    );
};