import React from "react";
// import { useDispatch } from 'react-redux';

import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hook-store/store";
// import { toggleFav } from '../../store/actions/products';

const ProductItem = (props) => {
    // const dispatch = useDispatch();

    const dispatch = useStore(true)[1];
    const toggleFavHandler = () => {
        dispatch("TOGGLE_FAV", props.id);
    };

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="product-item">
                <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFav ? "button-outline" : ""}
                    onClick={toggleFavHandler}
                >
                    {props.isFav ? "Un-Favorite" : "Favorite"}
                </button>
            </div>
        </Card>
    );
};

export default ProductItem;