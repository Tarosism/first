import {useParams} from 'react-router-dom'
import axios from "axios"
import React, {useEffect, useState} from "react"
import "./index.css"


function ProductPage(){
    const {id} = useParams();
    const [product, setProducts] = useState(null);
    useEffect(()=>{
        axios.get(`/products${id}.json`)
    .then((result)=>{
        setProducts(result.data);
    })
    .catch((error)=>{
        console.error(error+'에러발생!')
    })
    },[])

    if(product === null){
        return <h1>불러오는즁이야</h1>
    };

    return (
        <div>
            <div id="imgBox">
                <img src={"/"+product.imageUrl} />
            </div>
        <div id="profiBox">
            <img src="/images/avatar.png" />
            <span>{product.seller}</span>
        </div>
        <div id="contentsBox">
            <div id="contentsName">{product.name}</div>
            <div id="contentsPrice">{product.price}</div>
            <div id="createAt">2021.12.07</div>
            <div id="contentsDescription">{product.description}</div>
        </div>
        </div>
    )
}


export default ProductPage;