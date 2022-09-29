# JD-induction--test

  A webpage that populates HTML 5 books using Google Books API 
  
  
 ## All Requirements met
  
• Each book in the list  displays the book cover, title, subtitle, all authors, number of pages and description.</br>
• You can select on a book anywhere on the page by clicking on them, it is  clear the user has made a selection with a blue highlight , and a class of  add a class of is-selected was dynamically added.</br>
• You can to click on a selected book a second time to remove the class.</br>
• Reloading the page should remember the state of the selected books.</br>
• The last two books are chosen from the JSON array and displayed  in the 'Featured' books column only.</br>
• The book description is a maximum of 140 characters</br>
• No use of any CSS frameworks </br>
• Cross-browser compatible </br>
  &nbsp;&nbsp;&nbsp;&nbsp; - Tested on Mozilla firefox</br>
  &nbsp;&nbsp;&nbsp;&nbsp; - Tested on Safari</br>
  &nbsp;&nbsp;&nbsp;&nbsp; - Tested on Chrome</br>
  &nbsp;&nbsp;&nbsp;&nbsp; - Tested on Microsoft Edge  
•  CSS was used to display the mobile burger menu</br>
•  The task was pushed  to my github repo and commit history was documented.</br>

 ## Issue Faced amd how it was resolved
  
• I had included the card and  Div directly into variable called content. it was not giving the required output onclick</br>
 &nbsp;&nbsp;&nbsp;&nbsp; - it was resolved by creatng the div and class dynamically </br>
 

• On reload of the page, the local storage keeps the previous stage but the states were not reflective on the cards</br>
 &nbsp;&nbsp;&nbsp;&nbsp; - The function I initially wrote for when the site reloads was in a block for the condtions to be executed after clicking , giving
  the if statemet a seperate block resolved the problems</br>


  
##  Built with
 
• HTML</br>
• CSS</br>
• Vanilla Javascript</br>
 
