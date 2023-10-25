const search = document.getElementById('search');
const charactername = document.getElementById('character-name');
const textarea = document.getElementById('textarea');

const baseUrl = "https://www.swapi.tech/api/people/";

search.addEventListener('click', getApi);

function getApi(){
  textarea.value = "";
  if(charactername.value !="")
  {
    let url = new URL('?name=' + charactername.value, baseUrl);
    
    fetch(url)
    .then(res => res.json())
    .then(data =>
    {
        var result = data.result[0];
        if(result != null)
        {
          console.log(result);
          let s = `Name: ${result.properties.name} \nHeight: ${result.properties.height} \nMass: ${result.properties.mass} \nGender: ${result.properties.gender} \nHair color: ${result.properties.hair_color}`;
          textarea.value = s;
        }
        else
        {
          charactername.value = "";
          textarea.value = "No result found";
        }
    })
    .catch(err => console.log(err))
  }
  else
  {
    alert("You have to enter the name");
  }
}