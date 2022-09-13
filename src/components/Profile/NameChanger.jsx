import { useState } from 'react';
import { setName, deleteUser } from '../../utilities/users-api';

export default function NameChanger({user, setProfile}) {
    const [newName, setNewName] = useState('')

    async function handleSubmit(evt) {
        evt.preventDefault();
          const newP = await setName(user._id,newName);
          setProfile(newP)
        } 
    console.log(newName)
    return(
        <div>
        <div className="">
          <form className="form-control dark-background light-text  lifted my-3 mx-auto border border-primary border-1" autoComplete="off" onSubmit={handleSubmit}>
            <label className="input-label">New Name</label>
            <input className="input-group rounded-2 bg-primary text-light" type="text" name="name"  onChange={(evt)=> setNewName(evt.target.value)} required />
            <button className="lighten-area col-3 btn darker-background my-2  btn-outline-info light-lifted fw-bold" type="submit">Set</button>
          </form>
        </div>
        <button onClick={()=> deleteUser(user._id)} className="btn light-text text-danger dark-backgroundg btn-outline-danger btn-danger">Delete</button> 
      </div>
    )
}