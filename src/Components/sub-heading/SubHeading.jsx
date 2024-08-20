import styles from "./SubHeading.module.css";

export default function SubHeading({ title }) {
    return <div
        className={`${styles.categoryHeaderTitleContanier} col-12`}>
        <h2
            className={`${styles.categoryHeaderTitle}`}
        >
            {title}
        </h2>
    </div>
}