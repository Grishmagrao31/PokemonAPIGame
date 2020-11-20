import React from "react";
import PropTypes from "prop-types";
import styles from "./PokemonViewers.module.css";

const PokemonViewers = ({ pokemonData, status = "idle" }) => {
  return (
    <div className={styles.PokemonViewers}>
      {status === "idle" && <div> Idle:Please search for a pokemon </div>}
      {status === "loading" && (
        <div className={styles.loading}>
          Loading........ Fetching a Pokemon{" "}
        </div>
      )}
      {status === "resolved" && <div>Resolved: Got a pokemon</div>}
      {status === "error" && (
        <div className={styles.error}>
          Error: There was an error fetching the pokemon
        </div>
      )}
    </div>
  );
};

PokemonViewers.propTypes = {};

export default PokemonViewers;
