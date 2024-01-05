import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function MyCounter({ counter }) {
  return <span style={{ margin: 30 }}>{counter}</span>;
}

function Header_menu({ name }) {
  return (
    <>
      <div className="heading">
        <h1 className="container">
          Product by {name ? name : 'Other'}{' '}
        </h1>
      </div>
    </>
  );
}

function Homepage() {
  const imagePath = "/produk1.jpg";
  const tags = ['Product', 'Electronics', 'Laptop'];
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter <= 0) {
      setCounter(0)
    } else {
      setCounter(counter - 1);  
    }
  }
  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <Header_menu name="Fahmi Hidayat" />
      
      <div className="container">
        <div className="produk-card row shadow-sm">
          <div className="col-md-4 p-4">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./produk-1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./produk-2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./produk-3.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          {/* Deskripsi Produk */}
          <div className="desc col-md-8 p-4">
            <h3><span className="badge bg-danger me-2">Mall</span>Laptop Lenovo Gaming</h3>

              <p>Siapa yang tidak kenal dengan brand Laptop yang satu ini ? Lenovo adalah salah satu perusahaan teknologi terkemuka di dunia, yang memproduksi PC dan perangkat internet seluler yang inovatif. Lenovo merupakan merk laptop yang cukup populer di Indonesia karena dikenal menawarkan laptop dengan rasio kualitas berbanding harga yang bagus</p>
              <br/>
              {/* Tag Produk */}
                {tags.map((tag_product) => (
                  <span className="badge bg-secondary me-2" key={tag_product}>#{tag_product}</span>
                ))}
              <br/> 
              
              <br/>
              <label htmlFor="input-jumlah" className="form-label">Kuantitas</label>
                <div className="input-group mb-3">
                  <button className="btn btn-danger" type="button" id="button-addon1" onClick={decrement} counter={counter}>-</button>
                  <input type="text" id='input-jumlah' className="form-control" value={counter} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <button className="btn btn-success" type="button" id="button-addon2" onClick={increment} counter={counter}>+</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

function Home() {
  return <Homepage />;
}

export default Home;
