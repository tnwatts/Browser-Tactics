import "./Token.css"
import TokenMenu from "./TokenMenu"


export default function Token({unit, player, pos,handleClick, damage, game, turn}) {

    return (
        <div className={` player${(player+1)} ${(turn === true) ? "turn" : ""} token`} 
        style={{left: pos[0], top: pos[1]}}>
        <TokenMenu u={unit} />
            <img className='image' name={unit}  src={`${unit.image}`} onClick={()=>{handleClick(unit)}}  alt=''></img>
            <div className="health-bar light-lifted pb-1 mb-1">
                <div className="bar" style={{width:`${damage*100}%`}} ></div>
            </div>
        </div>
    )
}
