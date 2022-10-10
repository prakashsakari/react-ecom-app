import { useCart } from "../../context/cart-context"


export const ProductCardHorizontal = ({product}) => {

    const { id, name, image, oldPrice, newPrice, rating, discount, quantity } = product;

    const { cartDispatch } = useCart();

    const handleDecrement = (id) => {
        cartDispatch({
            type: "DECREMENT",
            payload: id
        })
    }

    const handleIncrement = (id) => {
        cartDispatch({
            type: "INCREMENT",
            payload: id
        })
    }

    return (
        <div class="card-horizontal d-flex shadow">
            <div class="card-hori-image-container relative">
                <img class="card-image" src={image} alt="shoes" />
            </div>
            <div class="card-details d-flex direction-column">
                <div class="card-title">{name}</div>
                <div class="card-description">
                    <p class="card-price">Rs. {newPrice}<span class="price-strike-through padding-all-8">Rs. {oldPrice}</span>
                        <span class="discount padding-all-8">({discount}% OFF)</span>
                    </p>
                </div>
                <div class="quantity-container d-flex gap">
                    <p class="q-title">Quantity: </p>
                    <div class="count-container d-flex align-center gap">
                            <button class="count" onClick={() => handleDecrement(id)} disabled={quantity === 1}>-</button>
                            <span class="count-value">{quantity}</span>
                            <button class="count" onClick={() => handleIncrement(id)}>+</button>
                    </div>
                </div>
                <div class="cta-btn d-flex gap">
                    <div class="cta-btn">
                        <button class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"> Add To Cart</button>
                    </div>
                    <div class="cta-btn">
                        <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                        Move to ❤️</button>
                        </div>
                </div>
            </div>
</div>
    )
}