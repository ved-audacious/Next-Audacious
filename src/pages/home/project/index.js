import { Container } from "reactstrap"
import styles from "./styles.module.css"
import Carouselproject from "@/src/component/carousel/Caraousel"


const Project = () => {
  return (
    <Container  className={styles.mainBox}   >
    <div>
    <p className={styles.paratag}>Our Projects</p>
    <h3>Recently</h3>
    <h3>Completed Projects</h3>
    </div>
    <div className={styles.usecorousel}>
    <Carouselproject />
    </div>
    <utton className={styles.moreWorkBtn}>View More Works</utton>
    </Container>
  )
}

export default Project
