import React from "react";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
	const { openCart, cartQuantity } = useShoppingCart();
	return (
		<NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav>
					<Nav.Link to="/" as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to="/store" as={NavLink}>
						Store
					</Nav.Link>
					<Nav.Link to="/about" as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				{cartQuantity > 0 && (
					<Button
						variant="outline-primary"
						className="rounded-circle"
						title="Cart"
						style={{ position: "relative" }}
						onClick={openCart}
					>
						<AiOutlineShoppingCart
							style={{ fontSize: "1.8rem" }}
							className="icons-AiOutlineShoppingCart"
						/>
						<div className="cartNumbers">{cartQuantity}</div>
					</Button>
				)}
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
