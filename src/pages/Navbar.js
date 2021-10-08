import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
  <section id="mu-menu">
    <nav class="navbar navbar-default" role="navigation">  
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><i class="fa fa-university"></i><span>TEdu</span></a> 
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul id="top-menu" class="nav navbar-nav navbar-right main-nav">
            <li class="active"><a href="/">Home</a></li>            
            <li class="dropdown">
              <a href="/" class="dropdown-toggle" data-toggle="dropdown">Course <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="MO">Microsoft Word</a></li>                
                <li><a href="EO">Microsoft Excel</a></li>
                <li><a href="C">Internet Chrome skills</a></li>
                <li><a href="G">Gmail</a></li>
              </ul>
            </li>           
                            <li><a href=" https://thongnguyentam.github.io/Bio/">About me</a></li> 
          </ul>                     
        </div>       
      </div>     
    </nav>
  </section>
    );
}
export default Navbar;