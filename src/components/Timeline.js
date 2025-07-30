// Timeline.jsx
import './Timeline.css';
import { useState } from 'react';
import Michigan from '../assets/michigan.jpeg'
import Baby from '../assets/baby.jpeg'
import Maryland from '../assets/maryland.jpeg'
import California from '../assets/California.jpeg'
import Pennsylvania from '../assets/Pennsylvania.jpeg'
import Michigan2021 from '../assets/Michigan2021.jpeg'
import Korea from '../assets/korea.jpeg'
import MajorChange from '../assets/MajorChange.jpeg'
import Wsa from '../assets/wsa.png'
import Zetapi from '../assets/zetapi.jpeg'
import Akp from '../assets/akp.png'
import Arv from '../assets/arv.jpeg'
import Rtcl from '../assets/rtcl.png'
import ZetaSocial from '../assets/zetapisocial.jpeg'
import AkimaIntern from '../assets/akimaintern.jpeg'
import Akima from '../assets/akima.jpeg'

const timelineData = [
    {
    id: 1,
    date: 'Feb 24, 2003',
    title: 'Born in Detroit, Michigan.',
    description: <div>
      <p>
        Lived in Troy, Michigan until the age of 5.
      </p>
      <img src={Baby} alt="Baby Harry" className='timeline-img'/>
      </div>,
    category: 'Life'
  },
  {
    id: 2,
    date: 'May 2008',
    title: 'Moved to South Korea.',
    description: <div>
      <p>
        Attended Kindergarten and Min Baek Elementary.
      </p>
      <img src={Korea} alt="Harry and her friend" className='timeline-img'/>
    </div>,
    category: 'Life'
  },
  {
    id: 3,
    date: 'Aug 2013',
    title: 'Moved back to the United States.',
    description: <div>
      <p>
        Attended Elementary and Middle School in California.
      </p>
      <img src={California} alt="Golfing with Mom in California" className='timeline-img'/>
    </div>,
    category: 'Life'
  },
  {
    id: 4,
    date: 'Aug 2017',
    title: 'Moved to Pennsylvania.',
    description: <div>
      <p>
        Attended the George School.
      </p>
      <img src={Pennsylvania} alt="With Friends" className='timeline-img'/>
    </div>,
    category: 'Education'
  },
  {
    id: 5,
    date: 'Dec 2018',
    title: 'Moved to Maryland.',
    description: <div>
      <p>Graduated Walter Johnson High School.</p>
      <img src={Maryland} alt = "High School Graduation" className = 'timeline-img'/>
    </div>,
    category: 'Education'
  },
  {
    id: 6,
    date: 'Aug 2021',
    title: 'Started attending University of Michigan.',
    description: <div>
      <p>
        Began my college studies as a Nursing major.
      </p>
      <img src={Michigan2021} alt = "Harry and Adesh" className = 'timeline-img' />
    </div>,
    category: 'Education'
  },
  {
    id: 7,
    date: 'Jan 2023',
    title: 'Change of Major.',
    description: <div>
      <p>
        Started studying computer science.
      </p>
      <img src={MajorChange} alt="Coding" className = 'timeline-img' />
    </div>,
    category: 'Education'
  },
  {
    id: 8,
    date: 'Feb 2023',
    title: 'Software Engineer Fellow at Wolverine Sports Analytics',
    description: <div>
      <p>
        Generated an 85% accurate scikit-learn model to forecast NBA player performance and key success metrics.
      </p>
      <img src={Wsa} alt = "Project Team Logo" className='timeline-img' />
    </div>,
    category: 'Projects'
  },
  {
    id: 9,
    date: 'April 2023',
    title: 'Lead Website and App Developer for Zeta Pi',
    description: <div>
      <p>
        Implemented club mobile app and website zetapi.tech with Flutter and JavaScript.
      </p>
      <img src={Zetapi} alt="Zeta Pi Logo" className='timeline-img' />
    </div>,
    category: 'Projects'
  },
  {
    id: 10,
    date: 'May 2023',
    title: 'Software Intern at AKP Sports Foundation',
    description: <div>
      <p>
        Managed sporting operations for the Asian American community across America, using data-driven
strategies and technology to improve event coordination and participant engagement.
      </p>
      <img src={Akp} alt="AKP Logo" className='timeline-img' />
    </div>,
    category: 'Work'
  },
  {
    id: 11,
    date: 'Aug 2023',
    title: 'Machine Learning Fellow at University of Michigan Autonomous Robotic Vehicle',
    description: <div>
      <p>
        Devised proximity and motor decision algorithms, advancing toward a streel-legal autonomous car.
      </p>
      <img src={Arv} alt="ARV Logo" className='timeline-logo' />
    </div>,
    category: 'Projects'
  },
  {
    id: 12,
    date: 'April 2024',
    title: 'Undergraduate Researcher at University of Michigan Real-Time Computing Lab.',
    description: <div>
      <p>
        Developed a Kotlin algorithm in Android Studio to prevent shoulder surfing with low user disruption.
      </p>
      <img src={Rtcl} alt="RTCL Logo" className='timeline-img' />
    </div>,
    category: 'Projects'
  },
  {
    id: 13,
    date: 'May 2024',
    title: 'Social Chair at Zeta Pi',
    description: <div>
      <p>
        Led event planning and execution for a collegiate fraternity in Ann Arbor, MI, demonstrating strong leadership.
      </p>
      <img src={ZetaSocial} alt="Zeta Pi Members" className='timeline-img' />
    </div>,
    category: 'Projects'
  },

  {
    id: 14,
    date: 'June 2024',
    title: 'Software Engineering Intern at Akima',
    description: <div>
      <p>
        Created a military Emergency 911 system and an XR tool with Meta Quest 3.
      </p>
      <img src={AkimaIntern} alt="Akima Internship Certification" className='timeline-img' />
    </div>,
    category: 'Work'
  },
  {
    id: 15,
    date: 'May 2025',
    title: 'College Graduation',
    description: <div>
      <p>
        Graduated from the university of Michigan with a bachelor's degree in Computer Science.
      </p>
      <img src={Michigan} alt="School graduation" className='timeline-img'/>
      </div>,
    category: 'Education'
  },
  {
    id: 16,
    date: 'Present',
    title: 'Software Engineer at Akima',
    description: <div>
      <p>
        Joined full-time as a Secret Clearance Cleared Software Engineer.
      </p>
      <img src={Akima} alt="Akima Logo" className='timeline-img' />
    </div>,
    category: 'Work'
  }
];

export default function Timeline() {
  const [activeId, setActiveId] = useState(null);

  return (
        <section id="Timeline" className= "timeline-container">
          <h1>Life Timeline</h1>
      <div className="timeline-bar">
        {timelineData.map(event => (
          <div
            key={event.id}
            className={`timeline-event ${activeId === event.id ? 'active' : ''}`}
            onClick={() => setActiveId(event.id)}
            >
            <div className="event-marker" />
            <span className="event-date">{event.date}</span>
          </div>
        ))}
      </div>

      {activeId && (
        
        <div     key={activeId} className="timeline-detail">
          <button className="close-button" onClick={() => setActiveId(null)}>x</button>

          <h3>{timelineData.find(e => e.id === activeId).title}</h3>
          <p>{timelineData.find(e => e.id === activeId).description}</p>
        </div>
      )}
    </section>
  );
}