import "./Token.css"

export default function Token({unit}) {

    const token = {
        image: "https://i.imgur.com/uFcF0FK.png",
        position: [2,2]
    }
    return (
        <div className="token"><img className='image' src={`${unit.image}`} alt=''></img></div>
    )
}

