import "./App.css";
import nftImage from "./Images/NFT.png";
import hikingImage from "./Images/HIKING.png";
import reactionGameImage from "./Images/ReactionGame.png";
import guessWordImage from "./Images/GuessWord.png";
import gameImage from "./Images/2048.png";

function App() {
  return (
    <main className="container">
      <h1 className="page-title">My projects</h1>

      <section className="project-section">
        <h2 className="section-title">HTML & CSS Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img
              src={nftImage}
              alt="CSS-HTML Project"
              className="project-image"
            />
            <h3 className="project-title">NFT project</h3>
            <div className="project-links">
              <a
                href="https://css-and-html-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web Page
              </a>
              <a
                href="https://github.com/UgniusDak/CSS-and-HTML"
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
              src={hikingImage}
              alt="CSS-HTML Project"
              className="project-image"
            />
            <h3 className="project-title">Hiking tour project</h3>
            <div className="project-links">
              <a
                href="https://hiking-tour.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web Page
              </a>
              <a
                href="https://github.com/UgniusDak/HikingTour"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2 className="section-title">JavaScript Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img
              src={reactionGameImage}
              alt="ToDo App"
              className="project-image"
            />
            <h3 className="project-title">Reaction game</h3>
            <div className="project-links">
              <a
                href="https://reaction-game-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web Page
              </a>
              <a
                href="https://github.com/UgniusDak/reaction-game"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={guessWordImage} alt="UI Demo" className="project-image" />
            <h3 className="project-title">Guess the word game</h3>
            <div className="project-links">
              <a
                href="https://javascript-word-guesser.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web Page
              </a>
              <a
                href="https://github.com/UgniusDak/javascript-word-guesser"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={gameImage} alt="UI Demo" className="project-image" />
            <h3 className="project-title">2048 Game</h3>
            <div className="project-links">
              <a
                href="https://2048-one-tau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web Page
              </a>
              <a
                href="https://github.com/UgniusDak/2048"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
