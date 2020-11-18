import { fetchpokemons, fetchPokemonURL } from './api';

it('fetchpokemons test', () => {
    return fetchpokemons().then((json) => {
        expect(json).not.toBeNull();
    });
});

it('fetchpokemon test', () => {
     jest.setTimeout(30000);
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    return fetchPokemonURL(url).then((json) => {
        expect(json).not.toBeNull();
    });
});