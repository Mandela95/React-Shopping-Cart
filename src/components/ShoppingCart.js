import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItems from "../data/storeItems.json";

const ShoppingCart = ({ isOpen }) => {
	const { cartItems, closeCart } = useShoppingCart();
	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body className="d-flex flex-column ">
				<Stack gap={2}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
					<hr />
					<div className="ms-auto fw-bold fs-5">
						Total:{" "}
						{cartItems.reduce((total, cartItem) => {
							const item = storeItems.find((i) => i.id === cartItem.id);
							return total + (item?.price || 0) * cartItem.quantity;
						}, 0)}
						{"$"}
					</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default ShoppingCart;
