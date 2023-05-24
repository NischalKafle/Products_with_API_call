import React from 'react'

function Carousel() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',position:'relative'}}>
    <div class="card" style={{width: '18rem',border:'none',marginTop:'5px'}}>
    <img src="../img/loc.jpg" class="card-img-top" alt="..." style={{borderRadius:'50%',height:'300px',width:'300px',objectFit:'cover'}}/>
    <div class="card-body">
    <h1>Our Location</h1>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card" style={{width: '18rem',border:'none',marginTop:'5px'}}>
  <img src="../img/Driver.jpg" class="card-img-top" alt="..." style={{borderRadius:'50%',height:'300px',width:'300px',objectFit:'cover'}}/>
  <div class="card-body">
  <h1>Our Owner</h1>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>
  )
}

export default Carousel