import React from 'react';
import page1 from './page1111.jpg';
import page2 from './page22.jpg';
import page3 from './page33.jpg';
import './carousel.css';
function Carousel() {
  return (
    <div classname="  container">
      <div id="carouselExampleCaptions" class=" c carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={page1} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Dados Precisos</h5>
                
              </div>
      </div>
            <div class="carousel-item">
              <img src={page2 } class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Práticos</h5>
                  
                </div>
      </div>
              <div class="carousel-item">
                <img src={page3} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Fáceis de Acessar</h5>
                    
                  </div>
      </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
       
  )
}

export default Carousel;