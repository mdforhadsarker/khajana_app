import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import View from "./View";
import Create from "./Create";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
