import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

function StartingPageContent() {
  return (
    <div>
      <Filter />
      <MovieList />
    </div>
  );
}

export default StartingPageContent;
