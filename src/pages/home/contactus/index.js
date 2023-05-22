import React from 'react'
import { Container } from 'reactstrap'
import styles from "./styles.module.css"
import contactImage from "../../../assets/images/contactusImage6.jpg"
import Image from 'next/image'


const Contactus= () => {
  return (
    <div className={styles.mainBox} >
    
    <div className={styles.bgColor}></div>
    <Container >
    <p className={styles.paraText}>Contact us</p>
    <h3>Let’s Start On Your Work Togather</h3>
    <div className={styles.imageContainer}>
    <Image className={styles.imageMain}
    src={contactImage}
    alt='contactus'
    />
    </div>
    
    </Container>
    </div>
  )
}

export default Contactus
