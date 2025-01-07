import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Country = lazy(() => import("./components/Countries/Country"));
const Documents = lazy(() => import("./components/Documents/Documents"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

function App() {
  return (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <Loading />
        </div>
      }
    >
      <div className="App">
        <Navbar />
        <section>
          <div className="container">
            <Country />
            <Documents />
            <Navigation />
          </div>
        </section>
      </div>
    </Suspense>
  );
}

export default App;
