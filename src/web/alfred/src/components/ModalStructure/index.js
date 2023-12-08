import styles from 'styles.modules.css'

const ModalStrucutre = (props) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>            
    )

}

export default ModalStrucutre;