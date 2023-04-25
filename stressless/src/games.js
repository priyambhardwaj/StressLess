import React from "react";
import "../src/css/techniques.css";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="tech">
      <h1>Stress Relieving Games</h1>
      <div className="techniques">
        <div className="tech-card">
          <h2>Games</h2>
          <p className="price">Relieving methods</p>
          <ol>
            
            <li>
              <Link to="https://playingcards.io/">Playingcards.io</Link>
              </li>
              <li>
              <Link to="https://skribbl.io/">Skribbl.io</Link>
              </li>
              <li>
              <Link to="https://freerice.com/categories/english-vocabulary">Free Rice</Link>
              </li>
              <li>
              <Link to="https://www.jigsawexplorer.com/">Jigsaw Explorer to</Link>
              </li>
              <li>
              <Link to="https://www.charlottesweb.com/puzzles-mind-games-optical-illusions-for-your-brain">Puzzles, Mind Games & Optical Illusions to Get Your Brain Working i</Link>
              </li>
              <li>
              <Link to="https://libguides.library.drexel.edu/c.php?g=1040744&p=7560824">References</Link>
              </li>
              
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Games;
