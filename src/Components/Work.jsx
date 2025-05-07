import ncNews from "../assets/nc-news.png";

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
    </div>
  );
}
export default Work;
