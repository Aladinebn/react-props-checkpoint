import React from "react";
import "./App.css";

import { Profile } from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile
          name="Mona Lisa"
          artist="Leonardo de Vinci"
          bio="un tableau de l'artiste Léonard de Vinci, réalisé entre 1503 et 1506 ou entre 1513 et 15161,2, et peut-être jusqu'à 1519 (l'artiste étant mort cette année-là, le 2 mai)3, qui représente un portrait mi-corps, probablement celui de la Florentine Lisa Gherardini, épouse de Francesco del Giocondo. Acquise par François Ier, cette peinture à l'huile sur panneau de bois de peuplier de 77 × 53 cm est exposée au musée du Louvre à Paris. La Joconde est l'un des rares tableaux attribués de façon certaine à Léonard de Vinci."
        >
          <img
            style={{
              height: "300px",
              width: "300px",
            }}
            src="/mona-lisa.png"
            alt="Mona-Lisa"
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;
