import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './food.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Indian = () => {
  return (
    <div>
      {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="demo-app\src\slide1.jpg" className="d-block w-100" alt="Slide 1" id="cross2" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Channa Curry</h5>
              <p>Flavorful and hearty Indian dish made with chickpeas cooked in a spiced tomato gravy. It's often served with rice and roti, making for a satisfying and well-balanced meal.</p> 
            </div> 
          </div>
          <div className="carousel-item">
            <img src="Laccha-Paratha-Easy.3 (1).jpg" className="d-block w-100" id="cross1" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Parotta</h5>
              <p>Flaky, layered Indian flatbread often enjoyed with curries and gravies, known for its crispy texture and rich, buttery flavor.</p> */}
            {/* </div>
          </div>
          <div className="carousel-item">
            <img src="demo-app\src\ommm.jpg" className="d-block w-100" id="cross3" />
            <div className="carousel-caption d-none d-md-block"> */}
              {/* <h5>Butter chicken</h5>
              <p>Creamy, rich dish featuring tender chicken pieces in a luscious, spiced tomato and butter sauce. When paired with herbal ghee rice, which is aromatic rice cooked with ghee and infused with herbs and spices, it creates a delightful and aromatic meal.</p> */}
            {/* </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="text-center">
        <h1 className="topic">Welcome to Indian Cuisine!</h1>
        <p style={{ fontSize: '30px', fontWeight: '400' }}>Order now to Savor the Spice of India, Anytime, Anywhere......</p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2015/04/5677346e6e510a6f3a75b477_l3.jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Kozhi Curry" id="id-img1" />
                <h3 className="h">Kozhi Curry</h3>
                <p className="price">$969</p>
                <button className="btn btn-danger" id="btn1">
                  <a href="indian.html" style={{ textDecoration: 'none', color: 'white' }}>Add to cart</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2015/04/5677346e6e510a6f3a75b477_5.jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Chicken 65" id="id-img2" />
                <h3 className="h">Chicken 65</h3>
                <p className="price">$799</p>
                <button className="btn btn-danger" id="btn2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2015/04/5677346e6e510a6f3a75b477_15.jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Saoji Chicken Curry" id="id-img3" />
                <h3 className="h">Saoji Chicken Curry</h3>
                <p className="price">$889</p>
                <button className="btn btn-danger" id="btn3">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Butter Chicken" id="id-img1" />
                <h3 className="h">Butter Chicken</h3>
                <p className="price">$489</p>
                <button className="btn btn-danger" id="btn1">
                  <a href="indian.html" style={{ textDecoration: 'none', color: 'white' }}>Add to cart</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="https://wallpapercave.com/wp/wp7845906.jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Breakfast set" id="id-img2" />
                <h3 className="h">Breakfast set</h3>
                <p className="price">$639</p>
                <button className="btn btn-danger" id="btn2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 mb-4 mt-4">
            <div className="card">
              <div className="card-body">
                <img src="http://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" className="img-fluid mb-3" style={{ width: '500px', height: '300px' }} alt="Samosa" id="id-img3" />
                <h3 className="h">Samosa</h3>
                <p className="price">$149</p>
                <button className="btn btn-danger" id="btn3">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-secondary" style={{ margin: '20px' }} id="btn">
          <i className="fa-solid fa-spinner"></i> Load more
        </button>
      </div>

      <div className="container1 text-center">
        <button className="btn btn-primary" id="bt">
          <a href="food.html" className="back" style={{ textDecoration: 'none', color: 'white' }}>Back</a>
        </button>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
};

export default Indian;