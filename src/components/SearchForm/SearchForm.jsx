import { useState } from 'react';
import css from '../../Style/Style.module.css';

const SearchForm = ({ onSubmit }) => {
  const [inputData, setInputData] = useState('');

  function onChangeInput(e) {
    setInputData(e.currentTarget.value.toLowerCase());
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(inputData);
    }
  }

  return (
    <header className={css.Searchbar}>
      <form onSubmit={(e) => handleSubmit(e)} className={css.SearchForm}>
        <input
          className={css.SearchForm_input}
          name="inputData"
          onChange={(e) => onChangeInput(e)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movie"
        />
        <button type="submit" className={css.SearchForm_button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchForm;
