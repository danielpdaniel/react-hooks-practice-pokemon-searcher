import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {name, hp, sprites } = pokemon;
  const frontSprite = sprites.front;
  const backSprite = sprites.back
  const [displayedImg, setDisplayedImg] = useState(frontSprite)

  function handleClick(){
    displayedImg === frontSprite ?
    setDisplayedImg(backSprite)
    : setDisplayedImg(frontSprite)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={displayedImg}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
