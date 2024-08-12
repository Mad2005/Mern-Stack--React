import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './food.css';
import { useNavigate } from "react-router-dom";

const FoodApp = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/indian'); // Update with the correct route if different
  };

  return (
    <div>
      <div className="navi">
        <div className="new">
          <h1 style={{ fontSize: '80px' }}>Foodicious</h1>
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/70/51/28/1000_F_370512888_T4a2z4Dvy63IFkyiRi1mB6THwFCmUAEn.jpg"
            className="img"
            alt="Foodicious"
          />
        </div>

        <nav className="navbar navbar-expand-lg custom-navbar" style={{ position: 'sticky', top: '0%', zIndex: 1 }} id="nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Delicious</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" id="tog"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Offers</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cuisines
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Indian</a></li>
                    <li><a className="dropdown-item" href="#">Chinese</a></li>
                    <li><a className="dropdown-item" href="#">Italian</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="false">Help</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="container" id="id">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mt-4">
              <div className="card">
                <div className="card-body text-center">
                  <h1>Indian</h1>
                  <img
                    src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg"
                    className="img-fluid mb-3"
                    alt="Indian Food"
                    id="id-img1"
                  />
                  <button className="btn btn-danger" onClick={handleOrderNowClick}>Order now</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-4 mt-4">
              <div className="card">
                <div className="card-body text-center">
                  <h1>Chinese</h1>
                  <img
                    src="https://i.insider.com/5c0192d1de34c43da26049d4?width=700"
                    className="img-fluid mb-3"
                    alt="Chinese Food"
                    id="id-img2"
                  />
                  <button className="btn btn-danger">
            Order now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-4 mt-4">
              <div className="card">
                <div className="card-body text-center">
                  <h1>Italian</h1>
                  <img
                    src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/1280px-Lasagna_with_salad_May_2011.jpg"
                    className="img-fluid mb-3"
                    alt="Italian Food"
                    id="id-img3"
                  />
                  <button className="btn btn-danger">Order now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.siasat.com/wp-content/uploads/2020/02/Biryani-1.jpg" className="d-block w-100" alt="Biryani" id="cross2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Biryani</h5>
                <p>A symphony of aromatic spices and tender meat, a feast for the senses!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://1.bp.blogspot.com/-iLcRjzlsbbM/X2jkz8vwBFI/AAAAAAAAYyk/PXixYAMLH0AKoo7sRdPpInU4hJXGIEeBQCLcBGAsYHQ/s2048/butter%2Bchicken.JPG" className="d-block w-100" alt="Butter Chicken" id="cross1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Butter Chicken</h5>
                <p>A creamy, flavorful indulgence where tender chicken is bathed in a rich, buttery tomato sauce!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://flawlessfood.co.uk/wp-content/uploads/2021/03/Tandoori-Chicken-Tikka-Kebab-519.jpg" className="d-block w-100" alt="Chicken Tikka" id="cross3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Chicken Tikka</h5>
                <p>Succulent chunks of marinated chicken, grilled to perfection, bursting with smoky, spiced goodness!</p>
              </div>
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
        </div>

        <div className="container" id="id3" style={{ borderStyle: 'double', borderWidth: '4px', padding: '0px' }}>
          <form>
            <h1 className="d-flex justify-content-center" id="contact" style={{ backgroundColor: 'black', color: 'white', maxWidth: "100%" }}>Contact us</h1>
            <div className="t p-3">
              <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="m p-3">
              <label htmlFor="mail" className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
              <input type="email" className="form-control" placeholder="email" />
            </div>
            <div className="p p-3">
              <label htmlFor="pass" className="form-label" style={{ fontWeight: 'bold' }}>Message</label>
              <input type="text" className="form-control" placeholder="message" />
            </div>
            <br />
            <center>
              <button className="btn btn-success m-3" style={{ fontWeight: 'bold' }}>Submit</button>
            </center>
          </form> 
        </div>

        <footer>
          <p style={{ backgroundColor: 'black', color: 'white', fontSize: '20px', marginBottom: '0', padding: '10px' }}>
            &copy; 2024 Food App. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FoodApp;
