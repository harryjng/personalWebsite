import './About.css';

export default function Hero() {
    return (
        <section id="AboutMe" className="about-section">
            <div className='about'>
                <p>
                    I’m a software engineer passionate about building purposeful, user-centered technology.
                    Whether I’m designing secure mobile applications, automating workflows, or building AI-powered tools,
                    I aim to write code with purpose that solves real problems with impact.
                </p>
                <p>
                    Currently, I’m a Software Engineering Associate at Akima,
                    where I support federal clients by developing internal platforms and
                    technical solutions that streamline operations and enhance mission success.
                    I hold a <span className="highlight-word">Secret-level clearance</span> and enjoy working at the intersection of public service and engineering.
                </p>
                <p>
                    My experience spans a wide range of environments, from government and nonprofit teams to university
                    research labs and competitive robotics. I’ve led <span className="highlight-word">mobile and web development </span>efforts,
                    contributed to <span className="highlight-word">machine learning</span> and <span className="highlight-word">computer vision projects</span>, and created
                    internal <span className="highlight-word">automation</span> tools that saved hours of manual work. Notable work includes an <span className="highlight-word">AI-assisted writing app</span>, 
                    a <span className="highlight-word">secure screen protection system for Android</span>, and an <span className="highlight-word">NBA performance predictor built with scikit-learn</span>.
                </p>
                <p>
                    Outside of work, I like to stay sharp through side projects,
                    learning new frameworks, and building things that blend function and usability.
                    You’ll often find me playing soccer, exploring
                    new cities, or exploring new cuisines.
                </p>
            </div>
        </section>
    );
};