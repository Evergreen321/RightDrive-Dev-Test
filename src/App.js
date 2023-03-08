import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

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

  // useEffect(() => {
  //   fetch(
  //     "https://api.simpleswap.io/get_all_currencies?api_key=222646c3-2d70-4a94-bb70-91b66ab0aca0"
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setList(data);
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       console.log("error", error);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>RightDrive Dev Test</h1>

        <ContainedButton />
        {error && <ServerModal />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            p: 2,
            m: 2,
          }}
        >
          {list.map((item) => (
            <ImgMediaCard {...item} key={item.id} />
          ))}
          /
        </Box>
        <PaginationLink />
      </header>
    </div>
  );
}

export default App;
