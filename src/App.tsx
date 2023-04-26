import axios from "axios";
import { Card } from "./components/card";
import { Flex } from "./components/flex";
import { Header } from "./components/header";
import { useEffect, useState } from "react";
import { Repo } from "./types";

function App() {
  const githubRoute = "https://api.github.com/users/Beatriz-Heydman/repos";

  const [repos, setRepos] = useState<Repo[]>([]);

  async function getRepos() {
    try {
      const response = await axios.get(githubRoute);
      setRepos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <Flex direction="column">
      <Header />
      <Flex
        style={{
          minHeight: "calc(100vh - 93px)",
          width: "100%",
        }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="3rem"
          style={{ maxWidth: "1050px", padding: "2rem" }}
        >
          {repos.map((repo) => (
            <Card key={repo.id} repoName={repo.name} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
