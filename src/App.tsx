import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mobileContext } from "./utils/context.ts";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
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
              width: !mobileView ? "225px" : "75px",
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
              <div className="wrapper">
                <Routes>
                  <Route index path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/loans" element={<Loans />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Unfound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </mobileContext.Provider>
    </BrowserRouter>
  );
}

export default App;
