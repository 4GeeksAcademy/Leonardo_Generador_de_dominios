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
      const pronombre = pronoun[i];

      for (let ia = 0; ia < adj.length; ia++) {
        const adjetivo = adj[ia];

        for (let inon = 0; inon < noun.length; inon++) {

          const sustativo = noun[inon];

          for (let id = 0; id < dom.length; id++) {
            const dominio = dom[id];

            let combination = pronombre + adjetivo + sustativo + dominio;
            console.log(combination)
          }
        }
      }
    }
  }


