import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { blueGrey } from '@material-ui/core/colors';
import logo3 from './logooficial.png';
import './color.css';
import './footer.css';

function Footer2(){
    return(
        <div>
  
        <footer  className=" footer color text-right bg-primary py-2 mt-4">  
        <div className=" text-secondary  mt-1 mb-1 py-2">
                    <div className="text-secundary">
                    Desenvolvido por
                    
                    <img  className="mx-2"src={logo3}width="50" height="50"/>
                    </div>
                </div>
                </footer>
           
                
                
                    
        </div>
    )
}

export default Footer2;