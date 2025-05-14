import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        text={"normal"}
        onClick={() => {
          console.log("normal");
        }}
      />
      <Button
        text={"positive"}
        onClick={() => {
          console.log("positive");
        }}
        type={"POSITIVE"}
      />
      <Button
        text={"negative"}
        onClick={() => {
          console.log("negative");
        }}
        type={"NEGATIVE"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
