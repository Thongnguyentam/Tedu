import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Cmenu() {
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
                                        <a href="C1"><img src="assets/img/Lesson/C1.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="C1">Getting Started with Google Chrome</a></h4>
                                        <p>Learn how to get started with Google Chrome.</p>
                                    </div>
                                </div>
                                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                  <figure class="mu-latest-course-img">
                                    <a href="C2"><img src="assets/img/Lesson/C2.png" alt="img"/></a>
                                  </figure>
                                  <div class="mu-latest-course-single-content">
                                    <h4><a href="C2">Browsing in Chrome</a></h4>
                                    <p>Learn how to browse in Chrome.</p>
                                  </div>
                                </div> 
                              </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="C3"><img src="assets/img/Lesson/C3.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="C3">Customizing Chrome</a></h4>
                                        <p>Learn how to customize Chrome so it's user friendly for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="mu-latest-course-single">
                                    <figure class="mu-latest-course-img">
                                        <a href="C4"><img src="assets/img/Lesson/C4.png" alt="img" /></a>
                                    </figure>
                                    <div class="mu-latest-course-single-content">
                                        <h4><a href="C4">Bookmarking in Chrome</a></h4>
                                        <p>Learn how to bookmark in Chrome to save your favorite sites.</p>
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
export default Cmenu;