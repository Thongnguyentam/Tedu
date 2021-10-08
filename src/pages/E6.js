import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E6() {
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
                                                            <h1><b>Modifying Columns, Rows, and Cells (Part 3)</b></h1>
                                                            <h3>By default, every row and column of a new workbook is set to the same height and width. Excel allows you to modify column width and row height in different ways, including wrapping text and merging cells.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E6.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h1><b>Wrapping text and merging cells</b></h1>
                                                        <h3>Whenever you have too much cell content to be displayed in a single cell, you may decide to wrap the text or merge the cell rather than resize a column. Wrapping the text will automatically modify a cell's row height, allowing cell contents to be displayed on multiple lines. Merging allows you to combine a cell with adjacent empty cells to create one large cell.</h3>
                                                        <h2>To wrap text in cells:</h2>
                                                        <ol>
                                                            <li><h3>Select the cells you want to wrap. In this example, we'll select the cells in column C.</h3></li>
                                                            <li><h3>Click the Wrap Text command on the Home tab.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/106.png" />
                                                            <li><h3>The text in the selected cells will be wrapped.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/107.png" />
                                                        </ol>
                                                        <h2>To merge cells using the Merge & Center command:</h2>
                                                        <ol>
                                                            <li><h3>Select the cell range you want to merge. In our example, we'll select A1:F1.</h3></li>
                                                            <li><h3>Click the Merge & Center command on the Home tab. In our example, we'll select the cell range A1:F1.</h3></li>
                                                            <img alt="img" width = "700" src="assets/img/Excel/108.png" />
                                                            <li><h3>The selected cells will be merged, and the text will be centered.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/109.png" />
                                                        </ol>
                                                        <h2>To access additional merge options:</h2>
                                                        <h3>If you click the drop-down arrow next to the Merge & Center command on the Home tab, the Merge drop-down menu will appear.</h3>
                                                        <img alt="img" src="assets/img/Excel/110.png" />
                                                        <h3>From here, you can choose to:</h3>
                                                        <ul>
                                                            <li><h3><b>Merge & Center:</b> This merges the selected cells into one cell and centers the text.</h3></li>
                                                                <li><h3><b>Merge Across:</b> This merges the selected cells into larger cells while keeping each row separate.</h3></li>
                                                                    <li><h3><b>Merge Cells:</b> This merges the selected cells into one cell but does not center the text.</h3></li>
                                                                        <li><h3><b>Unmerge Cells:</b> This unmerges selected cells.</h3></li>
                                                        </ul>
                                                        <h2>Centering across selection</h2>
                                                        <h3>Merging can be useful for organizing your data, but it can also create problems later on. For example, it can be difficult to move, copy, and paste content from merged cells. A good alternative to merging is to Center Across Selection, which creates a similar effect without actually combining cells.</h3>
                                                        <h2>To use Center Across Selection:</h2>
                                                        <ol>
                                                            <li><h3>Select the desired cell range. In our example, we'll select A1:F1. Note: If you already merged these cells, you should unmerge them before continuing to step 2.</h3></li>
                                                            <li><h3>Click the small arrow in the lower-right corner of the Alignment group on the Home tab.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/111.png" />
                                                            <li><h3>A dialog box will appear. Locate and select the Horizontal drop-down menu, select Center Across Selection, then click OK.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/112.png" />
                                                            <li><h3>The content will be centered across the selected cell range. As you can see, this creates the same visual result as merging and centering, but it preserves each cell within A1:F1.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/113.png" />
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
export default E6;