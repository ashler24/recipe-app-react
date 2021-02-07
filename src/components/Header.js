import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <React.Fragment>
                <Navbar light expand="md">
                    <NavbarBrand>Recipe House</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/addRecipe">Add Recipe</NavLink>
                            </NavItem>
                        </Nav>
                        
                    </Collapse>
                </Navbar>
            </React.Fragment>
        </div>
    );
};

export default Header;
