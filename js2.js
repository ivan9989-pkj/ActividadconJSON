const header= document.querySelector('header');
const section= document.querySelector('section');



const requestURL = 'jso.json';

const request =new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType= 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }
  
  function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Usuario'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Lugar: ' + jsonObj['Lugar'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

function showHeroes(jsonObj) {
    const heroes = jsonObj['clientes'];
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].nameandapellidos;
      myPara1.textContent = 'correo: ' + heroes[i].correo;
      myPara2.textContent = 'DNI: ' + heroes[i].dni;
      myPara3.textContent = 'Dirección:'+heroes[i].direccion;
  
      
     
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }



