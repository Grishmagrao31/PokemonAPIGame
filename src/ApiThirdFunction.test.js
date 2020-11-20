import { fetchpokemons } from "./api";

it("fetchpokemons test", () => {
  const url = "https://pokeapi.co/api/v2/type/3";
  jest.setTimeout(30000);
  return fetchpokemons(url).then((json) => {
    expect(json).not.toBeNull();
  });
});
