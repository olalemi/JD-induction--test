const featuredBlock = document.getElementById("featured")

fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')

  .then((data) => {
    // console.log(data); 

    return data.json();
  })
  .then((collectData) => {
    // console.log(collectData.items);


    let data2 = collectData.items.slice(8,10);

    for (let i = 0; i < data2.length; i++) {
      // let featured = document.createElement("featured");
      let div = document.createElement("div");
      div.className = "featured";
      let c = `
  
                            
                              <div class="featured-card-items card-items">
                              <h4>${data2[i].volumeInfo.title} </h4>
                              <h5>${data2[i].volumeInfo.authors[0]} </h5>
                              <h6> Pages: ${data2[i].volumeInfo.pageCount}</h6>
                              <p>${data2[i].volumeInfo.description.substr(0,140 )}</p>
                              <img class="bookstore-logo" src="${data2[i].volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />
                              </div>
                            
                        </div>`;
        div.innerHTML = c;
        // featured.append(div) ;
        div.addEventListener("click", () => {
            console.log("featured " + i);
        });
            
       featuredBlock.append(div);
       
    };


  })

