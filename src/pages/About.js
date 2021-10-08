import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <section id="mu-about-us">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="mu-about-us-area">           
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="mu-about-us-left">
                          <div class="mu-title">
                            <h2>About Me</h2> 
                          </div>
                                        <h3><b>Thong Nguyen</b></h3>
                                        <p>Senior high-schooler with a demonstrated history of working in the Health wellness and Computer Science. Skilled in Python (Programming Language), C++, Presentation Skills, Machine Learning. Strong operations professional with a high school focused in Information Technology from VNU-HCM High School for the Gifted.</p>
                                        <a href=" https://thongnguyentam.github.io/Bio/"><p>Visit my web</p></a>
                                    </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="mu-about-us-right">                            
                        
                          <img width = "400" src="assets/img/about-me.jpg" alt="img"/>
                                     
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
}
export default About;