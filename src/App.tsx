import "./App.css";
import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import { mobileContext } from "./utils/context.ts";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Unfound from "./pages/Unfound";
import Header from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [mobileView, setMobileView] = useState<boolean>(
    window.innerWidth < 1000
  );

  useEffect(() => {
    function setMobileViewOnResize() {
      setMobileView(window.innerWidth < 1000);
    }
    window.addEventListener("resize", setMobileViewOnResize);
    return () => {
      window.removeEventListener("resize", setMobileViewOnResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <mobileContext.Provider value={{ mobileView, setMobileView }}>
        <div className="app">
          <div
            className="sidebar"
            style={{
              width: !mobileView ? "225px" : "82px",
              transition: "width 0.25s ease-in-out",
            }}
          >
            <Sidebar />
          </div>
          <div className="main">
            <div className="header">
              <Header />
            </div>
            <div className="main_content">
              <Routes>
                <Route index path="/" element={<Dashboard />} />
                <Route index path="/transactions" element={<Transactions />} />
                <Route index path="/accounts" element={<Accounts />} />
                <Route index path="/investments" element={<Investments />} />
                <Route index path="/cards" element={<Cards />} />
                <Route index path="/loans" element={<Loans />} />
                <Route index path="/services" element={<Services />} />
                <Route index path="/settings" element={<Settings />} />
                <Route index path="*" element={<Unfound />} />
              </Routes>
            </div>
          </div>
        </div>
      </mobileContext.Provider>
    </BrowserRouter>
  );
}

export default App;
