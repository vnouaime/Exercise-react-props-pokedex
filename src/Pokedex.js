import pokemon from './pokemon'
import { Pokecard } from "./Pokecard";
import "./Pokedex.css"

const Pokedex = () => {
   
    return ( 
        <>
            <h1 className="Pokedex-title">Pokedex</h1>
            {pokemon.map(p => 
                <Pokecard 
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
                />   
            )}
        </>
            
    )
}

export { Pokedex };