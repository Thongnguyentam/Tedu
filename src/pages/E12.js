import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E12() {
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
                                                            <h1><b>Using Find & Replace</b></h1>
                                                            <h3>When working with a lot of data in Excel, it can be difficult and time consuming to locate specific information. You can easily search your workbook using the Find feature, which also allows you to modify content using the Replace feature.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E12.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>To find cell content:</h2>
                                                        <h3>In our example, we'll use the Find command to locate a specific department in this list.</h3>
                                                        <ol>
                                                            <li><h3>From the Home tab, click the Find and Select command, then select Find from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/186.png" />
                                                            <li><h3>The Find and Replace dialog box will appear. Enter the content you want to find. In our example, we'll type the department's name.</h3></li>
                                                           
                                                            <li><h3>Click Find Next. If the content is found, the cell containing that content will be selected.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Excel/187.png" />
                                                            <li><h3>Click Find Next to find more instances or Find All to see every instance of the search term.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Excel/188.png" />
                                                            <li><h3>When you are finished, click Close to exit the Find and Replace dialog box.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Excel/189.png" />
                                                        </ol>
                                                        <ul>
                                                            <li><h3>You can also access the Find command by pressing Ctrl+F on your keyboard.</h3></li>
                                                            <li><h3>Click Options to see advanced search criteria in the Find and Replace dialog box.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Excel/190.png" />
                                                        </ul>
                                                        <h2>To replace cell content:</h2>
                                                        <h3>At times, you may discover that you've repeatedly made a mistake throughout your workbook (like misspelling someone's name) or that you need to exchange a particular word or phrase for another. You can use Excel's Find and Replace feature to make quick revisions. In our example, we'll use Find and Replace to correct a list of department names.</h3>
                                                        <ol>
                                                            <li><h3>From the Home tab, click the Find & Select command, then select Replace... from the drop-down menu.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/191.png" />
                                                            <li><h3>The Find and Replace dialog box will appear. Type the text you want to find in the Find what: field.</h3></li>
                                                            <li><h3>Type the text you want to replace it with in the Replace with: field, then click Find Next.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/192.png" />
                                                            <li><h3>If the content is found, the cell containing this content will be selected.</h3></li>
                                                            <li><h3>Review the text to make sure you want to replace it.</h3></li>
                                                            <li><h3>If you want to replace it, select one of the replace options. Choosing Replace will replace individual instances, while Replace All will replace every instance of the text throughout the workbook. In our example, we'll choose this option to save time.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/193.png" />
                                                            <li><h3>A dialog box will appear, confirming the number of replacements made. Click OK to continue.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/194.png" />
                                                            <li><h3>The selected cell content will be replaced.</h3></li>
                                                            <img alt="img" width="700" src="assets/img/Excel/195.png" />
                                                            <li><h3>When you're finished, click Close to exit the Find and Replace dialog box.</h3></li>
                                                            <img alt="img" width = "700" src="assets/img/Excel/196.png" />
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
export default E12;