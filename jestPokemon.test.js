export function pokemonAttack(pokemon1, pokemon2) {
    
    if (pokemon1.attackSpeed < pokemon2.attackSpeed) {
        return pokemon2;
    }
    if (pokemon1.attackSpeed > pokemon2.attackSpeed) {
        return pokemon1;
    }
}