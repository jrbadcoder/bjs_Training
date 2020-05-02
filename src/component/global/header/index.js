import React from 'react';
import SearchBox from '../input/search';
import {Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    const onSearch = value => {
        console.log("value", value)
    }
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <div style={{width: '5%'}} >

            </div>
            <div style={{width: '10%'}} >
                Bjs Hub
            </div>
            <div style={{width: '25%'}} >
                <SearchBox onSearch={onSearch} />
            </div>
            <div style={{width: '10%'}} >
            Corporate Training 
            </div>
            <div style={{width: '10%'}} >
                courses
            </div>
            <div style={{width: '10%'}} >
                Blog
            </div>
            <div style={{width: '10%'}} >
                | 
            </div>
            <div style={{width: '10%'}} >
            {/* <Button variant="link">Log In</Button> */}
            <Link to="/component/login">Log In</Link>
            </div>
            <div style={{width: '10%'}} >
            <Link to="/component/sign up">Sign Up</Link>
            </div>
        </div>
    )
}

export default Header;