import React from 'react'
import styles from "./styles.module.css"
import { Col, Container, Row } from 'reactstrap'
const HowitWorks = () => {
  return (
    <Container>
    
      <div >
        <p className={styles.paraText}>How it Works?</p>
        <h3 className={styles.headingLine}>We Are Strategic- Creative </h3>
        <h3 className={styles.headingLine}>Digital Agency.</h3>
      </div>
      <Row xs="1" md="3" >
        <Col>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O1/</h1>
            </div>
            <h5 className={styles.uperText} >Submit Your Design Request</h5>
            <p className={styles.contentText}>Lorem ipsum pariatur facilis obcaecati iusto alias accusantium odio molestiae voluptatibus perferendis. Molestias libero esse consectetur ex distinctio rem dolorum beatae porro voluptate! Hic distinctio ex officia esse, quae provident facere </p>
          </div>
        </Col>
        <Col>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O2/</h1>
            </div>
            <h5 className={styles.uperText}>We Start Workin</h5>
            <p className={styles.contentText}>Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
          </div>
        </Col>
        <Row>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O3/</h1>
            </div>
            <h5 className={styles.uperText}>Get Your Projects Done!</h5>
            <p className={styles.contentText}>Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
          </div>
        </Row>
      </Row>
    
    </Container>
  )
}

export default HowitWorks
