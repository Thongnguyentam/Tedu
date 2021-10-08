import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function W6() {
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
                                                            <h1><b>  Using Find and Replace</b></h1>
                                                            <h3>When you're working with longer documents, it can be difficult and time consuming to locate a specific word or phrase. Word can automatically search your document using the Find feature, and it allows you to quickly change words or phrases using Replace.</h3>
                                                        </figcaption>
                                                        <img alt="img" src="assets/img/Lesson/W6.png" />
                                </figure>
                                <div class="mu-blog-description">
                                                        <h2>To find text:</h2>
                                                        <h3>In our example, we've written an academic paper and will use the Find command to locate all instances of a particular word.</h3>
                                                        <ol>
                                                            <li><h3>From the Home tab, click the Find command. You can also press Ctrl+F on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Word/101.png" />
                                                            <li><h3>The navigation pane will appear on the left side of the screen.</h3></li>
                                                            <li><h3>Type the text you want to find in the field at the top of the navigation pane. In our example, we'll type the word we're looking for.</h3></li>
                                                            <img alt="img" src="assets/img/Word/102.png" />
                                                            <li><h3>If the text is found in the document, it will be highlighted in yellow and a preview of the results will appear in the navigation pane. You can also click one of the results below the arrows to jump to it.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/103.png" />
                                                            <li><h3>When you're finished, click X to close the navigation pane. The highlight will disappear.</h3></li>
                                                            <img alt="img" src="assets/img/Word/104.png" />
                                                        </ol>
                                                        <ul>
                                                            <li><h3>For more search options, click the drop-down arrow next to the search field.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/105.png" />
                                                        </ul>
                                                        <h2>To replace text:</h2>
                                                        <h3>You may discover that you've made a mistake repeatedly throughout your document, like misspelling someone's name, or that you need to exchange a particular word or phrase for another. You can use Word's Find and Replace feature to quickly make revisions. In our example, we'll use Find and Replace to change the title of a magazine so it is abbreviated.</h3>
                                                        <ol>
                                                            <li><h3> From the Home tab, click the Replace command. You can also press Ctrl+H on your keyboard.</h3></li>
                                                            <img alt="img" src="assets/img/Word/106.png" />
                                                            <li><h3>The Find and Replace dialog box will appear. </h3></li>
                                                            <li><h3> Type the text you want to find in the Find what: field.</h3></li>
                                                            <li><h3>Type the text you want to replace it with in the Replace with: field, then click Find Next. </h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/107.png" />
                                                            <li><h3>Word will find the first instance of the text and highlight it in gray.</h3></li>
                                                            <li><h3>Review the text to make sure you want to replace it. In our example, the text is part of the title of the paper and does not need to be replaced. We'll click Find Next again to jump to the next instance.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/108.png" />
                                                            <li><h3>If you want to replace it, you can click Replace to change individual instances of text. You can also click Replace All to replace every instance of the text throughout the document.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/109.png" />
                                                            <li><h3>The text will be replaced.</h3></li>
                                                            <img alt="img" width="600" src="assets/img/Word/110.png" />
                                                            <li><h3>When you're done, click Close or Cancel to close the dialog box.</h3></li>
                                                        </ol>
                                                        <ul>
                                                            <li><h3>For additional search options, click More in the Find and Replace dialog box. From here, you can select additional options, like matching case and ignoring punctuation.</h3></li>
                                                            <img alt="img" width = "600" src="assets/img/Word/111.png" />
                                                        </ul>
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
export default W6;