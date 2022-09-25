fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')

  .then((data) => {
    // console.log(data);

    return data.json();
  })
  .then((collectData) => {
    console.log(collectData.items);


  let populate_books2 = '';

  let data3 = collectData.items.slice(8,10);

  data3.map((values) => {
    populate_books2 += ` 
   
    <div class="featured">

                         
                        
                        <div class="featured-card-items card-items">

                        <h4>${values.volumeInfo.title} </h4>
                        <h5>${values.volumeInfo.authors[0]} </h5>
                        <h6> Pages :${values.volumeInfo.pageCount}</h6>
                        <p>${values.volumeInfo.description.substr(0,140 )}</p>
                        <img class="bookstore-logo" src="${values.volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />

                        </div>

                   

                </div>`;
  });

  document.getElementById('featured').innerHTML = populate_books2;
  

  });


  
 






