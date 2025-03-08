import styles from "./styles.module.css";

interface Props {
  keywords: string
  setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
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
