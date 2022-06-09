import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

const skillSet = [
  {
    title: "HTML",
    range: 80,
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
    range: 70,
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
    range: 85,
  },
  {
    title: "React Native",
    range: 90,
  },
  {
    title: " Firebase",
    range: 60,
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
  // {
  //   from: "AUG 2017",
  //   to: "SEP2017",
  //   title: "SIMPLE WEBPAGE",
  //   client: "Rahza Soft, Abuja",
  //   environment: "Notepad++",
  // },
  // {
  //   from: "NOV 2018",
  //   to: "JAN 2019",
  //   title: "SCRATCH",
  //   client: "Sheikh Gummi Academy, Abuja",
  //   environment: "Gaming and Animation, Scratch",
  // },
  // {
  //   from: "NOV 2020",
  //   to: "DEC 2020",
  //   title: "STATIC WEBSITE",
  //   client: "MR Umar Adam Ibrahim",
  //   environment: "HTML & CSS, Notepad++",
  // },
  // {
  //   from: "NOV 2020",
  //   to: "DEC 2020",
  //   title: "DYNAMIC WEBSITE",
  //   client: "MR Umar Adam Ibrahim",
  //   environment: "HTML, CSS & PHP, Notepad++ & Xampp",
  // },
  {
    from: "JAN 2022",
    to: "JAN 2022",
    title: "My CV",
    description: "A virtual copy of my CV",
    client: "Temitope Project",
    environment: "React",
    platform: "Web App",
  },
  {
    from: "AUG 2021",
    to: "SEP 2021",
    title: "TO-DO LIST",
    description: "A TO-DO list App with dark mode integration",
    client: "MR Mahdi Aminu",
    environment: "React Native",
  },
  {
    from: "SEP 2021",
    to: "OCT 2019",
    title: "TIC-TAC-TOE GAME",
    description: "A Tic-Tac-Toe Game",
    client: "MR Badero",
    environment: "React Native",
  },
  {
    from: "DEC 2021",
    to: "JAN 2022",
    title: "HUE BANKING APP",
    description: "A Mobile banking app for color blinded people",
    client: "MR Salisu",
    environment: "React Native",
  },
  {
    from: "JAN 2022",
    to: "JUN 2022",
    title: "Air Care",
    description:
      "A health app that allows patients to connect with doctors remotely",
    client: "Temitope Project",
    environment: "React Native",
  },
  {
    from: "MARCH 2022",
    to: "JUN 2022",
    title: "Sharing  APP",
    description: "A Mobile App that allows users to borrow out",
    client: "Dr Ibrahim Anka",
    environment: "Android Studio(JAVA)",
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
            <p class="env-details"><b>Platform:</b> ${
              !project.platform ? "Mobile" : project.platform
            }</p>
            <p class="env-details"><b>Environment:</b> ${
              project.environment
            }</p>
            <p class="description"><b>Description:</b> ${
              project.description
            }</p>
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
                  <div class="value">
                    +234 8132480901 <br />
                    +234 9055969965
                  </div>
                </div>
                <div class="contact">
                  <div class="label">Email:</div>
                  <div class="value">
                    {" "}
                    ysf.dimari.yd@gmail.com <br /> dimarijnr@icloud.com
                  </div>
                </div>
                <div class="contact">
                  <div class="label">Address</div>
                  <div class="value">Area 11, Abuja.</div>
                </div>
                <div class="contact">
                  <div class="href">
                    <b>My Github:</b>{" "}
                    <a href="https://github.com/yusufdimari" target="_blank">
                      Yusuf Dimari
                    </a>{" "}
                  </div>
                </div>
                <div class="contact">
                  <div class="href">
                    <b>My LinkedIn:</b>{" "}
                    <a
                      href="https://ng.linkedin.com/in/yusuf-dimari-32ab561b8"
                      target="_blank"
                    >
                      Yusuf Dimari
                    </a>{" "}
                  </div>
                </div>
                <div class="contact">
                  <div class="href">
                    <b>My Twitter:</b>{" "}
                    <a href="https://twitter.com/dimariyusuf" target="_blank">
                      Yusuf Dimari
                    </a>{" "}
                  </div>
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
                <ul>
                  <li>
                    <div class="certification">
                      <div class="certificationTitle">Rahza Software LTD</div>
                      Web development, Graphics design
                      <br />
                      gaming/animation
                      <br /> August 2017
                    </div>
                  </li>
                  <li>
                    <div class="certification">
                      <div class="certificationTitle">Udemy</div>
                      Ethical Hacking course <br />
                      july 2020
                    </div>
                  </li>
                  <li>
                    <li>
                      <div class="certification">
                        <div class="certificationTitle">Programiz</div>
                        C Programming
                        <br />
                        2020
                      </div>
                    </li>

                    <div class="certification">
                      <div class="certificationTitle">NACOS National</div>
                      Youth Employability Summit
                      <br /> June 2021
                    </div>
                  </li>
                  <li>
                    <div class="certification">
                      <div class="certificationTitle">Udemy</div>
                      AI for Energy Hackaton
                      <br />
                      September 2021
                    </div>
                  </li>
                </ul>
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
