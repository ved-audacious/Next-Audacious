import Image from 'next/image'
import React from 'react'
import Background from "../../../assets/images/banner.png"
import styles from "./styles.module.css"
import { Container, Button } from 'reactstrap'
const Banner = () => {
    return (
        <Container fluid  className={styles.fluidContainer}>
            <div className={styles.backgroundImage}>
                <Container className={styles.mainContainer}>
                    <div className={styles.mainText}><h1 className={styles.h1tag}>Digital Solution For <p className={styles.ptag}> Your Business</p></h1>
                        <div className={styles.bannerContent}>
                            <p className={styles.paragraph}>We carefully consider our solutions to support </p>
                            <p className={styles.paragraph} >each and every stage of your growth.</p>
                        </div>
                        <div>
                            <Button className={styles.button}>Talk to our Expert</Button>
                        </div>
                    </div>

                    <div className={styles.imageCo} >
                        <Image className={styles.imageComp} src={Background} alt='bg' />
                    </div>
                </Container>
            </div>
        </Container>

    )
}

export default Banner
