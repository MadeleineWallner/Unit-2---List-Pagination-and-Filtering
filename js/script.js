/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/


//global variables, one to store the list of students and one to store the maximum number of students per page
const students = document.getElementsByClassName('student-item cf');
const studentsPerPage = 10; 
console.log(students);



// function to show no more than 10 students per page and hide the rest. 
 
 
const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex =  page * studentsPerPage;
   
for (let i = 0; i < list.length; i++){
  if (i >= startIndex && i < endIndex){
  list[i].style.display = 'block'; 
} else {
   list[i].style.display = 'none';
      }   
   }
};



//creating the buttons and giving them a function. 
//Calculating how many pages are needed by dividing the number of students by the maximum number of students per page.

const appendPageLinks = (list) => {
const pages = Math.ceil(students.length/studentsPerPage);
const paginationDIV = document.createElement('div');
paginationDIV.className = 'pagination';
let page = document.querySelector('.page');
page.appendChild(paginationDIV);
let ul = document.createElement('ul');
paginationDIV.appendChild(ul);

//creating the buttons and giving each button a page number. Highlight the button for page 1 by giving it the 'active'-class

for (let i = 1; i <= pages; i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      const button = document.createElement('a');
      button.innerHTML = i;
      button.href = '#';
      li.appendChild(button);

      const firstPage = document.querySelectorAll('a');
      firstPage[0].className = 'active';
      
//giving the buttons functions. The button being clicked is highlighted and shows the associated page.

      button.addEventListener('click', (e) => {
         for (let j = 0; j <= pages.length; j++){
            const fjkd = document.getElementsByTagName('a');
            fjkd[j].classList.remove = 'active';
      }  
      e.target.classList.add('active');
      showPage(students, e.target.innerHTML);    
      });    
   }
}


//calling the 2 functions
showPage(students, 1);
appendPageLinks(students);

// Remember to delete the comments that came with this file, and replace them with your own code comments.

