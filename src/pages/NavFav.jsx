import React from 'react';
import {NavDropdown} from 'react-bootstrap';

class NavFav extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>
                <NavDropdown title="Favorites" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>                   
                </NavDropdown>
            </>

        )
    }
}

export default NavFav;

