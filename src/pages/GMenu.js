import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Emenu() {
    return (
        <section id="mu-course-content">
           <div class="container">
             <div class="row">
               <div class="col-md-12">
                 <div class="mu-course-content-area">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="mu-course-container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="G1"><img src="assets/img/Lesson/G1.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="G1">Introduction to Gmail</a></h4>
                                        <p>Get an introduction to Gmail.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                  <figure class="mu-latest-course-img">
                                    <a href="G2"><img src="assets/img/Lesson/G2.png" alt="img"/></a>
                                  </figure>
                                  <div class="mu-latest-course-single-content">
                                    <h4><a href="G2">Setting Up a Gmail Account</a></h4>
                                    <p>Here's how to set up a new Gmail account.</p>
                                  </div>
                                </div> 
                              </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="G3"><img src="assets/img/Lesson/G3.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="G3">Sending Email</a></h4>
                                        <p>Learn how to send messages.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="G4"><img src="assets/img/Lesson/G4.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="G4">Responding to Email</a></h4>
                                        <p>Learn how to respond to messages.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="G5"><img src="assets/img/Lesson/G5.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="G5">Managing Email</a></h4>
                                        <p>Learn how to manage your Gmail messages.</p>
                                    </div>
                                </div>
                            </div>
                          </div>
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
export default Emenu;