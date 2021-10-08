import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E3() {
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
                                                            <h1><b>Cell Basics</b></h1>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E3.png" />
                                </figure>
                                                    <div class="mu-blog-description">
                                                        <h2>Understanding cells</h2>
                                                        <h3>Every worksheet is made up of thousands of rectangles, which are called cells. A cell is the intersection of a row and a column. In other words, it's where a row and column meet.</h3>
                                                        <h3>Every worksheet is made up of thousands of rectangles, which are called cells. A cell is the intersection of a row and a column. In other words, it's where a row and column meet.</h3>
                                                        <img alt="img" src="assets/img/Excel/39.png" />
                                                        <h3>Note that the cell address also appears in the Name box in the top-left corner, and that a cell's column and row headings are highlighted when the cell is selected.</h3>
                                                        <h3>You can also select multiple cells at the same time. A group of cells is known as a cell range. Rather than a single cell address, you will refer to a cell range using the cell addresses of the first and last cells in the cell range, separated by a colon. For example, a cell range that included cells A1, A2, A3, A4, and A5 would be written as A1:A5. Take a look at the different cell ranges below:</h3>
                                                        <ul>
                                                            <li><h3>Cell range A1:A8</h3></li>
                                                            <img alt="img" src="assets/img/Excel/40.png" />
                                                            <li><h3>Cell range A1:F1</h3></li>
                                                            <img alt="img" src="assets/img/Excel/41.png" />
                                                            <li><h3>Cell range A1:F8</h3></li>
                                                            <img alt="img" src="assets/img/Excel/42.png" />
                                                        </ul>
                                                        <h2>To select a cell:</h2>
                                                        <h3>To input or edit cell content, you'll first need to select the cell.</h3>
                                                        <ol>
                                                            <li><h3>Click a cell to select it. In our example, we'll select cell D9.</h3></li>
                                                            <li><h3>A border will appear around the selected cell, and the column heading and row heading will be highlighted. The cell will remain selected until you click another cell in the worksheet.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/43.png" />
                                                        </ol>
                                                        <h2>To select a cell range:</h2>
                                                        <h3>Sometimes you may want to select a larger group of cells, or a cell range.</h3>
                                                        <ol>
                                                            <li><h3>Click and drag the mouse until all of the adjoining cells you want to select are highlighted. In our example, we'll select the cell range B5:C18.</h3></li>
                                                            <li><h3>Release the mouse to select the desired cell range. The cells will remain selected until you click another cell in the worksheet.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/44.png" />
                                                        </ol>
                                                        <h1><b>Cell content</b></h1>
                                                        <h3>Any information you enter into a spreadsheet will be stored in a cell. Each cell can contain different types of content, including text, formatting, formulas, and functions.</h3>
                                                        <ul>
                                                            <li><h3><b>Text:</b> Cells can contain text, such as letters, numbers, and dates</h3></li>
                                                            <img alt="img" src="assets/img/Excel/45.png" />
                                                            <li><h3><b>Formatting attributes:</b> Cells can contain formatting attributes that change the way letters, numbers, and dates are displayed. For example, percentages can appear as 0.15 or 15%. You can even change a cell's text or background color.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/46.png" />
                                                            <li><h3><b>Formulas and functions:</b> Cells can contain formulas and functions that calculate cell values. In our example, SUM(B2:B8) adds the value of each cell in the cell range B2:B8 and displays the total in cell B9.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/47.png" />
                                                        </ul>
                                                        <h2>To insert content:</h2>
                                                        <ol>
                                                            <li><h3>Click a cell to select it. In our example, we'll select cell F9.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/48.png" />
                                                            <li><h3>Type something into the selected cell, then press Enter on your keyboard. The content will appear in the cell and the formula bar. You can also input and edit cell content in the formula bar.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/49.png" />
                                                        </ol>
                                                        <h2>To delete (or clear) cell content:</h2>
                                                        <ol>
                                                            <li><h3>Select the cell(s) with content you want to delete. In our example, we'll select the cell range A10:H10.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/50.png" />
                                                            <li><h3>Select the Clear command on the Home tab, then click Clear Contents.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/51.png" />
                                                            <li><h3>The cell contents will be deleted.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/52.png" />
                                                        </ol>
                                                        <h2>To delete cells:</h2>
                                                        <h3>There is an important difference between deleting the content of a cell and deleting the cell itself. If you delete the entire cell, the cells below it will shift to fill in the gaps and replace the deleted cells.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to delete. In our example, we'll select A10:H10.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/53.png" />
                                                            <li><h3>Select the Delete command from the Home tab on the Ribbon.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/54.png" />
                                                            <li><h3>The cells below will shift up and fill in the gaps.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/55.png" />
                                                        </ol>
                                                        <h2>To copy and paste cell content:</h2>
                                                        <h3>Excel allows you to copy content that is already entered into your spreadsheet and paste this content to other cells, which can save you time and effort.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to copy. In our example, we'll select F9.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/56.png" />
                                                            <li><h3>Click the Copy command on the Home tab, or press Ctrl+C on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/57.png" />
                                                            <li><h3>Select the cell(s) where you want to paste the content. In our example, we'll select F12:F17. The copied cell(s) will have a dashed box around them.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/58.png" />
                                                            <li><h3>Click the Paste command on the Home tab, or press Ctrl+V on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/59.png" />
                                                            <li><h3>The content will be pasted into the selected cells.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/60.png" />
                                                        </ol>
                                                        <h2>To access additional paste options:</h2>
                                                        <h3>You can also access additional paste options, which are especially convenient when working with cells that contain formulas or formatting. Just click the drop-down arrow on the Paste command to see these options.</h3>
                                                        <img alt="img" src="assets/img/Excel/61.png" />
                                                        <h3>Instead of choosing commands from the Ribbon, you can access commands quickly by right-clicking. Simply select the cell(s) you want to format, then right-click the mouse. A drop-down menu will appear, where you'll find several commands that are also located on the Ribbon.</h3>
                                                        <img alt="img" src="assets/img/Excel/62.png" />
                                                        <h2>To cut and paste cell content:</h2>
                                                        <h3>Unlike copying and pasting, which duplicates cell content, cutting allows you to move content between cells.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to cut. In our example, we'll select G5:G6.</h3></li>
                          
                                                            <li><h3>Right-click the mouse and select the Cut command. You can also use the command on the Home tab, or press Ctrl+X on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/63.png" />
                                                            <li><h3>Select the cells where you want to paste the content. In our example, we'll select F10:F11. The cut cells will now have a dashed box around them.</h3></li>
                                                            <li><h3>Right-click the mouse and select the Paste command. You can also use the command on the Home tab, or press Ctrl+V on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/64.png" />
                                                            <li><h3>The cut content will be removed from the original cells and pasted into the selected cells.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/65.png" />
                                                        </ol>
                                                        <h2>To drag and drop cells:</h2>
                                                        <h3>Instead of cutting, copying, and pasting, you can drag and drop cells to move their contents.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) you want to move. In our example, we'll select H4:H12.</h3></li>
                                                            <li><h3>Hover the mouse over the border of the selected cell(s) until the mouse changes to a pointer with four arrows.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/66.png" />
                                                            <li><h3>Click and drag the cells to the desired location. In our example, we'll move them to G4:G12.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/67.png" />
                                                            <li><h3>Release the mouse. The cells will be dropped in the selected location.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/68.png" />
                                                        </ol>
                                                        <h2>To use the fill handle:</h2>
                                                        <h3>If you're copying cell content to adjacent cells in the same row or column, the fill handle is a good alternative to the copy and paste commands.</h3>
                                                        <ol>
                                                            <li><h3>Select the cell(s) containing the content you want to use, then hover the mouse over the lower-right corner of the cell so the fill handle appears.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/69.png" />
                                                            <li><h3>Click and drag the fill handle until all of the cells you want to fill are selected. In our example, we'll select G13:G17.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/70.png" />
                                                            <li><h3>Release the mouse to fill the selected cells.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/71.png" />
                                                        </ol>
                                                        <h2>To continue a series with the fill handle:</h2>
                                                        <h3>The fill handle can also be used to continue a series. Whenever the content of a row or column follows a sequential order, like numbers (1, 2, 3) or days (Monday, Tuesday, Wednesday), the fill handle can guess what should come next in the series. In most cases, you will need to select multiple cells before using the fill handle to help Excel determine the series order. Let's take a look at an example:</h3>
                                                        <ol>
                                                            <li><h3>Select the cell range that contains the series you want to continue. In our example, we'll select E4:G4.</h3></li>
                                                          
                                                            <li><h3>Click and drag the fill handle to continue the series.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/72.png" />
                                                            <li><h3>Release the mouse. If Excel understood the series, it will be continued in the selected cells. In our example, Excel added Part 4, Part 5, and Part 6 to H4:J4.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/73.png" />
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
export default E3;