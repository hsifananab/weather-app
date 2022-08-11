import styles from './Search.module.css';

const Search = ({ onChange, value, onGetWeather }) => {
  const valueChangeHandler = e => onChange(e.target.value);
  const keyDownChangeHandler = e => onGetWeather(e.target.value);

  return (
    <div className={styles.Search}>
      <input
        type="text"
        className={styles.Input}
        placeholder="Enter City..."
        onChange={valueChangeHandler}
        value={value}
        onKeyDown={keyDownChangeHandler}
      />
    </div>
  );
};

export default Search;
