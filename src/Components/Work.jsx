import ncNews from "../assets/nc-news.png";
import React from "react";
import ReactPlayer from "react-player";

function Work() {
  return (
    <div className="nc-news">
      <h5>NC News</h5>
      <img src={ncNews} alt="" />
      <p>
        A full-stack news web application inspired by Reddit, comprising a
        RESTful API built with Express.js and PostgreSQL, and a dynamic React
        frontend. The project adheres to Model-View-Controller (MVC)
        architecture on the backend and emphasizes clean code, scalable
        structure, and a smooth user experience. The user is logged in as
        butter_bridge and is able to post and delete comments, as well as like
        posts from other users.
      </p>
      <h5>Backend</h5>
      <p className="tech-stack">
        Tech Stack: Node.js, Express.js, PostgreSQL, Jest
      </p>
      <p>
        Features: Fetch articles, topics, users, and comments Post new comments,
        like articles/comments. Supports pagination, sorting, and filtering.
        Comprehensive test coverage with Jest.
      </p>
      <a href="https://github.com/katmiah/be-nc-news">GitHub Link</a>
      <h5>Frontend</h5>
      <p></p>
      <p className="tech-stack">Tech Stack: React, Axios, React Router, CSS</p>
      <p>
        Features: Browse and filter news articles by topic. Like articles and
        post comments. Responsive design with intuitive UX.
      </p>
      <a href="https://github.com/katmiah/fe-nc-news">GitHub Link</a>
      <a href="https://katie-nc-news.netlify.app/">Live project</a>

      <section></section>

      <div>
        <h5>2Gather</h5>
        <ReactPlayer url="https://www.youtube.com/watch?v=jVDISdUYS6I" />
        <p>
          Built during the group project phase of the Northcoders bootcamp,
          2Gather is a full-stack React Native app designed to help users
          connect through one-on-one events. Users can sign up, host their own
          events, and request to join others'. The app is built with React
          Native, Fastify, and PostgreSQL (via Supabase), featuring Base64 image
          handling for efficient uploads and a seamless cross-platform
          experience. Developed collaboratively using agile methodologies and
          GitHub for version control.
        </p>
        <h5>Backend</h5>
        <p>
          Features: The backend of 2Gather is built with Fastify and PostgreSQL
          (via Supabase), providing a high-performance RESTful API that supports
          event creation and attendance management, and Base64-encoded image
          handling. It’s deployed on Render and designed for smooth integration
          with the frontend.
        </p>
        <p></p>
        <a href="https://github.com/katmiah/be-nc-news">GitHub Link</a>
        <h5>Frontend</h5>
        <p></p>
        <p>Tech Stack: React, Axios, React Router, CSS</p>
        <p>
          Features: Browse and filter news articles by topic. Like articles and
          post comments. Responsive design with intuitive UX.
        </p>
        <a href="https://github.com/katmiah/fe-nc-news">GitHub Link</a>
        <a href="https://katie-nc-news.netlify.app/">Live project</a>
      </div>
    </div>
  );
}
export default Work;
