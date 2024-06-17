/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./MainLayout.module.css";

export default function MainStyle({ children }) {
    const themeCtx = useContext(ThemeContext);
    const { contextTheme } = themeCtx;

    return (
        <div className={contextTheme === "light" ? styles.light : styles.dark}>
            <main className={styles.container}>{children}</main>
        </div>
    );
}
