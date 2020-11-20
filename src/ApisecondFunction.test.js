import { fetchpokemons } from "./api";

it("fetchpokemon test", () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
  return fetchpokemons(url).then((json) => {
    expect(json).not.toBeNull();
  });
});
