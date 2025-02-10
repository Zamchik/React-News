import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(element) => setKeywords(element.target.value)}
        placeholder="Javascript" />
    </div>
  );
};

export default Search;
