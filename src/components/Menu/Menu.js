import React, {useState} from 'react';
import './Menu.scss';
const Menu = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);
  const [click7, setClick7] = useState(false);
  
  const [click8, setClick8] = useState(false);
  const [click9, setClick9] = useState(false);
  const [click10, setClick10] = useState(false);
  const [click11, setClick11] = useState(false);
  const [click12, setClick12] = useState(false);
  
  const [click13, setClick13] = useState(false);
  const [click14, setClick14] = useState(false);
  const [click15, setClick15] = useState(false);
  const [click16, setClick16] = useState(false);
  const [click17, setClick17] = useState(false);
  
  
  const [click18, setClick18] = useState(false);
  const [click19, setClick19] = useState(false);
  
  const [click20, setClick20] = useState(false);
  const [click21, setClick21] = useState(false);
  const [click22, setClick22] = useState(false);
  const [click23, setClick23] = useState(false);
  const [click24, setClick24] = useState(false);
  
  const [click25, setClick25] = useState(false);
  const [click26, setClick26] = useState(false);
  const [click27, setClick27] = useState(false);
  const [click28, setClick28] = useState(false);
  const [click29, setClick29] = useState(false);
  
  const [click30, setClick30] = useState(false);
  const [click31, setClick31] = useState(false);
  const [click32, setClick32] = useState(false);
  const [click33, setClick33] = useState(false);
  const [click34, setClick34] = useState(false);
  
  const [click35, setClick35] = useState(false);
  const [click36, setClick36] = useState(false);
  const [click37, setClick37] = useState(false);
  
  const handleClick = () =>{
    setClick(!click);
  }
  const handleClick2 = () =>{
    setClick2(!click2);
  }
  const handleClick3 = () =>{
    setClick3(!click3);
  }
  const handleClick4 = () =>{
    setClick4(!click4);
  }
  const handleClick5 = () =>{
    setClick5(!click5);
  }
  const handleClick6 = () =>{
    setClick6(!click6);
  }
  const handleClick7 = () =>{
    setClick7(!click7);
  }
  
  
  const handleClick8 = () =>{
    setClick8(!click8);
  }
  const handleClick9 = () =>{
    setClick9(!click9);
  }
  const handleClick10 = () =>{
    setClick10(!click10);
  }
  const handleClick11 = () =>{
    setClick11(!click11);
  }
  const handleClick12 = () =>{
    setClick12(!click12);
  }
  
  
  const handleClick13 = () =>{
    setClick13(!click13);
  }
  const handleClick14 = () =>{
    setClick14(!click14);
  }
  const handleClick15 = () =>{
    setClick15(!click15);
  }
  const handleClick16 = () =>{
    setClick16(!click16);
  }
  const handleClick17 = () =>{
    setClick17(!click17);
  }
  const handleClick18 = () =>{
    setClick18(!click18);
  }
  const handleClick19 = () =>{
    setClick19(!click19);
  }
  
  
  const handleClick20 = () =>{
    setClick20(!click20);
  }
  const handleClick21 = () =>{
    setClick21(!click21);
  }
  const handleClick22 = () =>{
    setClick22(!click22);
  }
  const handleClick23 = () =>{
    setClick23(!click23);
  }
  const handleClick24 = () =>{
    setClick24(!click24);
  }
  
  
  const handleClick25 = () =>{
    setClick25(!click25);
  }
  const handleClick26 = () =>{
    setClick26(!click26);
  }
  const handleClick27 = () =>{
    setClick27(!click27);
  }
  const handleClick28 = () =>{
    setClick28(!click28);
  }
  const handleClick29 = () =>{
    setClick29(!click29);
  }
  
  
  const handleClick30 = () =>{
    setClick30(!click30);
  }
  const handleClick31 = () =>{
    setClick31(!click31);
  }
    const handleClick32= () =>{
    setClick32(!click32);
  }
    const handleClick33 = () =>{
    setClick33(!click33);
  }
    const handleClick34 = () =>{
    setClick34(!click34);
  }
  
  const handleClick35 = () =>{
    setClick35(!click35);
  }
  const handleClick36 = () =>{
    setClick36(!click36);
  }
  const handleClick37 = () =>{
    setClick37(!click37);
  }
  
  return (
    <section>
      <div className="menu">
        <div className="menu-content">
          <h5>Menu</h5>
          <h4>Food Full of treaty Love</h4>
          <p className="title-text">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, 
          </p>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                  <div className="card-photo">
                    <img src="./images/vegie.png" alt="Eror" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>Vegie Muffen</h3>
                      <h3>16$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick6} type="button">{click6 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick2}>{click2 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick3}>{click3 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick4}>{click4 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick5}>{click5 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick}>{click ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                  <div className="card-photo">
                    <img src="./images/salads.png" alt="Eror" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>Salads</h3>
                      <h3>12$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick18} type="button">{click18 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick13}>{click13 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick14}>{click14 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick15}>{click15 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick16}>{click16 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick17}>{click17 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                  <div className="card-photo">
                    <img src="./images/mini-burger.png" alt="Eror" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>burger</h3>
                      <h3>10$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick19} type="button">{click19 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick8}>{click8 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick9}>{click9 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick10}>{click10 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick11}>{click11 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick12}>{click12 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-xl-12">
                <button type="button" className="btn learnMore" onClick={handleClick7}>Learn More</button>
              </div>
              {click7 ? (
                <div className="container-fluid card-bootom">
                  <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-photo">
                    <img src="./images/steak.png" alt="Eror" />
                  </div>
                        <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>Delmonico dish</h3>
                      <h3>14$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick35} type="button">{click35 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick20}>{click20 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick21}>{click21 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick22}>{click22 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick23}>{click23 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick24}>{click24 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-photo">
                    <img src="./images/egg-masala.png" alt="Eror" />
                  </div>
                        <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>Egg Masala</h3>
                      <h3>9$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick36} type="button">{click36 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick25}>{click25 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick26}>{click26 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick27}>{click27 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick28}>{click28 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick29}>{click29 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-photo">
                    <img src="./images/peach.png" alt="Eror" />
                  </div>
                        <div className="card-body">
                    <div className="d-flex justify-content-between product-name">
                      <h3>Peach Melba dish</h3>
                      <h3>15$</h3>
                    </div>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <div className="buy d-flex justify-content-between">
                      <button className="btn plus-btn" onClick={handleClick37} type="button">{click37 ? ("Buy Now") : (<img className="plus" src="./images/plus-icon.svg" alt="Eror" />) }</button>
                      <div>
                      <button type="button" className="btn star" onClick={handleClick30}>{click30 ? (<img src="./images/no-bg-star.svg" className="w-100 " />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick31}>{click31 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick32}>{click32 ? (<img src="./images/no-bg-star.svg" className="w-100 h-100" />):  (<img src="./images/bg-star.svg" className="w-100 h-100" />)}</button>
                      <button type="button" className="btn star" onClick={handleClick33}>{click33 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                        <button type="button" className="btn star" onClick={handleClick34}>{click34 ? (<img src="./images/bg-star.svg" className="w-100 h-100" />) : (<img src="./images/no-bg-star.svg" className="w-100 h-100" />)}</button>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                  </div>
                </div>
              
              ) : ("")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;