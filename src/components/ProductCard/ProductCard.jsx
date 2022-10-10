
import "./ProductCard.css";
import { useCart } from "../../context/cart-context";
import { getProductById } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {

    const { id, name, image, oldPrice, newPrice, rating, discount } = product

    const { cart, cartDispatch } = useCart();

    const isProductInCart = getProductById(cart, id);

    const navigate = useNavigate();

    const handleAddToCartClick = () => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: product
        })
        navigate("/cart");
    }

    const handleGoToCartClick = () => {
        navigate("/cart");
    }

    return (
        <div class="card card-vertical d-flex direction-column relative shadow">
     <div class="card-image-container">
          <img class="card-image" src={image} alt="shoes" />
     </div>
     <div class="card-details">
          <div class="card-title">{name}</div>
          <div class="card-description">
               <p class="card-price d-flex align-end">
                  <span className="new-price">Rs. {newPrice}</span>
               	  <span class="price-strike-through">Rs. {oldPrice}</span>
                  <span class="discount">({discount}% OFF)</span>
               </p>
               <p className="d-flex align-center">
                    <span className="star material-icons-outlined">
                        star
                    </span>
                    {rating}
               </p>
          </div>
          <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={ isProductInCart ? handleGoToCartClick : handleAddToCartClick}>
                    {isProductInCart ? "Go To Cart" : "Add To Cart"}
               </button>
          </div>
     </div>
</div>
    )
}