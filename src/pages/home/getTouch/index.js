import React from 'react'
import { Button, Col, Container ,Input,Row,Form} from 'reactstrap'
import styles from "./styles.module.css"


const GetinTouch = () => {


 const handleSubmit=()=>{
    
 }



  return (
  <div className={styles.mainBox}>
     <Container>
       <Row>
         <Col>
         <p className={styles.paratag}>Get In Touch</p>
         <h3>Kick Start Your Awesome Project Now!</h3>
         <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>


         </Col>
         <Col>
         <div className={styles.formDiv} >
         <Form  onSubmit={handleSubmit}>
         <Input placeholder='Your Name' className={styles.formInput} type="text"/>
         <Input placeholder='Email Address' className={styles.formInput} type="text"/>
         <Input placeholder='Phone Number' className={styles.formInput}type="number"/>
         <Button type='submit' block className={styles.submitButton}>Send Message  </Button>
         </Form>
         </div>
         </Col>
       
       </Row>


     </Container>
  </div>
  )
}

export default GetinTouch
