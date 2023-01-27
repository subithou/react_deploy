import React from 'react';
import '../App.css';
import { useNavigate, link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div>

  <section id="hero">
    <div className="hero-container">
      
      <h2>Explore the world of a photographer </h2>
     
      
      <a href="#portfolio" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
    </div>
    
  </section>

<main id="main">

    



    <section style={{backgroundColor: "rgb(255, 255, 255)"}}  id="portfolio" className="portfolio">
      <div className="container">

        

         <ul id="portfolio-flters" className="d-flex justify-content-center">
          <li style={{borderRadius: 25}} data-filter="*" className="filter-active">All</li>
          <li style={{borderRadius: 25}} data-filter=".filter-app">Nature</li>
          <li style={{borderRadius: 25}} data-filter=".filter-card">Culture</li>
          <li style={{borderRadius: 25}} data-filter=".filter-web">Others</li>
        </ul> 

        
        

        <div className="row portfolio-container">




          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/84.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/84.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/83.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/83.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
            <div className="portfolio-img">             
                <a href="portfolio/82.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/82.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/85.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/85.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/86.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/86.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>



          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/76.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/76.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/87.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/87.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>
            
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">             
                <a href="portfolio/88.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                <img src="thumbnail/88.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                </a>
            </div>
          </div>

            

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <a href="portfolio/74.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link">
                <img src="thumbnail/74.jpg" className="img-fluid" alt=""/>
                </a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img">             
                  <a href="portfolio/78.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" >
                  <img src="thumbnail/78.jpg" style={{borderRadius: 25}} className="img-fluid" alt=""/>
                  </a>
              </div>
            </div>
            
           

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
                  <img src="thumbnail/1.jpg" className="img-fluid" alt=""/>
                </a>
              </div>
            </div>

           
            
            

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/71.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link">
                <img src="thumbnail/71.jpg" className="img-fluid" alt=""/>
                </a>
                </div>
            </div>
           
           

            

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-img">
                <a href="portfolio/72.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
                <img src="thumbnail/72.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            
           
            
           

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-img">
                <a href="portfolio/73.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link">
                <img src="thumbnail/73.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link">
                  <img src="thumbnail/3.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/15.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
                  <img src="thumbnail/15.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/48.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
                  <img src="thumbnail/48.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-img">
                <a href="portfolio/2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="">
                  <img src="thumbnail/2.jpg" className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            

        </div>
      </div>
      

      <div className="scroll-down">
        <a href="portfolio.html">
          <button type="button" className="btn btn-dark " >Show More</button>
        </a>
      </div>


    
    </section>
  </main>



  


</div>
        )
    }
}


export default Home;

