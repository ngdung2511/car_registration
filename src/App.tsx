import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";

import HeroInfo from "./components/HeroInfo";
import { Divider } from "antd";
import Container from "./components/Container";
import { MyTable } from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] z-0 w-full grid md:grid-cols-8 grid-cols-1 overflow-hidden px-4">
        <div className="w-full md:col-span-5 rounded-xl">
          <Hero />
        </div>
        <div className="w-full col-span-3">
          <HeroInfo />
        </div>
      </div>
      <Container>
        <Divider className="dark:bg-neutral-400" />
        <MyTable />
      </Container>

      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
