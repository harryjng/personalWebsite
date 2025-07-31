import './About.css';

export default function Hero() {
    return (
        <section id="AboutMe" className="about-section">
            <div className='about'>
                <p>
                    I’m a <span className="highlight-word">software engineer</span> passionate about building purposeful, user-centered technology.
                    Whether I’m designing secure mobile applications, automating workflows, or building AI-powered tools,
                    I aim to write code with purpose that solves real problems with impact.
                </p>
                <p>
                    Currently, I’m a Software Engineer at <span className="highlight-word">Akima</span>,
                    where I support federal clients by developing internal platforms and
                    technical solutions that streamline operations and enhance mission success.
                    I hold a Secret-level clearance and enjoy working at the intersection of public service and engineering.
                </p>
                <p>
                    My experience spans a wide range of environments, from government and nonprofit teams to university
                    research labs and competitive robotics. I’ve led <span className="highlight-word">mobile and web development </span>efforts,
                    contributed to <span className="highlight-word">machine learning</span> and <span className="highlight-word">computer vision</span> projects, and created
                    internal automation tools that saved hours of manual work. Notable work includes an <span className="highlight-word">AI-assisted</span> writing app, 
                    a <span className="highlight-word">security protection</span> system for Android, and an NBA performance predictor built with <span className="highlight-word">scikit-learn</span>.
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