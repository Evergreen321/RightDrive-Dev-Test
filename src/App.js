import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import "./App.css";
import ImgMediaCard from "./ImgMediaCard/ImgMediaCard";
import ContainedButton from "./ContainedButton/ContainedButton";
import ServerModal from "./ServerModal/ServerModal";

const LIMIT_PER_PAGE = 4;

function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const OFFSET = (currentPage - 1) * LIMIT_PER_PAGE;

  useEffect(() => {
    fetch(
      `https://api.coincap.io/v2/assets?limit=${LIMIT_PER_PAGE}&offset=${OFFSET}`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => {
        setError(true);
        console.log("error", error);
      });
  }, [currentPage]);

  const hadleChangePagination = (event, value) => {
    setCurrentPage(value);
  };

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
        </Box>

        <Pagination
          count={25}
          defaultPage={1}
          page={currentPage}
          onChange={hadleChangePagination}
        />
      </header>
    </div>
  );
}

export default App;
