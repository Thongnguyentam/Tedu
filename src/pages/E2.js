import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function E1() {
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
                                                            <h1><b>Creating and Opening Workbooks</b></h1>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/E2.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>About OneDrive</h2>
                                                        <h3>Whenever you're opening or saving a workbook, you'll have the option of using your OneDrive, which is the online file storage service included with your Microsoft account. To enable this option, you'll need to sign in to Office. To learn more, visit our lesson on Understanding OneDrive.</h3>
                                                        <img alt="img" src="assets/img/Excel/21.png" />
                                                        <h2>To create a new blank workbook:</h2>
                                                        <ol>
                                                            <li><h3>Select the File tab. Backstage view will appear.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/22.png" />
                                                            <li><h3>Select New, then click Blank workbook.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/23.png" />
                                                            <li><h3>A new blank workbook will appear.</h3></li>
                                                        </ol>
                                                        <h2>To open an existing workbook:</h2>
                                                        <h3>In addition to creating new workbooks, you'll often need to open a workbook that was previously saved. </h3>
                                                        <ol>
                                                            <li><h3>Navigate to Backstage view, then click Open.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/24.png" />
                                                            <li><h3>Select Computer, then click Browse. You can also choose OneDrive to open files stored on your OneDrive.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/25.png" />
                                                            <li><h3>The Open dialog box will appear. Locate and select your workbook, then click Open.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/26.png" />
                                                            <li><h3>If you've opened the desired workbook recently, you can browse your Recent Workbooks rather than search for the file.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/27.png" />
                                                        </ol>
                                                        <h2>To pin a workbook:</h2>
                                                        <h3>If you frequently work with the same workbook, you can pin it to Backstage view for faster access.</h3>
                                                        <ol>
                                                            <li><h3>Navigate to Backstage view, then click Open. Your recently edited workbooks will appear.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/28.png" />
                                                            <li><h3>Hover your mouse over the workbook you want to pin. A pushpin icon will appear next to the workbook. Click the pushpin icon.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/29.png" />
                                                            <li><h3></h3>The workbook will stay in Recent Workbooks. To unpin a workbook, simply click the pushpin icon again.</li>
                                                            <img alt="img" src="assets/img/Excel/30.png" />
                                                        </ol>
                                                        <h1><b>Using templates</b></h1>
                                                        <h3>A template is a predesigned spreadsheet you can use to create a new workbook quickly. Templates often include custom formatting and predefined formulas, so they can save you a lot of time and effort when starting a new project.</h3>
                                                        <h2>To create a new workbook from a template:</h2>
                                                        <ol>
                                                            <li><h3>Click the File tab to access Backstage view.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/31.png" />
                                                            <li><h3>Select New. Several templates will appear below the Blank workbook option.</h3></li>
                                                            
                                                            <li><h3>Select a template to review it.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/32.png" />
                                                            <li><h3>A preview of the template will appear, along with additional information on how the template can be used.</h3></li>
                                                            
                                                            <li><h3>Click Create to use the selected template.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/33.png" />
                                                            <li><h3>A new workbook will appear with the selected template.</h3></li>
                                                            <li><h3>You can also browse templates by category or use the search bar to find something more specific.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/34.png" />
                                                        </ol>
                                                        <h1><b>Compatibility Mode</b></h1>
                                                        <h3>Sometimes you may need to work with workbooks that were created in earlier versions of Microsoft Excel, like Excel 2010 or Excel 2007. When you open these types of workbooks, they will appear in Compatibility Mode.</h3>
                                                        <h3>Compatibility Mode disables certain features, so you'll only be able to access commands found in the program that was used to create the workbook. For example, if you open a workbook created in Excel 2003, you can only use tabs and commands found in Excel 2003.</h3>
                                                        <h3>In the image below, you can see that the workbook is in Compatibility Mode, which is indicated at the top of the window to the right of the file name. This will disable some Excel features, which will be grayed out on the Ribbon.</h3>
                                                        <img alt="img" src="assets/img/Excel/35.png" />
                                                        <h3>To exit Compatibility Mode, you'll need to convert the workbook to the current version type. However, if you're collaborating with others who only have access to an earlier version of Excel, it's best to leave the workbook in Compatibility Mode so the format will not change.</h3>
                                                        <h2>To convert a workbook:</h2>
                                                        <h3>If you want access to the newer features, you can convert the spreadsheet to the current file format.</h3>
                                                        <ol>
                                                            <li><h3>Click the File tab to access Backstage view.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/36.png" />
                                                            <li><h3>Locate and select the Convert command.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/37.png" />
                                                            <li><h3>The Save As dialog box will appear. Select the location where you want to save the workbook, enter a file name for the workbook, and click Save.</h3></li>
                                                            <img alt="img" src="assets/img/Excel/38.png" />
                                                            <li><h3>The workbook will be converted to the newest file type.</h3></li>
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
export default E1;