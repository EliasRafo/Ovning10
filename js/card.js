const drawcard = document.getElementById('draw-card');
const card = document.getElementById('card');

const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

drawcard.addEventListener('click', getApi);

function getApi(){
 
   fetch(url)
   .then(res => res.json())
   .then(data =>
   {
      console.log(data);
      var result = data.cards[0];

      let dynamicImage = document.createElement('img');
      dynamicImage.setAttribute('src', result.image);
      
      card.innerHTML ="";
      card.appendChild(dynamicImage);
   })
   .catch(err => console.log(err))
}