import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div style={{height: "460px", paddingTop: "20px", paddingBottom:"20px" }} className="image" >
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content" style={{height: "200px"}}>
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>                     
                    </div>
                </div>
                </Link>
            </div>
        );
    })

    return(
        <>{renderList}</>
    )
    
}
