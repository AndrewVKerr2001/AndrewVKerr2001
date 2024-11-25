import React from "react";
import styles from "./header.module.css";
import { Paths } from "../../router.tsx";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {Paths.map((path)=><Link key={path.path} to={path.path ?? "/"}>{path.label}</Link>)}
            </nav>
        </header>
    )
}