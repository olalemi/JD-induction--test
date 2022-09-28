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



    
    let selectedItems = JSON.parse(localStorage.getItem("featuredSelectedItem")) || [];

    //   console.log(selectedItems)
    
      setTimeout(() => {
        
        selectedItems.forEach((selectedItem) => {
            document.getElementById(`${selectedItem}`).classList.add("is-selected");
        });
    }, 500);
    
            let fbookss = document.getElementsByClassName("featured");
                for (let i = 0; i < fbookss.length; i++) {
                    fbookss[i].addEventListener("click", () => {
                        const classes = fbookss[i].classList;
                        if (classes.contains("is-selected")) {
                            /* If fbookss is selected through the class, then remove the is-selected class and also remove from localstorage */
                            fbookss[i].classList.remove("is-selected");
                            // remove the selected item from the array
                            selectedItems = selectedItems.filter((item) => item !== fbookss[i].id);
                        } else {
                            /* This Stores the selected book's ID into localstorage via is-selected class */
                            fbookss[i].classList.add("is-selected");
                            // add the selected item to the array
                            selectedItems.push(fbookss[i].id);
                        }
                        // store the updated selectedItems array in localStorage as json
                        localStorage.setItem("featuredSelectedItem", JSON.stringify(selectedItems));
                    });
                }
          
              
              

  });

