import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E7() {
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
                                                            <h1><b>Formatting Cells (Part 2)</b></h1>
                                                            <h3>All cell content uses the same formatting by default, which can make it difficult to read a workbook with a lot of information. Basic formatting can customize the look and feel of your workbook, allowing you to draw attention to specific sections and making your content easier to view and understand.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E8.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h1><b>Cell styles</b></h1>
                                                        <h3>Instead of formatting cells manually, you can use Excel's predesigned cell styles. Cell styles are a quick way to include professional formatting for different parts of your workbook, like titles and headers.</h3>
                                                        <h2>To apply a cell style:</h2>
                                                        <h3>In our example, we'll apply a new cell style to our existing title and header cells.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to modify.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/135.png" />
                                                            <li><h3>Click the Cell Styles command on the Home tab, then choose the desired style from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/136.png" />
                                                            <li><h3>The selected cell style will appear.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/137.png" />
                                                        </ol>
                                                        <h1><b>Text alignment</b></h1>
                                                        <h3>By default, any text entered into your worksheet will be aligned to the bottom-left of a cell, while any numbers will be aligned to the bottom-right. Changing the alignment of your cell content allows you to choose how the content is displayed in any cell, which can make your cell content easier to read.</h3>
                                                        <h2>To change horizontal text alignment:</h2>
                                                        <h3>In our example below, we'll modify the alignment of our title cell to create a more polished look and further distinguish it from the rest of the worksheet.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to modify.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/138.png" />
                                                            <li><h3>Select one of the three horizontal alignment commands on the Home tab. In our example, we'll choose Center Align.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/139.png" />
                                                            <li><h3>The text will realign.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/140.png" />
                                                        </ol>
                                                        <h2>To change vertical text alignment:</h2>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to modify.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/141.png" />
                                                            <li><h3>Select one of the three vertical alignment commands on the Home tab. In our example, we'll choose Middle Align.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/142.png" />
                                                            <li><h3>The text will realign.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/143.png" />
                                                        </ol>
                                                        <h1><b>The Format Painter</b></h1>
                                                        <h3>If you want to copy formatting from one cell to another, you can use the Format Painter command on the Home tab. When you click the Format Painter, it will copy all of the formatting from the selected cell. You can then click and drag over any cells where you want to paste the formatting.</h3>
                                                        <img alt="img" src="assets/img/Excel/144.png" />

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
export default E7;