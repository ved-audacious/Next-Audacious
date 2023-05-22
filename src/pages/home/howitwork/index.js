import React from 'react'
import styles from "./styles.module.css"
import { Col, Container, Row } from 'reactstrap'
const HowitWorks = () => {
  return (
    <Container fluid="md">
    <div className={styles.mainbox}>
      <div className={styles.titleContainer}>
        <p className={styles.paraText}>How it Works?</p>
        <h3>We Are Strategic- Creative </h3>
        <h3>Digital Agency.</h3>
      </div>
      <Row xs="1" md="3" >
        <Col>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O1/</h1>
            </div>
            <h5 className={styles.uperText} >Submit Your Design Request</h5>
            <p>Lorem ipsum pariatur facilis obcaecati iusto alias accusantium odio molestiae voluptatibus perferendis. Molestias libero esse consectetur ex distinctio rem dolorum beatae porro voluptate! Hic distinctio ex officia esse, quae provident facere </p>
          </div>
        </Col>
        <Col>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O2/</h1>
            </div>
            <h5>We Start Workin</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
          </div>
        </Col>
        <Row>
          <div className={styles.container}>
            <div className={styles.bgContainer}>
              <h1 className={styles.bgtext}>O3/</h1>
            </div>
            <h5>Get Your Projects Done!</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
          </div>
        </Row>
      </Row>
    </div>
    </Container>
  )
}

export default HowitWorks
