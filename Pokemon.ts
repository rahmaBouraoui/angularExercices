class Pokemon {

    
    attackSpeed: number;
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