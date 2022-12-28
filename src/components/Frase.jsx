import styles from "./Frase.module.css"

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContainer}>Este componente é apenas uma Frase!</p>
        </div>
    )
}

export default Frase