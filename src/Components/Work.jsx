import ncNews from "../assets/nc-news.png";
import React from "react";
import ReactPlayer from "react-player";
import js from "../assets/js.svg";

function Work() {
  return (
    <>
      <section id="work">
        <div className="projects-container">
          <section className="project-section">
            <h5>NC News</h5>
            <img src={ncNews} alt="NC News Screenshot" />
            <p>
              A full-stack news web application inspired by Reddit, comprising a
              RESTful API built with Express.js and PostgreSQL, and a dynamic
              React frontend. The project adheres to Model-View-Controller (MVC)
              architecture on the backend and emphasizes clean code, scalable
              structure, and a smooth user experience. The user is logged in as
              butter_bridge and is able to post and delete comments, as well as
              like posts from other users.
            </p>

            <div className="tech-icons">
              <div className="icon" data-tooltip="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>
              <div className="icon" data-tooltip="Node.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              </div>
              <div className="icon" data-tooltip="Express">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
              </div>
              <div className="icon" data-tooltip="PostgreSQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              </div>
              <div className="icon" data-tooltip="Jest">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
              </div>
              <div className="icon" data-tooltip="React">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </div>
              <div className="icon" data-tooltip="Axios">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />
              </div>
              <div className="icon" data-tooltip="React Router">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
              </div>
            </div>

            <a href="https://github.com/katmiah/be-nc-news">
              Backend GitHub Link
            </a>
            <a href="https://github.com/katmiah/fe-nc-news">
              Frontend GitHub Link
            </a>
            <a href="https://katie-nc-news.netlify.app/">Live Project</a>
          </section>

          <section className="project-section">
            <h5>2Gather</h5>
            <div className="video-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jVDISdUYS6I"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <p>
              Built during the group project phase of the Northcoders bootcamp,
              2Gather is a full-stack React Native app designed to help users
              connect through one-on-one events. Users can sign up, host their
              own events, and request to join others'. The app is built with
              React Native, Fastify, and PostgreSQL (via Supabase), featuring
              Base64 image handling for efficient uploads and a seamless
              cross-platform experience. Developed collaboratively using agile
              methodologies and GitHub for version control.
            </p>
            <div className="tech-icons">
              <div className="icon" data-tooltip="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>
              <div className="icon" data-tooltip="React Native">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </div>
              <div className="icon" data-tooltip="Axios">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />
              </div>
              <div className="icon" data-tooltip="Node.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              </div>
              <div className="icon" data-tooltip="Fastify">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" />
              </div>
              <div className="icon" data-tooltip="PostgreSQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              </div>
              <div className="icon" data-tooltip="Supabase">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />
              </div>
            </div>
            <a href="https://github.com/orgs/2Gather-Project/repositories">
              GitHub Link
            </a>
          </section>
        </div>
      </section>
    </>
  );
}
export default Work;
