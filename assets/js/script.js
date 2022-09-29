// Flexcard is assigned the returned value  of the element Id whose property matches flex card()
const flexCard = document.getElementById('flex-card');

// The fetch API requests the google API for resources and loads it dynamicaly on the webpage, this will return promise.
// promise here will be either fullfilled or rejected

fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
  .then((data) => {
    return data.json();
  })
  .then((collectData) => {
// Slice method returns the first 8books from the 10 books in google API books
    let data2 = collectData.items.slice(0, 8);
    for (let i = 0; i < data2.length; i++) {
        //  created a div element(div) and assigned a dynamic class (card)  
      let div = document.createElement('div');
      div.className = 'card';
      let content = `
                        <img class="bookstore-logo" src="${ data2[i].volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo">
                        <div class="card-items">
                            <h4> ${data2[i].volumeInfo.title}</h4>
                            <h6> ${data2[i].volumeInfo.authors[0]}</h6>
                            <h6> Pages: ${data2[i].volumeInfo.pageCount}</h6>
                            <p>${data2[i].volumeInfo.description.substr( 0,140)}</p>
                            
                        </div>`;
      div.innerHTML = content;
      // div was appended to the flexcard Id
      flexCard.append(div);
    }

    let selectedItems =JSON.parse(localStorage.getItem('cardSelectedItem')) || [];
    
 // FeaturedBooks is assigned the returned value  of the element classname whose property matches string(card)
 let cardBooks = document.getElementsByClassName('card');

 for (let i = 0; i < cardBooks.length; i++) {
   // after reload if  local Storage includes variable i the function adds class is-selected to the selected item fom the array

   if (selectedItems.includes(i)) {
     cardBooks[i].classList.add('is-selected');
   }

   cardBooks[i].addEventListener('click', () => {
     const classes = cardBooks[i].classList;

     console.log(selectedItems.includes(i));

     // onclick, if cardBooks class contains class is-selected,  is-selected is removed from the selectedItem and  the local storage

     if (classes.contains('is-selected')) {
       cardBooks[i].classList.remove('is-selected');
       selectedItems = selectedItems.filter((item) => item !== i);

       // if the above is false, a class is-slected is added  and selectedItem added to array local storage
     } else {
       cardBooks[i].classList.add('is-selected');
       selectedItems.push(i);
     }
     //  updates selectedItems in local storage array as json

     localStorage.setItem( 'cardSelectedItem', JSON.stringify(selectedItems));
   });
 }
});
