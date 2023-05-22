
import Image from 'next/image'
import { Col, Row } from 'reactstrap'
import servicepic from "../../../assets/images/02.jpg"
import styles from "./styles.module.css"
import { Lsgt, Svgicon } from '@/src/assets/images'
import { Container } from 'reactstrap'
const Services = () => {
  return (
    <Container fluid="lg">
    <div className={styles.mainBox}>
      <Row>
      <Col>
      <p className={styles.textcolor}>services</p>
      <h3 >We're an Independent </h3>
      <h3>Design & Development Agency.</h3>
      <div className={styles.iconHead} > <span  className={styles.icon}> <Lsgt/> </span><h5 className={styles.heading}> Software Development</h5></div>
      <p className={styles.headingDescription}>Morbi interlus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar facilisis.</p>
      <div className={styles.iconHead}><span  className={styles.icon}> <Svgicon/> </span><h5 className={styles.heading}> Web App Development</h5></div>
       <p className={styles.headingDescription}>cto impedit at dolores inventore laboriosam nulla hic quis quasi expedita ea natus, quae illo dolorem  perspic.</p>
       <button className={styles.buttonMore}>More Services</button>
      </Col>
      <Col>
      <Image className={styles.image1}
      src={servicepic}
      alt='serviceImage'
      />
      
      </Col>
      </Row>
    </div>
    </Container>
  )
}

export default Services
