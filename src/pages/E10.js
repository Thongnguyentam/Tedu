import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E10() {
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
                                                            <h1><b> Understanding Number Formats (Part 2)</b></h1>
                                                            <h3>Whenever you're working with a spreadsheet, it's a good idea to use appropriate number formats for your data. Number formats tell your spreadsheet exactly what type of data you're using, like percentages (%), currency ($), times, dates, and so on.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E10.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h1><b>Date formats</b></h1>
                                                        <h3>Whenever you're working with dates, you'll want to use a date format to tell the spreadsheet that you're referring to specific calendar dates, like July 15, 2014. Date formats also allow you to work with a powerful set of date functions that use time and date information to calculate an answer.</h3>
                                                        <h3>Spreadsheets don't understand information the same way a person would. For instance, if you type October into a cell, the spreadsheet won't know you're entering a date so it will treat it like any other text. Instead, when you enter a date, you'll need to use a specific format your spreadsheet understands, like month/day/year (or day/month/year depending on which country you're in). In the example below, we'll type 10/12/2014 for October 12, 2014. Our spreadsheet will then automatically apply the date number format for the cell.</h3>
                                                        <img alt="img" src="assets/img/Excel/152.png" />
                                                        <h3>Now that we have our date correctly formatted, we can do different things with this data. For example, we could use the fill handle to continue the dates through the column, so a different day appears in each cell:</h3>
                                                        <img alt="img" src="assets/img/Excel/153.png" /><br/>
                                                        <img alt="img" src="assets/img/Excel/154.png" />
                                                        <h3>If the date formatting isn't applied automatically, it means the spreadsheet did not understand the data you entered. In the example below, we've typed March 15th. The spreadsheet did not understand that we were referring to a date, so this cell is still using the general number format.</h3>
                                                        <img alt="img" src="assets/img/Excel/155.png" />
                                                        <h3>On the other hand, if we type March 15 (without the "th"), the spreadsheet will recognize it as a date. Because it doesn't include a year, the spreadsheet will automatically add the current year so the date will have all of the necessary information. We could also type the date several other ways, like 3/15, 3/15/2014, or March 15 2014, and the spreadsheet would still recognize it as a date.</h3>
                                                        <h2>Other date formatting options</h2>
                                                        <h3>To access other date formatting options, select the Number Format drop-down menu and choose More Number Formats. These are options to display the date differently, such as including the day of the week or omitting the year.</h3>
                                                        <img alt="img" src="assets/img/Excel/156.png" />
                                                        <h3>The Format Cells dialog box will appear. From here, you can choose the desired date formatting option.</h3>
                                                        <img alt="img" src="assets/img/Excel/157.png" />
                                                        <h3>As you can see in the formula bar, a custom date format not only changes the actual date in our cell but also the way it's displayed.</h3>
                                                        <img alt="img" src="assets/img/Excel/158.png" />
                                                        <h1><b>Number formatting tips</b></h1>
                                                        <h3>Here are a few tips for getting the best results with number formatting:</h3>
                                                        <ul>
                                                            <li><h3> <b> Apply number formatting to an entire column: </b> If you're planning to use one column for a certain type of data, like dates or percentages, you may find it easiest to select the entire column by clicking the column letter and applying the desired number formatting. This way, any data you add to this column in the future will already have the correct number format. Note that the header row usually won't be affected by number formatting.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/159.png" />
                                                            <li><h3>  <b>Double-check your values after applying number formatting: </b> If you apply number formatting to existing data, you may have unexpected results. For example, applying percentage (%) formatting to a cell with a value of 5 will give you 500%, not 5%. In this case, you'd need to retype the values correctly in each cell.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/160.png" />
                                                            <li><h3>If you reference a cell with number formatting in a formula, the spreadsheet may automatically apply the same number formatting to the new cell. For example, if you use a value with currency formatting in a formula, the calculated value will also use the currency number format.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/161.png" />
                                                            <li><h3>If you want your data to appear exactly as entered, you'll need to use the text number format. This format is especially good for numbers you don't want to perform calculations with, like phone numbers, zip codes, or numbers that begin with 0, like 02415. For best results, you may want to apply the text number format before entering data into these cells.</h3></li>
                                                        </ul>
                                                        <h2>Increase Decimal and Decrease Decimal</h2>
                                                        <h3>The Increase Decimal and Decrease Decimal commands allow you to control how many decimal places are displayed in a cell. These commands don't change the value of the cell; instead, they display the value to a set number of decimal places.</h3>
                                                        <img alt="img" src="assets/img/Excel/162.png" />
                                                        <h3>Decreasing the decimal will display the value rounded to that decimal place, but the actual value in the cell will still be displayed in the formula bar.</h3>
                                                        <img alt="img" src="assets/img/Excel/163.png" />
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
export default E10;