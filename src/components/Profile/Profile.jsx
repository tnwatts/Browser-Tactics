import { createGame } from '../../utilities/games-api';
import { getThis } from '../../utilities/profiles-api';
import { useState } from "react"

export default function Profile({user}) {
    const [profile,setProfile] = useState(getThis())

    async function handleNewGame (evt) {
    evt.preventDefault();
        createGame(user._id);
    }
    console.log(profile)

    return(
        <div>

        { (!profile.inGame) &&  <button onClick={handleNewGame}>NEW GAME</button>}
        <div>PROFILE PAGE</div>
        </div>
    )
}