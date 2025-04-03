import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";

interface Props {
  keywords: string
  setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme()
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(element) => setKeywords(element.target.value)}
        placeholder="Search..." />
    </div>
  );
};

export default Search;
