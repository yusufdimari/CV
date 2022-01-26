import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

const skillSet = [
  {
    title: "HTML",
    range: 90,
  },
  {
    title: "CSS",
    range: 50,
  },
  {
    title: "JavaScript",
    range: 70,
  },
  {
    title: "C",
    range: 80,
  },
  {
    title: "C++",
    range: 30,
  },
  {
    title: "Python",
    range: 10,
  },
  {
    title: "React",
    range: 40,
  },
  {
    title: "React Native",
    range: 90,
  },
  {
    title: " Firebase",
    range: 100,
  },
];
const experiencesSet = [
  {
    title: "Rahza Soft LTD",
    period: "August 2017",
  },
  {
    title: "Sheikh Abubakar Gummi Academy",
    period: "SEP 2019 TO JUN 2019",
  },
  {
    title: "Nile University of Nigeria",
    period: "SEP 2019 till date",
  },
  {
    title: "Leadership Perspectives Limited",
    period: "OCT 2019 to date",
  },
  {
    title: "Nigerian National Petroleum Corporation",
    period: "JUL 2021 to OCT 2021",
  },
];
const projectsSet = [
  {
    from: "AUG 2017",
    to: "SEP2017",
    title: "SIMPLE WEBPAGE",
    client: "Rahza Soft, Abuja",
    environment: "Notepad++",
  },
  {
    from: "NOV 2018",
    to: "JAN 2019",
    title: "SCRATCH",
    client: "Sheikh Gummi Academy, Abuja",
    environment: "Gaming and Animation, Scratch",
  },
  {
    from: "NOV 2020",
    to: "DEC 2020",
    title: "STATIC WEBSITE",
    client: "MR Umar Adam Ibrahim",
    environment: "HTML & CSS, Notepad++",
  },
  {
    from: "NOV 2020",
    to: "DEC 2020",
    title: "DYNAMIC WEBSITE",
    client: "MR Umar Adam Ibrahim",
    environment: "HTML, CSS & PHP, Notepad++ & Xampp",
  },
  {
    from: "AUG 2021",
    to: "SEP 2021",
    title: "TO-DO LIST",
    client: "MR Mahdi Aminu",
    environment: "Mobile App, React Native",
  },
  {
    from: "SEP 2021",
    to: "OCT 2019",
    title: "TIC-TAC-TOE GAME",
    client: "MR Badero",
    environment: "Mobile App, React Native",
  },
  {
    from: "DEC 2021",
    to: "JAN 2022",
    title: "HUE BANKING APP",
    client: "MR Salisu",
    environment: "Mobile App, React Native",
  },
];

const loadSkills = () => {
  const skills = document.querySelector(".skills");
  const sortedArray = skillSet.sort(function (a, b) {
    return b.range - a.range;
  });
  for (let i = 0; i < sortedArray.length; i++) {
    let html = `<div class="skill">
                    <div class="skill-name">
                    ${sortedArray[i].title}
                    </div>
                    <div class="range-container">
                    <div class="range" style="width:${sortedArray[i].range}%"></div>
                    </div>
                    </div>`;
    skills.innerHTML += html;
  }
};
const loadExperiences = () => {
  const experiences = document.querySelector(".experiences");
  experiencesSet.forEach((experience) => {
    let html = `<li>${experience.title}</br><span class="detail2">${experience.period}</span></li>`;
    experiences.innerHTML += html;
  });
};

const loadProjects = () => {
  const projects = document.querySelector(".projects");
  projectsSet.forEach((project) => {
    let html = `<div class="project">
        <div class="section1">
            <p>${project.from}</p>
            <p>to</p>
            <p>${project.to}</p>
        </div>
        <div class="separator">
            <div class="v-line"></div>
        </div>
        <div class="section2">
            <p class="project-title">${project.title}</p>
            <p class="client">Client: ${project.client}</p>
            <p class="env-details">Environment: ${project.environment}</p>
        </div>
    </div>`;
    projects.innerHTML += html;
  });
};

const load = () => {
  loadSkills();
  loadExperiences();
  loadProjects();
};
function App() {
  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <div class="container">
        <div class="main">
          {/* <!--Left Section--> */}
          <div class="left">
            <center>{/* <img src="yusuf.jpg" alt "yusuf"> */}</center>

            {/* <!-- Contacts Section --> */}
            <div class="section-container">
              <div class="contact-details">
                <div class="contact">
                  <div class="label">Phone:</div>
                  <div class="value">+234 8132480901 +234 9055969965</div>
                </div>
                <div class="contact">
                  <div class="label">Email:</div>
                  <div class="value">dimarijnr@icloud.com</div>
                </div>
                <div class="contact">
                  <div class="label">Address</div>
                  <div class="value">Area 11, Abuja.</div>
                </div>
              </div>

              {/* <!-- Skills Section --> */}

              <div class="section-container">
                <div class="head">Skills</div>
                <div class="skills"></div>
              </div>

              {/* <!-- Languages --> */}

              <div class="section-container">
                <div class="head">Languages</div>
                <div class="languages">
                  <div class="language">English</div>
                  <div class="range-container">
                    <div class="range w100"></div>
                  </div>
                  <div class="language">Arabic</div>
                  <div class="range-container">
                    <div class="range w50"></div>
                  </div>

                  <div class="language">French</div>
                  <div class="range-container">
                    <div class="range w10"></div>
                  </div>
                </div>
              </div>

              <div class="section-container">
                <div class="head">Certifications</div>
                <div class="certification">
                  Rahza Software LTD, web development, Graphics design and
                  gaming/animation August,2017
                </div>
                <div class="certification">
                  Udemy, Ethical Hacking course july, 2020.
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="profile-info">
                <div class="name">Yusuf Muhammd Dimari</div>
                <div class="title">To-be Software Engineer</div>
              </div>
            </div>

            <div class="content">
              <div class="education section">
                <div class="section-head">Education</div>
                <table>
                  <tr>
                    <th>School</th>
                    <th>Class</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>Ar-rahman</td>
                    <td>NUR 1 and 2 </td>
                    <td>2006-2008</td>
                  </tr>
                  <tr>
                    <td>Ar-rahman</td>
                    <td>PRI 1-6</td>
                    <td>2008-2013</td>
                  </tr>
                  <tr>
                    <td>Ar-rahman</td>
                    <td>JSS 1-3</td>
                    <td>2013-2016</td>
                  </tr>
                  <tr>
                    <td>Sheikh Gummi Academy</td>
                    <td>SS 1-3</td>
                    <td>2016-2019</td>
                  </tr>
                </table>
              </div>

              <div class="experience section">
                <div class="section-head">Experience</div>
                <ul class="experiences"></ul>
              </div>

              <div class="projects">
                <div class="section-head">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
