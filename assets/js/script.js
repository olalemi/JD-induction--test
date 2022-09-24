

 fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")

.then((data) => {
    console.log(data);

    return data.json();

}).then((collectData) => {

   console.log(collectData.items[2].kind);
   document.getElementById('featured').
   innerHTML = collectData.items[2].kind;
   

})



