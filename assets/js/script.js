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


    let selectedItems = JSON.parse(localStorage.getItem("cardSelectedItem")) || [];

    //   console.log(selectedItems)
    
      setTimeout(() => {
        
        selectedItems.forEach((selectedItem) => {
            document.getElementById(`${selectedItem}`).classList.add("is-selected");
        });
    }, 500);
    
            let fBooks = document.getElementsByClassName("card");
            
                for (let i = 0; i < fBooks.length; i++) {
                    fBooks[i].addEventListener("click", () => {
                        const classes = fBooks[i].classList;
                        if (classes.contains("is-selected")) {
                            /* If fbooks is selected through the class, then remove the is-selected class and also remove from localstorage */
                            fBooks[i].classList.remove("is-selected");
                            // remove the selected item from the array
                            selectedItems = selectedItems.filter((item) => item !== fBooks[i].id);
                        } else {
                            /* This Stores the selected book's ID into localstorage via is-selected class */
                            fBooks[i].classList.add("is-selected");
                            // add the selected item to the array
                            selectedItems.push(fBooks[i].id);
                        }
                        // store the updated selectedItems array in localStorage as json
                        localStorage.setItem("cardSelectedItem", JSON.stringify(selectedItems));
                    });
                }
          
               
                 
  });


        