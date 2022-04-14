import React from "react"

export default function Meme(){

    const [meme, setMeme] = React.useState(
        {
            topText: 'One does not simply',
            bottomText: 'Walk into Mordor',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        })

    const [allMemes, setAllMemes] = React.useState([])

    function onClickHandler() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = memesArray[randomNumber].url
        setMeme( prevState => ({
            ...prevState,
            randomImage: randomUrl
        }))
    }

    function changeHandler(event){
        let {name, value} = event.target
        setMeme( prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json().then(res => setAllMemes(res.data.memes)))
    },[])

    return (
        <main>
            <div className='form'>
                <input onChange={changeHandler}
                    type="text"
                    className='form--input'
                    placeholder='top text'
                       name='topText'
                       value={meme.topText}

                />
                <input onChange={changeHandler}
                    type="text"
                    className='form--input'
                    placeholder='bottom text'
                       name = 'bottomText'
                       value={meme.bottomText}
                />
                <button onClick={onClickHandler}
                        className='form--button'
                >Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="oups" className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>


        </main>
    )
}