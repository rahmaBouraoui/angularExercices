var Pokemon = /** @class */ (function () {
    function Pokemon(nom, attackSpeed) {
        this.nom = nom;
        this.attackSpeed = this.attackSpeed;
        console.log(this.nom);
    }
    Pokemon.prototype.pokemonAttack = function (pokemon1, pokemon2) {
        pokemon1.nom = "ditto";
        pokemon2.nom = "pikachu";
        pokemon1.attackSpeed = 48;
        pokemon2.attackSpeed = 90;
        if (pokemon1.nom == "ditto" && pokemon2.nom == "pikachu") {
            if (pokemon1.attackSpeed < pokemon2.attackSpeed) {
                return pokemon1;
            }
            else {
                return pokemon2;
            }
        }
    };
    return Pokemon;
}());
