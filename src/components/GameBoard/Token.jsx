import "./Token.css"
import TokenMenu from "./TokenMenu"
import {useRef} from 'react'


export default function Token({unit, player, pos, idx, damage, u, game, turn}) {
    let tokens = useRef({})




    return (
        <div className={` player${(player+1)} ${(turn === true) ? "turn" : ""} token`} style={{left: pos[0], top: pos[1]}}>
        <TokenMenu u={u} />
            <img className='image' src={`${unit.image}`} alt=''></img>
            <div className="health-bar light-lifted pb-1 mb-1">
                <div className="bar" style={{width:`${damage*100}%`}} ></div>
            </div>
        </div>
    )
}
