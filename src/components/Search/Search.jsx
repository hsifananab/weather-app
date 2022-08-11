import styles from './Search.module.css';

const Search = props => {
  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Enter City..."
        className={styles.Input}
        value={props.value}
        onChange={e => props.setLocationHandler(e.target.value)}
        onKeyPress={e => props.keyPressHandler(e.key)}
      />
    </div>
  );
};

export default Search;
