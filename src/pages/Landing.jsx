import React from 'react';
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';

// const StyledBtn = styled.button`
//     font-size: 1.5rem;
//     background : red;
//     color : white;
// `


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                {/* <img src={logo} alt="kaam" className = 'logo' /> */}
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>Job<span>Tracking</span>App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae soluta, ratione impedit tenetur beatae ipsum qui molestias accusantium quaerat!</p>

                    <Link to="/register" className = 'btn register-link'>Register</Link>
                    <Link to="/login" className = 'btn'>Login</Link>
                </div>
                <img src={main} alt="jobhunt" className='img main-img' />
            </div>
        </Wrapper>
    ) 
}

export default Landing;
