import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";
import github from "../../assets/icons/github-mark-white.svg";

export default function Home() {
    
    return (
        <>
            <section className={twMerge(styles.section, styles.hero)}>
                <div className={twMerge(styles.container, styles.hero)}>
                    <h4 className="text-lg font-semibold">Hello <span className={styles.wave} />,</h4>
                    <h3 className="text-lg font-semibold">My name is Andrew Kerr,</h3>
                    <h1 className={styles.h1}>
                        I'm a
                        <span className={styles.jobs}>
                            <span>Software</span>
                            <span>Web</span>
                            <span>Systems</span>
                            <span>Cloud</span>
                        </span>
                        Developer
                    </h1>
                </div>
            </section>
            <section className={twMerge(styles.section, styles.section)}>
                <img src={github} alt="Github Logo"/>
            </section>
        </>
    )
}