import React from 'react'
import styles from "./styles.module.css"
import { Card, Row, Col, Container } from 'reactstrap'
import Image from 'next/image'
import Cli1 from "../../../assets/images/img11.png"
import Cli2 from "../../../assets/images/img22.png"
import Cli3 from "../../../assets/images/img33.png"



const Partner = () => {

    return (
        <>  
       
        <div className={styles.parentDiv}>
        <div className={styles.childDiv}> </div>
        </div>
        <Container fluid="md" >
            <div className={styles.mainBox}>
                <p className={styles.paratext}>Why Partner With Us?</p>
                <h3>What Our Clients Said</h3>
            <div >
            <div >
                <Row xs="1" sm="2" md="3">
                    <Col>
                    
                        <div className={styles.cards}>
                            <Card body>
                                <Image className={styles.cliImages}
                                    src={Cli1}
                                    alt='clientImage' />

                                <p className={styles.cardText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </p>
                                <div className={styles.names}>
                                <hr className={styles.hrtag}></hr>
                                <h6>Bernard Castro</h6>
                                <p>Quality Manager</p>
                            </div>

                            </Card>

                        </div>
                    </Col>

                    <Col>
                        <div className={styles.cards}>
                            <Card body>
                                <Image className={styles.cliImages}
                                    src={Cli2}
                                    alt='clientImage'
                                />

                                <p className={styles.cardText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </p>
                                <div className={styles.names}>
                                <hr className={styles.hrtag}></hr>
                                <h6>Bernard Castro</h6>
                                <p>Quality Manager</p>
                            </div>


                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div className={styles.cards}>

                            <Card body>
                                <Image className={styles.cliImages}
                                    src={Cli3}
                                    alt='clientImage' />

                                <p className={styles.cardText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </p>
                                <div className={styles.names}>
                                    <hr className={styles.hrtag}></hr>
                                    <h6>Bernard Castro</h6>
                                    <p>Quality Manager</p>
                                </div>

                            </Card>
                        </div>
                        
                    </Col>
                    </Row>
                    </div>
            </div>
            </div>

        </Container>
        </>

    )
}

export default Partner
