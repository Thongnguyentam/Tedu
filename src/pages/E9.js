import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E9() {
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
                                                            <h1><b> Understanding Number Formats (Part 1)</b></h1>
                                                            <h3>Whenever you're working with a spreadsheet, it's a good idea to use appropriate number formats for your data. Number formats tell your spreadsheet exactly what type of data you're using, like percentages (%), currency ($), times, dates, and so on.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E9.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>Why use number formats?</h2>
                                                        <h3>Number formats not only make your spreadsheet easier to read, but they also make it easier to use. When you apply a number format, you're telling your spreadsheet exactly what types of values are stored in a cell. For example, the date format tells the spreadsheet that you're entering specific calendar dates. This allows the spreadsheet to better understand your data, which can help ensure that your data remains consistent and that your formulas are calculated correctly.</h3>
                                                        <ul>
                                                            <li><h3>If you don't need to use a specific number format, the spreadsheet will usually apply the general number format by default. However, the general format may apply some small formatting changes to your data.</h3></li>
                                                            
                                                        </ul>
                                                        <h2>Applying number formats</h2>
                                                        <h3>Just like other types of formatting, like changing the font color, you'll apply number formats by selecting cells and choosing the desired formatting option. There are two main ways to choose a number format:</h3>
                                                        <ul>
                                                            <li><h3>Go to the Home tab, click the Number Format drop-down menu in the Number group, and select the desired format.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/145.png" />
                                                            <li><h3>Click one of the quick number-formatting commands below the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/146.png" />
                                                        </ul>
                                                        <h3>In this example, we've applied the Currency number format, which adds currency symbols ($) and displays two decimal places for any numerical values.</h3>
                                                        <img alt="img" src="assets/img/Excel/147.png" />
                                                        <h3>If you select any cells with number formatting, you can see the actual value of the cell in the formula bar. The spreadsheet will use this value for formulas and other calculations.</h3>
                                                        <img alt="img" src="assets/img/Excel/148.png" />
                                                        <h1><b>Using number formats correctly</b></h1>
                                                        <h3>There's more to number formatting than selecting cells and applying a format. Spreadsheets can actually apply number formatting automatically based on the way you enter data. This means you'll need to enter data in a way the program can understand, then ensure that cells are using the proper number format. For example, the image below shows how to use number formats correctly for dates, percentages, and times:</h3>
                                                        <img alt="img" src="assets/img/Excel/149.png" />
                                                        <h3>Now that you know more about how number formats work, we'll look at a few number formats in action.</h3>
                                                        <h1><b>Percentage formats</b></h1>
                                                        <h3>One of the most helpful number formats is the percentage (%) format. It displays values as percentages, like 20% or 55%. This is especially helpful when calculating things like the cost of sales tax or a tip. When you type a percent sign (%) after a number, the percentage number format will be be applied to that cell automatically.</h3>
                                                        <img alt="img" width = "700" src="assets/img/Excel/150.png" />
                                                        <h3>As you may remember from math class, a percentage can also be written as a decimal. So 15% is the same thing as 0.15, 7.5% is 0.075, 20% is 0.20, 55% is 0.55, and so on.</h3>
                                                        <h3>There are many times when percentage formatting will be useful. For example, in the images below notice how the sales tax rate is formatted differently for each spreadsheet (5, 5%, and 0.05):</h3>
                                                        <img alt="img" width="700" src="assets/img/Excel/151.png" />
                                                        <h3>As you can see, the calculation in the spreadsheet on the left didn't work correctly. Without the percentage number format, our spreadsheet thinks we want to multiply $22.50 by 5, not 5%. And while the spreadsheet on the right still works without percentage formatting, the spreadsheet in the middle is easier to read.</h3>
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
export default E9;