import { Layout } from "../../components/layout";
import React from "react";
import styles from "../../styles/Home.module.css";

const Second: React.FC = () => {
  const [joke, setJokes] = React.useState("");
  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((joke) => setJokes(joke.value));
  }, []);
  return (
    <Layout>
      <div className={styles.grid}>
        <a href="../../" className={styles.card}>
          <h2>Second blog jokes </h2>
          <p>{joke}</p>
        </a>
      </div>
    </Layout>
  );
};

export default Second;
