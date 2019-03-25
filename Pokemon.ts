class Pokemon {

    pointVie: number = 100;
    attackSpeed: number;
    attack: number = 15;
    nom: string;
    constructor(nom: string, attackSpeed: number) {
        this.nom = nom;
        this.attackSpeed = this.attackSpeed;
        console.log(this.nom);
    }

    pokemonAttack(pokemon1: Pokemon, pokemon2: Pokemon) {
        
        pokemon1.nom = "ditto";
        pokemon2.nom = "pikachu";
        pokemon1.attackSpeed = 48;
        pokemon2.attackSpeed = 90;
        
        if(pokemon1.nom == "ditto" && pokemon2.nom == "pikachu") {
            if(pokemon1.attackSpeed < pokemon2.attackSpeed) {
                return pokemon1;
            }
            else {
                return pokemon2;
            }
        }
    }
}
    function gererAttackPokemon(pokemon1: Pokemon, pokemon2: Pokemon) {
    
        if(this.pokemonAttack(pokemon1, pokemon2)) {
            if(pokemon1.pointVie < 0 && pokemon2.pointVie > 0) {
                pokemon1.pointVie - pokemon2.attack; 
                console.log(pokemon2.pointVie);
                return pokemon2;
            }
            else {
                pokemon2.pointVie - pokemon1.attack; 
                console.log(pokemon2.pointVie);
                return pokemon1;
            }
        }
    }
