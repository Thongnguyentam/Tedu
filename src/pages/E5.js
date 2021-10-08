import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E5() {
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
                                                            <h1><b>Modifying Columns, Rows, and Cells (Part 2)</b></h1>
                                                            <h3>By default, every row and column of a new workbook is set to the same height and width. Excel allows you to modify column width and row height in different ways, including wrapping text and merging cells.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E5.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h1><b>Inserting, deleting, moving, and hiding</b></h1>
                                                        <h3>After you've been working with a workbook for a while, you may find that you want to insert new columns or rows, delete certain rows or columns, move them to a different location in the worksheet, or even hide them.</h3>
                                                        <h2>To insert rows:</h2>
                                                        <ol>
                                                            <li><h3>Select the row heading below where you want the new row to appear. In this example, we want to insert a row between rows 4 and 5, so we'll select row 5.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/85.png" />
                                                            <li><h3>Click the Insert command on the Home tab.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/86.png" />
                                                            <li><h3>The new row will appear above the selected row.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/87.png" />
                                                        </ol>
                                                        <ul>
                                                            <li><h3>When inserting new rows, columns, or cells, you will see a paintbrush icon next to the inserted cells. This button allows you to choose how Excel formats these cells. By default, Excel formats inserted rows with the same formatting as the cells in the row above. To access additional options, hover your mouse over the icon, then click the drop-down arrow.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/88.png" />
                                                        </ul>
                                                        <h2>To insert columns:</h2>
                                                        <ol>
                                                            <li><h3>Select the column heading to the right of where you want the new column to appear. For example, if you want to insert a column between columns D and E, select column E.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/89.png" />
                                                            <li><h3>Click the Insert command on the Home tab.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/90.png" />
                                                            <li><h3>The new column will appear to the left of the selected column.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/91.png" />
                                                        </ol>
                                                        <h2>To delete a row or column:</h2>
                                                        <h3>It's easy to delete a row or column that you no longer need. In our example we'll delete a row, but you can delete a column the same way.</h3>
                                                        <ol>
                                                            <li><h3>Select the row you want to delete. In our example, we'll select row 9.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/92.png" />
                                                            <li><h3>Click the Delete command on the Home tab.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/93.png" />
                                                            <li><h3>The selected row will be deleted, and those around it will shift. In our example, row 10 has moved up, so it's now row 9.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/94.png" />
                                                        </ol>
                                                        <ul>
                                                            <li><h3>It's important to understand the difference between deleting a row or column and simply clearing its contents. If you want to remove the content from a row or column without causing others to shift, right-click a heading, then select Clear Contents from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/95.png" />
                                                        </ul>
                                                        <h2>To move a row or column:</h2>
                                                        <h3>Sometimes you may want to move a column or row to rearrange the content of your worksheet. In our example we'll move a column, but you can move a row in the same way.</h3>
                                                        <ol>
                                                            <li><h3>Select the desired column heading for the column you want to move.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/96.png" />
                                                            <li><h3>Click the Cut command on the Home tab, or press Ctrl+X on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/97.png" />
                                                            <li><h3>Select the column heading to the right of where you want to move the column. For example, if you want to move a column between columns E and F, select column F.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/98.png" />
                                                            <li><h3>Click the Insert command on the Home tab, then select Insert Cut Cells from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/99.png" />
                                                            <li><h3>The column will be moved to the selected location, and the columns around it will shift.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/100.png" />
                                                        </ol>
                                                        <ul>
                                                            <li><h3>You can also access the Cut and Insert commands by right-clicking the mouse and selecting the desired commands from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/101.png" />
                                                        </ul>
                                                        <h2>To hide and unhide a row or column:</h2>
                                                        <h3>At times, you may want to compare certain rows or columns without changing the organization of your worksheet. To do this, Excel allows you to hide rows and columns as needed. In our example we'll hide a few columns, but you can hide rows in the same way.</h3>
                                                        <ol>
                                                            <li><h3>Select the columns you want to hide, right-click the mouse, then select Hide from the formatting menu. In our example, we'll hide columns C, D, and E.</h3></li>
                                                            <img alt="img" width = "700" src="assets/img/Excel/102.png" />
                                                            <li><h3>The columns will be hidden. The green column line indicates the location of the hidden columns.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/103.png" />
                                                            <li><h3>To unhide the columns, select the columns on both sides of the hidden columns. In our example, we'll select columns B and F. Then right-click the mouse and select Unhide from the formatting menu.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/104.png" />
                                                            <li><h3>The hidden columns will reappear.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/105.png" />
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
export default E5;