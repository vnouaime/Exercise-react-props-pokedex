import "./Pokecard.css";

const BASE_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
const Pokecard = ({id, name, type, exp}) => {
    return (
        <div className="Pokecard">
            <p className="Pokecard-name">{name}</p> 
            <img src={`${BASE_IMG_URL}/${id}.png`} alt={name} />
            <p className="Pokecard-type">type: {type}</p>
            <p className="Pokecard-exp">EXP: {exp}</p>
        </div>
    )
}


export { Pokecard }