import { DarkThemeToggle } from "flowbite-react";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <DarkThemeToggle />
      <div className="container mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color={"#fff"} size={50} />
          </div>
        ) : (
          <div>
            <Header></Header>
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route index path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </BrowserRouter>
            </div>
            <FooterPage></FooterPage>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
