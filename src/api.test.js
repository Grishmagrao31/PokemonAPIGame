import { fetchpokemons, fetchPokemonURL, fetchPokemon } from "./api";
import lget from "lodash/get";

it("fetchpokemons test", () => {
  jest.setTimeout(30000);
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  return fetchpokemons(url).then((json) => {
    expect(json).not.toBeNull();
    // let results = json.results;
    // expect(results.length).toBe(100);
  });
});

it("fetchpokemonn test", () => {
  jest.setTimeout(30000);
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  return fetchPokemonURL(url).then((json) => {
    expect(json).not.toBeNull();
  });
});

// it('fetchpokemmon test', async () => {
//     jest.setTimeout(300000);
//     const ditto ='ditto';

//     return fetchPokemon(ditto).then((json) => {
//         expect(json).not.toBeNull();
//         // const sprites = json.sprites;
//         // expect(sprites).not.toBeNull();
//         // const other = sprites.other;
//         // expect(other).not.toBeNull();
//         // const official_artwork=other.official_artwork;
//         // expect(official_artwork).not.toBeNull();
//         // const front_default = official_artwork.front_default;
//         // expect (front_default).not.toBeNull();
//     }, 300000);
// });

it("fetchpokemonnn test", () => {
  jest.setTimeout(300000);

  const ditto = "ditto";

  return fetchPokemon(ditto).then((json) => {
    expect(json).not.toBeNull();

    // const sprites = json.sprites;
    // expect(sprites).not.toBeUndefined();
    // const other = sprites.other;
    // expect(other).not.toBeUndefined();
    // const official_artwork= other['official-artwork'];
    // expect(official_artwork).not.toBeUndefined();
    // const front_default = official_artwork.front_default;
    // expect (front_default).not.toBeUndefined();

    // let front_artwork = json ?.sprites ?.other?.["official-artwork "]?.front_default;
    // expect(front_artwork).not.toBeUndefined();
    const front_default = lget(
      json,
      "sprites.other.official-artwork.front_default"
    );
    expect(front_default).not.toBeUndefined();
  }, 30000);
});
it("fetchpokemonnn test -non existant character", () => {
  jest.setTimeout(300000);

  const nonexistent = "nonexistent";

  return fetchPokemon(nonexistent).then(
    (json) => {
      expect(json).not.toBeNull();

      // const sprites = json.sprites;
      // expect(sprites).not.toBeUndefined();
      // const other = sprites.other;
      // expect(other).not.toBeUndefined();
      // const official_artwork= other['official-artwork'];
      // expect(official_artwork).not.toBeUndefined();
      // const front_default = official_artwork.front_default;
      // expect (front_default).not.toBeUndefined();

      // let front_artwork = json ?.sprites ?.other?.["official-artwork "]?.front_default;
      // expect(front_artwork).not.toBeUndefined();
      const front_default = lget(
        json,
        "sprites.other.official-artwork.front_default"
      );
      expect(front_default).not.toBeUndefined();
    },
    (error) => {
      expect(error).not.toBeNull();
    },
    30000
  );
});
