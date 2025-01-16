import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Aaron J. Smith</h1>
        <p>
          aaron.smith_11@yahoo.com | (201) 706-**** | Jersey City, NJ
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle</p>
          <h3>Bachelor of Science in Business Administration</h3>
          <p>Centenary University</p>
          <h3>Associate of Applied Science in Computer Science</h3>
          <p>Union County College</p>
        </div>
      </section>

      <section className="section">
  <h2>Skills</h2>
  <p>Programming languages: Java, Python, JavaScript, C++</p>
  <p>Frameworks and libraries: React, Spring Boot, Django, Node.js, Express.js</p>
  <p>Database systems: MySQL, MongoDB</p>
  <p>Operating systems: Windows, Linux, MacOs</p>
  <p>Version control: Git</p>
</section>


      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Route Sales Representative</h3>
          <p>BlueTriton, Jersey City, NJ (Apr 2024 - Present)</p>
          <ul>
            <li>Engaged clients and drove sales through effective communication.</li>
            <li>Ensured consistent delivery services in varying conditions.</li>
            <li>Managed daily transportation and delivery of 250+ units.</li>
          </ul>
          <h3>Sales Development Representative</h3>
          <p>Talend, San Francisco, CA (Sep 2022 - Apr 2023)</p>
          <ul>
            <li>Executed multi-channel lead generation strategies.</li>
            <li>Qualified potential clients and exceeded lead generation metrics.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Website</h3>
          <p>
            Built a personal website using React and deployed it on GitHub Pages.
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/aaronsmith/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/aaronsmith/personal-website
            </a>
          </p>

          <h3>Online Bookstore</h3>
          <p>
            Developed a web application for an online bookstore using Spring Boot
            and MySQL.
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/aaronsmith/online-bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/aaronsmith/online-bookstore
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
