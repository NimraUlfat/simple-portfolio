import Image from 'next/image';
import image1 from '../../../public/images/image1.jpg'; 
import image2 from '../../../public/images/image2.jpg';
import image3 from '../../../public/images/image3.jpg';

export default function Portfolio() {
  return (
    <div className="home">
      <section className="intro">
        <Image 
          src={image1} 
          alt="img" 
          width={180} 
          height={250} 
          className="profile-picture"
        />
        <h1>Hello, I am <span>Nimra Ulfat</span></h1>
        <p>I am a creative developer specializing in front-end development. Check out my work below!</p>
        <a href="#projects" className="btn-primary">View Projects</a>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.js</li>
        </ul>
      </section>

      {/* Featured Projects Section */}
<section id="projects" className="projects">
  <h2>Featured Projects</h2>
  <div className="project-cards">
    <div className="project-card">
      <Image 
        src={image2} 
        alt="img" 
        width="350" 
        height="350" 
      />
      <h3>Project 1</h3>
      <p>A brief description of my first project goes here.</p>
      <a href="https://github.com/NimraUlfat/Milestone5" className="btn-secondary">View on GitHub</a>
    </div>

    <div className="project-card">
      <Image
        src={image3} 
        alt="img" 
        width="350" 
        height="350" 
      />
      <h3>Project 2</h3>
      <p>A brief description of my second project goes here.</p>
      <a href="https://github.com/NimraUlfat/assignment-4-5" className="btn-secondary">View on GitHub</a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>If you would like to connect, feel free to reach out!</p>
        <a href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/" className="btn-primary">Contact Me</a>
      </section>
    </div>
  );
}
