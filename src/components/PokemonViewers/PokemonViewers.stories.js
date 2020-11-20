import PokemonViewers from "./PokemonViewers";

export default {
  title: "POKEMON/PokemonViewers",
  component: PokemonViewers,
};

export const PokemonViewersIdle = () => <PokemonViewers />;
export const PokemonViewersLoading = () => <PokemonViewers status="loading" />;
export const PokemonViewersResolved = () => (
  <PokemonViewers status="resolved" />
);
export const PokemonViewersError = () => <PokemonViewers status="error" />;
