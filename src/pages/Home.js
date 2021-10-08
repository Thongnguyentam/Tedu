import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Courses from './Courses';
function Home() {
    return (
        <div>
            <Courses />
            <About />
        </div>
    );
}
export default Home;