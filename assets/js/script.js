const flexCard = document.getElementById("flex-card")

fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5')

  .then((data) => {
    // console.log(data);

    return data.json();
  })
  .then((collectData) => {
    // console.log(collectData.items);


    let data2 = collectData.items.slice(0,8);

    for (let i = 0; i < data2.length; i++) {
      let div = document.createElement("div");
      div.className = "card";
      let c = `
  
    
                        <img class="bookstore-logo" src="${data2[i].volumeInfo.imageLinks.thumbnail }" alt="Bookstore-logo" />
                        <div class="card-items">
                            <h4> ${data2[i].volumeInfo.title}</h4>
                            <h6> ${data2[i].volumeInfo.authors[0]}</h6>
                            <h6> Pages: ${data2[i].volumeInfo.pageCount}</h6>
                            <p>${data2[i].volumeInfo.description.substr(0,140 )}</p>
                            
                        </div>`;
        div.innerHTML = c;
        div.addEventListener("click", () => {
            console.log("card " + i);
        });
            
       flexCard.append(div);
       
    };
        
  })

