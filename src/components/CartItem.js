import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
	const { removeItemFromCart } = useShoppingCart();
	const item = storeItems.find((i) => i.id == id);
	if (item == null) return null;
	return (
		<Stack direction="horizontal" className="d-flex align-items-center gap-3">
			<img
				src={item.imageUrl}
				style={{ width: "100px", height: "75px", objectFit: "cover" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".6rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".7rem" }}>
					{item.price}$
				</div>
			</div>
			<div>{item.price * quantity}$</div>
			<Button variant="outline-danger" onClick={() => removeItemFromCart(id)}>
				&times;
			</Button>
		</Stack>
	);
};

export default CartItem;
