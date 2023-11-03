import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imageUrl }) => {
	const {
		getItemsQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeItemFromCart,
	} = useShoppingCart();
	const quantity = getItemsQuantity(id);
	return (
		<Card>
			<Card.Img
				src={imageUrl}
				variant="top"
				style={{ height: "200px", objectFit: "cover" }}
			/>
			<Card.Body>
				<Card.Title className="d-flex justify-content-between align-items-center">
					<span className="fs-2">{name}</span>
					<span className="text-muted">{price}$</span>
				</Card.Title>

				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							Add To Cart
						</Button>
					) : (
						<div className="d-flex align-items-center flex-column gap-1">
							<div className="d-flex align-items-center justify-content-center gap-1">
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<span className="fs-3"> {quantity} in cart </span>
								<Button onClick={() => increaseCartQuantity(id)}> + </Button>
							</div>
							<Button variant="danger" onClick={() => removeItemFromCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default StoreItem;
