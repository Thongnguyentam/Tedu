import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E4() {
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
                                                            <h1><b>Modifying Columns, Rows, and Cells</b></h1>
                                                            <h3>By default, every row and column of a new workbook is set to the same height and width. Excel allows you to modify column width and row height in different ways, including wrapping text and merging cells.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E4.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>To modify column width:</h2>
                                                        <h3>In our example below, column C is too narrow to display all of the content in these cells. We can make all of this content visible by changing the width of column C.</h3>
                                                        <ol>
                                                            <li><h3>Position the mouse over the column line in the column heading so the cursor becomes a double arrow.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/74.png" />
                                                            <li><h3>Click and drag the mouse to increase or decrease the column width.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/75.png" />
                                                            <li><h3>Release the mouse. The column width will be changed.</h3></li>
                                                            <img alt="img" width = "700" src="assets/img/Excel/76.png" />
                                                        </ol>
                                                        <h2>To AutoFit column width:</h2>
                                                        <h3>The AutoFit feature will allow you to set a column's width to fit its content automatically.</h3>
                                                        <ol>
                                                            <li><h3>Position the mouse over the column line in the column heading so the cursor becomes a double arrow.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/77.png" />
                                                            <li><h3>Double-click the mouse. The column width will be changed automatically to fit the content.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/78.png" /> 
                                                        </ol>
                                                        <ul>
                                                            <li><h3>You can also AutoFit the width for several columns at the same time. Simply select the columns you want to AutoFit, then select the AutoFit Column Width command from the Format drop-down menu on the Home tab. This method can also be used for row height.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/79.png" />
                                                        </ul>
                                                        <h2>To modify row height:</h2>
                                                        <ol>
                                                            <li><h3>Position the cursor over the row line so the cursor becomes a double arrow.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/80.png" />
                                                            <li><h3>Click and drag the mouse to increase or decrease the row height.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/81.png" />
                                                            <li><h3>Release the mouse. The height of the selected row will be changed.</h3></li>
                                                            <img alt="img" width = "700" src="assets/img/Excel/82.png" />
                                                        </ol>
                                                        <h2>To modify all rows or columns:</h2>
                                                        <h3>Instead of resizing rows and columns individually, you can modify the height and width of every row and column at the same time. This method allows you to set a uniform size for every row and column in your worksheet. In our example, we will set a uniform row height.</h3>
                                                        <ol>
                                                            <li><h3>Locate and click the Select All button just below the name box to select every cell in the worksheet.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/83.png" />
                                                            <li><h3>Position the mouse over a row line so the cursor becomes a double arrow.</h3></li>
                                                            <li><h3>Click and drag the mouse to increase or decrease the row height, then release the mouse when you are satisfied. The row height will be changed for the entire worksheet.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/84.png" />
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
export default E4;