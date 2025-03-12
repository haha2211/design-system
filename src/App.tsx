import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ flex: 1, maxWidth: "108rem", marginLeft: "25.6rem", marginRight: "auto", padding: "2rem" }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element: Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>

        </div>
        </div>
      </div>
    </Router>
  );
};


export default App;