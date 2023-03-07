import logo from "./logo.svg";
import "./App.css";
import ImgMediaCard from "./ImgMediaCard/ImgMediaCard";
import PaginationLink from "./PaginationLink/PaginationLink";
import ContainedButton from "./ContainedButton/ContainedButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RightDrive Dev Test</h1>
        <ImgMediaCard />
        <PaginationLink />
        <ContainedButton />
      </header>
    </div>
  );
}

export default App;
