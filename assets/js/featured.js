// FeaturedBlock is assigned the returned value  of the element Id whose property matches featured
const featuredBlock = document.getElementById('featured');

// The fetch API requests the google API for resources and loads it dynamicaly on the webpage, this will return promise.
// promise here will be either fullfilled or rejected

fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')
  .then((data) => {
    return data.json();
  })
  .then((collectData) => {
    // Slice method returns the last two books from the 10 books in google API books
    let data2 = collectData.items.slice(8, 10);
    for (let i = 0; i < data2.length; i++) {
      //  created a div element(div) and assigned a dynamic class (featured)  
      let div = document.createElement('div');
      div.className = 'featured';
      let content = `
                              <div class="featured-card-items card-items">
                              <h4>${data2[i].volumeInfo.title} </h4>
                              <h5>${data2[i].volumeInfo.authors[0]} </h5>
                              <h6> Pages: ${data2[i].volumeInfo.pageCount}</h6>
                              <p>${data2[i].volumeInfo.description.substr(0,140)}</p>
                              <img class="bookstore-logo" src="${data2[i].volumeInfo.imageLinks.thumbnail}" alt="Bookstore-logo" />
                              </div>
                            
                        </div>`;
      div.innerHTML = content;
      // div was appended to the featuredBlock Id
      featuredBlock.append(div);
    }
    // retrieve selectedItems  if it exists. If it doesn't create an empty array
    let selectedItems =JSON.parse(localStorage.getItem('featuredSelectedItem')) || [];

    // FeaturedBooks is assigned the returned value  of the element classname whose property matches string(featured)
    let featuredBooks = document.getElementsByClassName('featured');

    for (let i = 0; i < featuredBooks.length; i++) {
      // after reload if  local Storage includes variable i the function adds class is-selected to the selected item fom the array

      if (selectedItems.includes(i)) {
        featuredBooks[i].classList.add('is-selected');
      }

      featuredBooks[i].addEventListener('click', () => {
        const classes = featuredBooks[i].classList;

        console.log(selectedItems.includes(i));

        // onclick, if featuredBook class contains class is-selected,  is-selected is removed from the selectedItem and  the local storage

        if (classes.contains('is-selected')) {
          featuredBooks[i].classList.remove('is-selected');
          selectedItems = selectedItems.filter((item) => item !== i);

          // if the above is false, a class is-slected is added  and selectedItem added to array local storage
        } else {
          featuredBooks[i].classList.add('is-selected');
          selectedItems.push(i);
        }
        //  updates selectedItems in local storage array as json
        localStorage.setItem('featuredSelectedItem', JSON.stringify(selectedItems));
      });
    }
  });
