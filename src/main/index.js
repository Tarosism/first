import React, { useEffect } from 'react';
import './index.css';
import axios from "axios";
function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(()=>{
      axios.get("products.json")
        .then((result)=>{
				const product = result.data.products;
        setProducts(product);
    })
    .catch((error)=>{
        console.error("에러발생"+ error);
    })
    },[]
    )
    return (
      <div>
        <div id="header">
          <div id="header-area">
            <img src="images/logo.png" />
          </div>
        </div>
        <div id="body">
          <div id="banner">
            <img src="images/banner1.png" />
          </div>
          <h1>판매되는 상품들</h1>
          <div id="product-list">
            { 
            products.map((product, index)=>{
              return (
                (<div className="product-card">
              <div>
                <img className="product-img" src={product.imageUrl} />
              </div>
              <div className="product-contents">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
                <div className="product-seller">
                  <img className="product-avatar" src="images/avatar.png" />
                  <span>{product.seller}</span>
                </div>
              </div>
            </div>)
            )
            })
            }
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }

  export default MainPage;

/*   import React, { useEffect } from 'react';
import './index.css';
import axios from "axios";
function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
      function(){
        axios.get("products.json")
            .then(function(result){
                const products = result.data.products;
                setProducts(products);
            }).catch(function(error){
                console.error('에러발생 : ', error);
            })
      },[]
    );   
    return (
      <div>
        <div id="header">
          <div id="header-area">
            <img src="images/logo.png" />
          </div>
        </div>
        <div id="body">
          <div id="banner">
            <img src="images/banner1.png" />
          </div>
          <h1>판매되는 상품들</h1>
          <div id="product-list">
            {
              products.map(function (product, index){
               return (
                 <div className="product-card">
              <div>
                <img className="product-img" src={product.imageUrl} />
              </div>
              <div className="product-contents">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
                <div className="product-seller">
                  <img className="product-avatar" src="images/avatar.png" />
                  <span>{product.seller}</span>
                </div>
              </div>
            </div>
            )
              })
              }     
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }

  export default MainPage; */