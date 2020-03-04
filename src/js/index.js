/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let pronoun = ["I", "We", "They", "Me", "You"];
  let adjective = ["small", "large", "round", "wealthy", "slow"];
  let noun = ["student", "teacher", "minister", "businessperson", "salesclerk"];
  let arrayResult = "";
  for (let i of pronoun) {
    for (let j of adjective) {
      for (let z of noun) {
        arrayResult += "www." + i + j + z + ".com<br>";
      }
    }
  }

  document.getElementById("result").innerHTML = arrayResult;
};
