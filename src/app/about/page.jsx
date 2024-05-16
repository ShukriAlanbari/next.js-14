import Image from "next/image";
import styles from "./about.module.css"



const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, bolder, braver nad better. We
                    believe in good ideas flexibility and precision ,Our
                    special Team offers best consulting & finance solution provider. Wilde range of web and software
                    development services. 
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>28 +</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>230 K+</h1>
                        <p>World Wide customers</p>
                    </div>
                    <div className={styles.box}>
                        <h1>1 M+</h1>
                        <p>Projects</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="About image"
                    fill
                    className={styles.img}
                />
            </div>
            
        </div>
    );
};


export default AboutPage;