
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProviderList from "./data/pages/ProviderList";
import "./custom.css";
import NotFound from "./pages/NotFound";
import providersData from "./data/providers.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProviderDetail from "./pages/ProviderDetail";
import Header from "./components/Header";

function AnimatedRoutes({ providers }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    
    <div className="body-style">
    <Header/>
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search by name or specialization..."
                  className="form-control mb-3 mt-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ProviderList providers={providers} searchTerm={searchTerm} />
            </>
          }
        />
        <Route
          path="/providers/:id"
          element={<ProviderDetail providers={providers} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
       
    </AnimatePresence>
    </div>
  );
}

function App() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Simulate async API call
    setTimeout(() => {
      setProviders(providersData);
    }, 500);
  }, []);

  return (
    <Router >
      <AnimatedRoutes providers={providers} />
    </Router>
  );
}

export default App;
