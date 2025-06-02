import "./App.css";
import nftImage from "./Nuotraukos/NFT.png";

function App() {
  return (
    <main className="container">
      <h1 className="page-title">My projects</h1>
      <div className="project-grid">
        <div className="project-card">
          <img
            src={nftImage}
            alt="CSS-HTML Project"
            className="project-image"
          />
          <h2 className="project-title">CSS and HTML projects</h2>
          <div className="project-links">
            <a
              href="https://tavopavarde.github.io/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/tavopavarde/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="images/todo.png" alt="ToDo App" className="project-image" />
          <h2 className="project-title">ToDo Aplikacija</h2>
          <div className="project-links">
            <a
              href="https://tavopavarde.github.io/todo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/tavopavarde/todo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="images/ui-demo.png"
            alt="UI Demo"
            className="project-image"
          />
          <h2 className="project-title">UI Demo</h2>
          <div className="project-links">
            <a
              href="https://tavopavarde.github.io/ui-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo
            </a>
            <a
              href="https://github.com/tavopavarde/ui-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
