// pages/about.tsx
import Image from 'next/image';
import Link from "next/link";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Me</h1>
        <div className="flex justify-center items-center">
  <Image 
    src="/images/image1.jpg"
    alt="Nimra Ulfat"
    width={200}
    height={200}
    className="about-image"
  />
</div>
        <p>
          Hello, I am Nimra Ulfat! I am passionate about web development and eager to continue growing in the field. My journey in tech started with an interest in problem-solving and design, which led me to specialize in front-end technologies like HTML, CSS, JavaScript, and TypeScript. I have hands-on experience with frameworks such as React.js and Next.js, and I love creating intuitive, responsive user interfaces.
        </p>
        
        <Link href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/" className="btn-primary">
          Contact Me
        </Link>
      </section>

      <section className="experience">
        <div className="experience-card">
          <h3>Junior Developer</h3>
          <p>Company Name | 2021 - 2022</p>
          <p>
            Assisted senior developers with front-end development tasks, writing clean, reusable code and helping to implement design changes.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML and CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>
    </div>
  );
}
