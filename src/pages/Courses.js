import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Courses() {
    return (
        <section id="mu-from-blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-from-blog-area">
            <div class="mu-title">
              <h2>Courses</h2>
            </div>
            <div class="mu-from-blog-content">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <article class="mu-blog-single-item">
                    <figure class="mu-blog-single-img">
                      <a href="MO"><img src="assets/img/blog/blog-1.jpg" alt="img"/></a>
                      <figcaption class="mu-blog-caption">
                        <h3><a href="MO">Microsoft Office Word</a></h3>
                      </figcaption>                      
                    </figure>
                    <div class="mu-blog-description">
                      <p>Microsoft Word is a word processing application that allows you to create a variety of documents, including letters, resumes, and more. In this lesson, you'll learn how to navigate the Word interface and become familiar with some of its most important features, such as the Ribbon, Quick Access Toolbar, and Backstage view.</p>
                      <a class="mu-read-more-btn" href="MO">Read More</a>
                    </div>
                  </article>
                </div>
                <div class="col-md-4 col-sm-4">
                  <article class="mu-blog-single-item">
                    <figure class="mu-blog-single-img">
                      <a href="EO"><img src="assets/img/blog/blog-2.jpg" alt="img"/></a>
                      <figcaption class="mu-blog-caption">
                        <h3><a href="EO">Microsoft Office Excel</a></h3>
                      </figcaption>                      
                    </figure>
                    <div class="mu-blog-description">
                      <p>Excel is a spreadsheet program that allows you to store, organize, and analyze information. While you may think Excel is only used by certain people to process complicated data, anyone can learn how to take advantage of the program's powerful features. Whether you're keeping a budget, organizing a training log, or creating an invoice, Excel makes it easy to work with different types of data.</p>
                      <a class="mu-read-more-btn" href="EO">Read More</a>
                    </div>
                  </article>
                </div>
                <div class="col-md-4 col-sm-4">
                  <article class="mu-blog-single-item">
                    <figure class="mu-blog-single-img">
                      <a href="C"><img src="assets/img/blog/blog-3.png" alt="img"/></a>
                      <figcaption class="mu-blog-caption">
                        <h3><a href="C">Internet Chrome Skills</a></h3>
                      </figcaption>                      
                    </figure>
                    <div class="mu-blog-description">
                      <p>Google Chrome is a free web browser from Google. With its clean design and advanced features, Chrome has quickly become one of the most popular web browsers worldwide. In this lesson, we'll talk about the features of Google Chrome, how to download and install Chrome to your computer, and how to sign in to Chrome using a Google account.</p>
                      <a class="mu-read-more-btn" href="C">Read More</a>
                    </div>
                  </article>
                </div>
              </div>
            </div> 
            <div class="mu-from-blog-content">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <article class="mu-blog-single-item">
                            <figure class="mu-blog-single-img">
                                <a href="G"><img src="assets/img/blog/blog-4.png" alt="img" /></a>
                                <figcaption class="mu-blog-caption">
                                    <h3><a href="G">Gmail</a></h3>
                                </figcaption>
                            </figure>
                            <div class="mu-blog-description">
                                <p>Gmail is a free email service provided by Google. In many ways, Gmail is like any other email service: You can send and receive emails, block spam, create an address book, and perform other basic email tasks. But it also has some more unique features that help make it one of the most popular online email services.</p>
                                <a class="mu-read-more-btn" href="G">COMING SOON !</a>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <article class="mu-blog-single-item">
                            <figure class="mu-blog-single-img">
                                <a href="#"><img src="assets/img/blog/blog-6.png" alt="img" /></a>
                                <figcaption class="mu-blog-caption">
                                    <h3>Typing Tutorial</h3>
                                </figcaption>
                            </figure>
                            <div class="mu-blog-description">
                                <p>Coming Soon!</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <article class="mu-blog-single-item">
                            <figure class="mu-blog-single-img">
                                <a href="#"><img src="assets/img/blog/blog-5.png" alt="img" /></a>
                                <figcaption class="mu-blog-caption">
                                    <h3>Smartphones& Tablets Skills</h3>
                                </figcaption>
                            </figure>
                            <div class="mu-blog-description">
                                <p>Coming Soon!</p>
                            </div>
                        </article>
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
export default Courses;