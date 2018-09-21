$(document).ready(function(){
    $("#heart").on("click", function() {

        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pug&limit=1";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
  
          // assign a variable to store the image URL found in the object path of the response
            var imageUrl = response.data.image_original_url;
  
            // assign variable an empty <img> element made with jquery
            var pugImage = $("<img>");
  
            //add the imageURL variable as the value for the src attribute, and the string 'cat image' to the alt attribute
            pugImage.attr("src", imageUrl);
  
            //add the finished catImage element to the front(prepend) of the #images id div
            $("#pugs").prepend(pugImage);
          });
        })
})