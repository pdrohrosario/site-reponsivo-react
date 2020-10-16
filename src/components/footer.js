import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { blueGrey } from '@material-ui/core/colors';
import logo3 from './logooficial.png';

import './color.css';

function Footer(){
    return(
        <div>
  
    <footer  className="color bg-primary py-2 mt-4">  
            <div className=" text-center">
            
                <p className="white">Acompanhe nosso Trabalho</p>
                <p className="">
                <a href="https://www.facebook.com/"className="white-text mx-2">
                    <FacebookIcon style={{ color:  blueGrey[50] }} fontSize="large"/>
                </a>
                
                <a href="https://www.youtube.com"className="white-text mx-3">
                    <YouTubeIcon style={{ color:  blueGrey[50] }} fontSize="large"/>
                </a>
                
                <a href="https://www.instagram.com/?hl=pt-br"className="white-text mx-3">
                    <InstagramIcon style={{ color:  blueGrey[50] }} fontSize="large"/>
                </a>
                <a href="https://twitter.com/login?lang=pt"className="white-text mx-2">
                    <TwitterIcon style={{ color:  blueGrey[50] }} fontSize="large"/>
                </a>
                </p>
            
            </div>
            </footer>
       
            
            <div className=" text-primary text-center mt-1 mb-1 py-2">
                <div className="text-secundary">
                Desenvolvido por
                
                <img  className="mx-2"src={logo3}width="50" height="50"/>
                </div>
            </div>
                
    </div>
    )
}

export default Footer;