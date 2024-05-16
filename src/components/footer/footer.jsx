import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className= {styles.container}>
            <div className={styles.logo}>Sunrise dev</div>
            <div className={styles.text}>
                Sunrise Development agency © all rights reserved
            </div>
        </div>
    );
};


export default Footer;