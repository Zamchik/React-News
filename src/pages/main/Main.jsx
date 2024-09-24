import { NewsBanner } from "../../componets/NewsBanner/NewsBanner";
import styles from "./styles.module.css"

export const Main = () => {
    return (
        <main className={styles.main}>
            <NewsBanner />
        </main>
    );
};