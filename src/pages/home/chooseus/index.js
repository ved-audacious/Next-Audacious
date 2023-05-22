import Image from "next/image"
import { Row, Col,Container} from "reactstrap"
import chooseus from "../../../assets/images/chooseus.jpg"
import styles from "./styles.module.css"
const ChooseUs = () => {
    return (
        <Container
        fluid="md">
        <div className={styles.mainbox} >
            <Row xs="1" sm="1" md="2">
                <Col>
                    <Image className={styles.image1}
                        src={chooseus}
                        alt="chooseus"
                    />
                </Col>
                <Col>
                    <p className={styles.paratag}>WHY CHOOSE US?</p>
                    <h3 className={styles.heading}>A few reasons why our valued </h3>
                    <h3 className={styles.heading}>customers choose us.</h3>
                    <h5><span className={styles.numbericon}>1</span>Collect Ideas</h5>
                        <p className={styles.titleContent}>Noluat exercitationem temporibus impedit in quo ratione. Tenetur, consequatur architecto! pharegue dapibus. Praesent commodo cursus.</p>
                    
                    <h5><span className={styles.numbericon}>2</span>Data Analysis</h5>
                        <p className={styles.titleContent}>Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.</p>
                    
                    <h5><span className={styles.numbericon}>3</span>Finalize Product</h5>
                    <p className={styles.titleContent}>Cras mattiscorporis non unde, delectus veniam ipsa exercitationem possimus reiciendis consequatur! Aenean lacinia bibendum nulla sed.</p>
                </Col>
            </Row>
        </div>
        </Container>
    )
}

export default ChooseUs
