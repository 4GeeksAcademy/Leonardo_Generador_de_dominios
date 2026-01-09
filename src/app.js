import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  //write your code here   
  generadorDominio();
}

const generadorDominio = () => {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ['.com', '.es'];

  for (let i = 0; i < pronoun.length; i++) {

    for (let ia = 0; ia < adj.length; ia++) {

      for (let inon = 0; inon < noun.length; inon++) {

        for (let id = 0; id < dom.length; id++) {

          let combination = pronoun[i] + adj[ia] + noun[inon] + dom[id];
          console.log(combination)
        }
      }
    }
  }
}


