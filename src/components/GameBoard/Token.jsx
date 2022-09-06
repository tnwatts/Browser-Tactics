import "./Token.css"

export default function Token({}) {

    const token = {
        image: "https://i.imgur.com/uFcF0FK.png",
        position: [2,2]
    }
    return (
        <div className="token"><img className='image' src={`${token.image}`} alt=''></img></div>
    )
}

