fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')

  .then((data) => {
    // console.log(data);

    return data.json();
  })
  .then((collectData) => {
    console.log(collectData.items);


    let populate_books = '';

    let data2 = collectData.items.slice(0,8);

    data2.map((values) => {
      populate_books += `

      <div class="card" >
    
                        <img class="bookstore-logo" src="${values.volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />
                        <div class="card-items">
                            <h4> ${values.volumeInfo.title}</h4>
                            <h6> ${values.volumeInfo.authors[0]}</h6>
                            <h6> Pages: ${values.volumeInfo.pageCount}</h6>
                            <p>${values.volumeInfo.description.substr(0,140 )}</p>
                            
                        </div>

            </div>`;
    });

    document.getElementById('flex-card').innerHTML = populate_books;

  });


  const selectCard =document.getElementsByClassName("card")

  Array.prototype.forEach.call(selectCard, function(tips) {
    tips.addEventListener('click', () => {
    // Do stuff here
    console.log("yes");


  });

  });






