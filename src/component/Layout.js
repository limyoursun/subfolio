import { Route, Routes } from "react-router-dom";

// import component
import Header from "./Header";
import Home from "./../pages/Home";
import Detail from "../pages/Detail";
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="work/:id" element={<Detail />}/>
        </Routes>
      </main>
    </>
  );
}
export default Layout;
