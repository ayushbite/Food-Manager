import React from 'react';
import './Search.css';
const Search = () => {
  return (
    <form class="search">
      <input type="text" placeholder="search recipe" />
      <button type="submit"> search</button>
    </form>
  );
};
export default Search;
