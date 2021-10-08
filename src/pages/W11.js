import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function W7() {
    return (
        <section id="mu-course-content">
           <div class="container">
             <div class="row">
               <div class="col-md-12">
                 <div class="mu-course-content-area">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="mu-course-container mu-blog-single">
                          <div class="row">
                            <div class="col-md-12">
                              <article class="mu-blog-single-item">
                                <figure class="mu-blog-single-img">
                                  <figcaption class="mu-blog-caption">
                                                            <h1><b> Breaks</b></h1>
                                                            <h3>When you're working on a multi-page document, there may be times when you want to have more control over how exactly the text flows. Breaks can be helpful in these cases. There are many types of breaks to choose from depending on what you need, including page breaks, section breaks, and column breaks.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/W11.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>To insert a page break:</h2>
                                                        <h3>In our example, the section headers on page three (Monthly Revenue and By Client) are separated from the table on the page below. And while we could just press Enter until that text reaches the top of page four, it could easily be shifted around if we added or deleted something in another part of the document. Instead, we'll insert a page break.</h3>
                                                        <ol>
                                                            <h3> <li>Place the insertion point where you want to create the page break. In our example, we'll place it at the beginning of our headings.</li></h3>
                                                            <img alt="img" width = "600" src="assets/img/Word/164.png" />
                                                            <h3> <li>On the Insert tab, click the Page Break command. You can also press Ctrl+Enter on your keyboard.</li></h3>
                                                            <img alt="img" src="assets/img/Word/165.png" />
                                                            <h3> <li>The page break will be inserted into the document, and the text will move to the next page.</li></h3>
                                                            <img alt="img" width="600" src="assets/img/Word/166.png" />
                                                        </ol>
                                                        <ul>
                                                            <h3> <li>By default, breaks are invisible. If you want to see the breaks in your document, click the Show/Hide command on the Home tab.</li></h3>
                                                            <img alt="img" width="600" src="assets/img/Word/167.png" />
                                                        </ul>
                                                        <h1><b>Section breaks</b></h1>
                                                        <h3>Section breaks create a barrier between different parts of a document, allowing you to format each section independently. For example, you may want one section to have two columns without adding columns to the entire document. Word offers several types of section breaks.</h3>
                                                        <ul>
                                                            <h3><li><b>Next Page:</b> This option inserts a section break and moves text after the break to the next page of the document.</li></h3>
                                                            <h3><li><b>Continuous:</b>This option inserts a section break and allows you to continue working on the same page.</li></h3>
                                                            <h3><li><b>Even Page and Odd Page: </b> These options add a section break and move the text after the break to the next even or odd page. These options may be useful when you need to begin a new section on an even or odd page (like with a new chapter of a book).</li></h3>
                                                            <img alt="img" src="assets/img/Word/168.png" />
                                                        </ul>
                                                        <h2>To insert a section break:</h2>
                                                        <h3>In our example, we'll add a section break to separate a paragraph from a two-column list.</h3>
                                                        <ol>
                                                            <h3> <li>Place the insertion point where you want to create the break. In our example, we'll place it at the beginning of the paragraph we want to separate from two-column formatting.</li></h3>
                                                            <img alt="img" src="assets/img/Word/169.png" />
                                                            <h3> <li>On the Page Layout tab, click the Breaks command, then select the desired section break from the drop-down menu. In our example, we'll select Continuous so our paragraph remains on the same page as the columns.</li></h3>
                                                            <img alt="img" src="assets/img/Word/170.png" />
                                                            <h3> <li>A section break will appear in the document.</li></h3>
                                                            <img alt="img" src="assets/img/Word/171.png" />
                                                            <h3> <li>The text before and after the section break can now be formatted separately. In our example, we'll apply one-column formatting to the paragraph.</li></h3>
                                                            <img alt="img" src="assets/img/Word/172.png" />
                                                            <h3> <li>The formatting will be applied to the current section of the document. In our example, the text above the section break uses two-column formatting, while the paragraph below the break uses one-column formatting.</li></h3>
                                                            <img alt="img" src="assets/img/Word/173.png" />
                                                        </ol>
                                                        <h1><b>Other types of breaks</b></h1>
                                                        <h3>When you want to format the appearance of columns or modify text wrapping around an image, Word offers additional break options that can help:</h3>
                                                        <ul>
                                                            <h3><li><b>Column:</b>When creating multiple columns, you can apply a column break to balance the appearance of the columns. Any text following the column break will begin in the next column. To learn more about how to create columns in your document, review our lesson on Columns.</li></h3>
                                                            <h3><li><b>Text wrapping: </b> When text has been wrapped around an image or object, you can use a text-wrapping break to end the wrapping and begin typing on the line below the image. </li></h3>
                                                            <img alt="img" src="assets/img/Word/174.png" />
                                                        </ul>
                                                        <h2>To delete a break:</h2>
                                                        <h3>By default, breaks are hidden. If you want to delete a break, you'll first need to show the breaks in your document.</h3>
                                                        <ol>
                                                            <h3> <li>On the Home tab, click the Show/Hide command.</li></h3>
                                                            <img alt="img" src="assets/img/Word/175.png" />
                                                            <h3> <li>Locate the break you want to delete, then place the insertion point at the beginning of the break.</li></h3>
                                                            <img alt="img" src="assets/img/Word/176.png" />
                                                            <h3> <li>Press the Delete key. The break will be deleted from the document.</li></h3>
                                                            <img alt="img" src="assets/img/Word/177.png" />
                                                        </ol>
                                </div>
                              </article>
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
export default W7;