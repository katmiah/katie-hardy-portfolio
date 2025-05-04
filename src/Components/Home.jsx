import image from "../assets/image.jpeg";

function Home() {
  return (
    <div>
      <header>
        <h2>Katie Hardy</h2>
      </header>
      <p>
        Hi, I’m a full-stack developer who loves turning ideas into awesome web
        experiences. I’m always exploring new tech and enjoy building apps that
        are fast, fun, and great to use—both behind the scenes and on the
        screen.
      </p>
      <img
        className="image"
        src={image}
        alt="Woman looking up at a pink camelia"
      />
    </div>
  );
}
export default Home;
