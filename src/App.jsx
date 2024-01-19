import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HeaderNav from "./Components/HeaderNav";
import CartePage from "./Pages/CartePage";
import HomePage from "./Pages/HomePage";
import LocalisationPage from "./Pages/LocalisationPage";
import PresentationPage from "./Pages/PresentationPage";
import { RecipeProvider } from "./context/recipes";

function App() {
  return (
    <div className="app container-fluid bg-dark bg-gradient d-flex flex-column">
      <Router>
        <RecipeProvider>
          <HeaderNav />
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Presentation" element={<PresentationPage />} />
            <Route path="/Localisation" element={<LocalisationPage />} />
            <Route path="/Carte" element={<CartePage />} />
            <Route path="*" element={<Navigate to="/Home" />} />
          </Routes>
          <Footer />
        </RecipeProvider>
      </Router>
    </div>
  );
}

export default App;
