fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')

  .then((data) => {
    // console.log(data);

    return data.json();
  })
  .then((collectData) => {
    console.log(collectData.items);

       document.getElementById('featured').
       innerHTML = collectData.items[2].kind;

    let populate_books = '';

    let data2 = collectData.items.slice(0,8);

    data2.map((values) => {
      populate_books += `  
      <div class="card" >
    
                        <img class="bookstore-logo" src="${values.volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />
                        <div class="card-items">
                            <h4> ${values.volumeInfo.title}</h4>
                            <h6> ${values.volumeInfo.authors[0]}</h6>
                            <h6> Pages :${values.volumeInfo.pageCount}</h6>
                            <p>${values.volumeInfo.description.substr(0,140 )}</p>
                            
                        </div>

            </div> `;
    });

    document.getElementById('flex-card').innerHTML = populate_books;
  });


  
  let populate_books2 = '';

  let data3 = collectData.items.slice(8,10);

  data3.map((values) => {
    populate_books2 += `  
    <div class="featured">

                    <h4>${values.volumeInfo.title} </h4>
                    <h5>${values.volumeInfo.authors[0]} </h5>
                    <h6> Pages :${values.volumeInfo.pageCount}</h6>
                    <p>${values.volumeInfo.description.substr(0,140 )}</p>
                    <img class="bookstore-logo" src="${values.volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />



                </div>`;
  });

  document.getElementById('featured').innerHTML = populate_books2;
  