import { useState, useEffect } from "react";

import "./App.css";
import ImgMediaCard from "./ImgMediaCard/ImgMediaCard";
import PaginationLink from "./PaginationLink/PaginationLink";
import ContainedButton from "./ContainedButton/ContainedButton";
import ServerModal from "./ServerModal/ServerModal";

function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets", {
      method: "GET",
      redirect: "follow",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => {
        setError(true);
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>RightDrive Dev Test</h1>
        {error && <ServerModal />}
        {list.map((item) => (
          <ImgMediaCard {...item} />
        ))}
        <PaginationLink />
        <ContainedButton />
      </header>
    </div>
  );
}

export default App;
