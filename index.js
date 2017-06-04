//Move the buttoms around.
var count=0;
function moveButtons(button){
  var button = document.getElementById('button');
  count++
  console.log(count);
  console.log(button.innerHTML)
  if (count%4==1){
  button.innerHTML="Hit me again!"

  button.style.marginTop="100px"
    }
  if (count%4==2){
  button.innerHTML="You're so weak !"

  button.style.marginTop="200px"
    }
  if (count%4==3){
  button.innerHTML="Do you even lift?!"

  button.style.marginTop="300px"
    }
  if (count%4==0){
  button.innerHTML="Click Harder!"
button.style.marginTop="0px"
    }
}


getQuote();

function getQuote() {

fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"+ "&newkey="+Date.now()).then(function(response) {

  return response.json();
}).then(function(response) {

  var quote = response[0];
  console.log(quote.content);
  document.getElementById("quote").innerHTML = quote.content;

});
}
