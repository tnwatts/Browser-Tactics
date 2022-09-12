import { createGame } from '../../utilities/games-api';
import { useState, useEffect } from "react"
import { getProfile } from '../../utilities/users-api';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getUsersList } from '../../utilities/archetypes-api';

export default function Profile({user}) {
    const [profile,setProfile] = useState({})
    let navigate = useNavigate();
    
   

    useEffect(function() {
        console.log(user, 'test')
        async function loadProfile(id){
            const prof = await getProfile(id);
            setProfile(prof);
        }
        loadProfile(user._id);
    },[user])
    
    async function handleNewGame (evt) {
        evt.preventDefault();
        await createGame(user._id);
        navigate('/Game', { replace: true })
    }
    


    return(
        <>
        <div className="lighter-text text-light ">

        { (!profile.gameStatus  ) &&  <button className="btn btn-info bg-dark  lighten-area btn-outline-warning" onClick={handleNewGame}>NEW GAME</button>}
        <div className="light-lifted rounded-4 ms-4 light-background col-2">Hello {profile.name}</div>
        <div> Game Status: {profile.gameStatus ?  (`You are player ${profile.gameStatus===1 ? 'one' : 'two'}`) : "You are not in a game"}</div>
        
        <div> Game Record: {profile.wins}/{profile.losses}</div>
        </div>
   
<div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <div class="col-8" style={`background-image: url("https://w0.peakpx.com/wallpaper/815/367/HD-wallpaper-fortnite-shadow-archetype-skin-fortnite-main-characters-gray-stone-background-shadow-archetype-fortnite-skins-shadow-archetype-skin-shadow-archetype-fortnite.jpg ") `}>
            <img class="img-fluid rounded-4 mb-4 mb-lg-0" src="" alt="..." />
            <h1 class="font-weight-light light-text text-danger border border-2 border-info rounded-pill p-3 darken-area">Prepare to fight!</h1>
            </div>
       
            {profile.gameStatus && <Link className='btn btn-primary' to={'/game'}>To Game!</Link>}
     
    </div>
    <div class="card text-primary lighter-background m-2 border-2 border border-warning text-center">
    </div>
    <div class="row gx-4 light-background p-3 pb-0 rounded-5 gx-lg-5">
        <div class="col-md-4 dark-background rounded-5 p-3 mb-5">
            <div class="card light-background h-100">
                <div class="card-body dark-background">
                <img class="img-fluid rounded-4 mb-4 mb-lg-0" src={`https://i.imgur.com/rq39A3m.png`} alt="..." />
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Card Two</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        </div>
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">Card Three</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
                <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
            </div>
        {/* <div class="card-body "><p class="text-primary ">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div> */}
        </div>
    </div>
</div>
<footer class="py-5 bg-dark">
</footer>
    
        </>
    
    
    
    )
}