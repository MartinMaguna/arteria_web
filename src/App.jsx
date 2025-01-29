import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Nav} from "./Componentes/Nav/Nav_temp";
import Ensayos from "./Componentes/Ensayos/Ensayos";
import EnsayoIndividual from "./Componentes/EnsayoIndividual/EnsayoIndividual";
import Poesia from "./Componentes/Poesia/Poesia";
import PoemaDigital from "./Componentes/PoemaDigital/PoemaDigital";
import Posdata from "./Componentes/Posdata/Posdata";
import DataArtworkViewer from "./Componentes/DataArtworkViewer/DataArtworkViewer";
import About from "./Componentes/About/About";
import { Footer } from "./Componentes/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="Content">
          <Routes>
            <Route path="/Ensayos" element={<Ensayos />} />
            <Route path="/ensayos/:id" element={<EnsayoIndividual />} />
            <Route path="/Poesia" element={<Poesia />} />
            <Route path="/poesia/:poemId" element={<PoemaDigital />} />
            <Route path="/Posdata" element={<Posdata />} />
            <Route path="/posdata/:artworkId" element={<DataArtworkViewer />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App