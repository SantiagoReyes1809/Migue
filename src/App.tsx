import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SurfacePro8 from "./pages/SurfacePro8";
import SurfacePro81 from "./pages/SurfacePro81";
import SurfacePro82 from "./pages/SurfacePro82";
import SurfacePro83 from "./pages/SurfacePro83";
import SurfacePro84 from "./pages/SurfacePro84";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/surface-pro-8-3":
        title = "";
        metaDescription = "";
        break;
      case "/surface-pro-8-4":
        title = "";
        metaDescription = "";
        break;
      case "/surface-pro-8-5":
        title = "";
        metaDescription = "";
        break;
      case "/surface-pro-8-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SurfacePro8 />} />
      <Route path="/surface-pro-8-3" element={<SurfacePro81 />} />
      <Route path="/surface-pro-8-4" element={<SurfacePro82 />} />
      <Route path="/surface-pro-8-5" element={<SurfacePro83 />} />
      <Route path="/surface-pro-8-1" element={<SurfacePro84 />} />
    </Routes>
  );
}
export default App;
