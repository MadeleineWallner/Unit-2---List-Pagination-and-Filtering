
//variables, one to store the list of students and one to store the maximum number of students per page
const students = document.getElementsByClassName('student-item cf');
const studentsPerPage = 10; 


//creating the search bar and search button
let pageHeader = document.getElementsByClassName('page-header cf')[0];
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
pageHeader.appendChild(searchDiv);
const searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.placeholder = 'Search for students...';
searchDiv.appendChild(searchBar);
const button = document.createElement('button');
button.textContent = 'Search';
searchDiv.appendChild(button);

//creating the No-results message
const noMatches = document.createElement('p');
noMatches.innerHTML = 'No results';
const studentsUL = document.getElementsByClassName('student-list')[0];
studentsUL.appendChild(noMatches);


//function to filter out which students to show and which to hide
const searchFunction = (names, input) => { 
   let matches = [];
   let paginationLinks = document.getElementsByClassName('pagination')[0];
   if (paginationLinks){
      paginationLinks.remove();
   }
  for (let i = 0; i < names.length; i++){
   names[i].style.display = 'none';
   if (names[i].textContent.toLowerCase().includes(input.value.toLowerCase())){
      matches.push(names[i]);
   } 
  }
  showPage(matches, 1);
  pageLinks(matches)
  
    //if there's no matches, print out 'No results'
    if (matches.length === 0){
      noMatches.style.display = '';
   } else {
      noMatches.style.display = 'none';
   }
};


//keyup eventlistener to show results while the user is typing
searchBar.addEventListener('keyup', (e) => {
   searchFunction(students, searchBar);
});

//click eventlistener to show search results when the user clicks the search button
button.addEventListener('click', (e) => {
   e.preventDefault();
   searchFunction(students, searchBar);
});



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



//Function that calculates how many pages are needed. 
//Creating the pagination div and giving it the class name 'pagination', appending it to the div with the 'page' class name
//Creating the ul element and appending it to the pagination Div 

const pageLinks = (list) => {
   let studentCount = list.length;
   const pages = Math.ceil(studentCount/studentsPerPage);
   const paginationDIV = document.createElement('div');
   paginationDIV.className = 'pagination';
   let page = document.getElementsByClassName('page')[0];
   page.appendChild(paginationDIV);
   let ul = document.createElement('ul');
   paginationDIV.appendChild(ul);


//creating the buttons and giving each button a page number. Highlight the button for page 1 by giving it the 'active'-class
for (let i = 1; i <= pages; i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      const button = document.createElement('a');
      li.appendChild(button);
      button.innerHTML = i;
      button.href = '#';
      
      const firstPage = document.getElementsByTagName('a');
      firstPage[0].className = 'active';

      
//giving the buttons functions. The button being clicked is highlighted and shows the associated page.
      ul.addEventListener('click', (e) => {
         for (let j = 0; j <= pages; j++){
            button.classList.remove('active');
      }  
      e.target.classList.add('active');
      showPage(students, e.target.innerHTML);    
      });    
   }
}

//calling the functions
   showPage(students, 1);
   pageLinks(students);

