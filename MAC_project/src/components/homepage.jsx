import React from 'react'

const Homepage = () => {
  return (
    <>
  
    <div className="carousal">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img   src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="d-block w-100" alt="iphone" height="560px"/>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="iphone" height="560px" width="100%"/>
          </div>
          <div class="carousel-item">
            <img  src="https://wallpaperaccess.com/full/829218.jpg" class="d-block w-100" alt="iphone" height="560px" width="100%" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="center">Products</h1>
      <div className="cont2" style={{width:"90%",height:"500px",margin:"auto"}}>
        
           <div className="cont2in" >
             <img  height="90%" width="100%" src="https://www.gizbot.com/images/2019-02/vivo-u1_155107538060.jpg" alt="images" />
             <h3>Mobile</h3>
           </div>
           <div className="cont2in">
            <img  height="90%" width="100%" src="https://laptoping.com/specs/wp-content/uploads/2015/04/Dell-Inspiron-I7548-4271SLV.jpg" alt="images" />
            <h3>Laptop</h3>
           </div>
           <div className="cont2in">
            <img  height="90%" width="100%" src="https://www.gizbot.com/images/2020-05/realme-android-smart-tv-tv-43_159047803000.jpg" alt="images" />
            <h3>Tv</h3>
           </div>
           
      </div>
      
      
      
    </div>
   
    
    </>
    
  )
}

export default Homepage