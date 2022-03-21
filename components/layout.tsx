import styles from "../styles/Home.module.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="../">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/blog/first">
                First-article
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/blog/second">
                Second-article
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div>{children}</div>

      <footer className={styles.footer}>Powered by Nordine 2022</footer>
    </div>
  );
};
