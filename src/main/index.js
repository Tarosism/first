import React, { useEffect } from 'react';
import './index.css';
import axios from "axios";
import {Link} from 'react-router-dom'

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
          <div id="banner">
            <img src="images/banner1.png" />
          </div>
          <h1>판매되는 상품</h1>
          <div id="product-list">
            { 
            products.map((product, index)=>{
              return (
                (
                <div className="product-card">
                  <Link className="ProductLink" to={`/product/${product.id}`}>
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
              </Link>
            </div>
            ) 
            )
            })
            }
          </div>
      </div>
    );
  }

  export default MainPage;

