
let allQoutes = [];
async function getQoutes() {
    let respond = await fetch(`https://goquotes-api.herokuapp.com/api/v1/all/quotes`);
    let finalResult = await respond.json();
    allQoutes= finalResult.quotes
  console.log( allQoutes)
  displayQoutes()

}

function displayQoutes(){

var random = Number.parseInt(Math.random()*allQoutes.length++);
    document.querySelector('#quoteOutput').textContent = `${allQoutes[random].text}`;
    document.querySelector('#authorOutput').textContent = `${allQoutes[random].author}`; 
}
getQoutes() 