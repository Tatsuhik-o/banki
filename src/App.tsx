import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
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
    </BrowserRouter>
  );
}

export default App;
