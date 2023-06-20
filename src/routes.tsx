import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignPage from './Pages/SignPage';
import StorePage from "./Pages/StorePage";
import LibraryPage from "./Pages/LibraryPage";
import FavoritePage from "./Pages/FavoritePage";
import AboutPage from "./Pages/AboutPage";


const AppRouter: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    );
  };

  export default AppRouter

