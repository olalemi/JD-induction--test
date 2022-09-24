

fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")

  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
    
  function displayCocktail(data) {
    const cocktail = data.items[0];
    const cocktailDiv = document.getElementById("cocktail");
    
  }   