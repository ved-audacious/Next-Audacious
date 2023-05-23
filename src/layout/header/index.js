import Link from "next/link";
import Image from "next/image"
import logo from "../../assets/images/logoAud.webp"
import header from "./header.module.css"
import React, { useState } from 'react';

import {
  
  Navbar,
  Nav,
  Container
  
} from 'reactstrap';

function Header(args) {


  return (
    <Navbar  className={header.navbar} fixed="top">
             <Container   className={header.mainCon}>
            
                          <Image 
                             className={header.logo} 
                             src={logo}
                             alt="Audacious"
                          /> 
       
        
                       <Nav>
                             <Nav><Link className={header.linkTag} href='/'>Home</Link></Nav>
                             <Nav><Link className={header.linkTag} href='/aboutus'>About us</Link></Nav>
                             <Nav><Link className={header.linkTag} href="/blogs">Blogs</Link></Nav>
                             <Nav><Link className={header.linkTag} href="/careers"> Careers</Link> </Nav>
                             <Nav><Link className={header.linkBtn} href='/talktous'>Talk To Us</Link></Nav>
                        </Nav>
       
  
                        </Container>
      </Navbar>
  );
}

export default Header;