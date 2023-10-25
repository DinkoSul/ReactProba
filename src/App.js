import "./App.css";
import randomstring from "randomstring";
import person from "./Person";
import { num1, num2 } from "./Utility";
// import { sum as zbroj } from "./Utility";
import * as Math from "./Utility";
// import Komponenta1 from "./Components/Komponenta1";
// import Komponenta2 from "./Components/Komponenta2";
// import Komponenta3 from "./Components/Komponenta3";
import { Komponenta1, Komponenta2, Komponenta3 } from "./Components";

function App() {
  var x = 2;
  return (
    <div className="App">
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <h1>Bok {person.name}</h1>
      <p>Prvi broj: {num1 + x}</p>
      <p>Drugi broj: {num2}</p>
      {/* <p>
        Zbroj {num1} i {num2} je {zbroj(num1, num2)}
      </p> */}
      <hr></hr>
      <p>Zbroj brojeva je: {Math.sum(Math.num1, Math.num2)}</p>
      <hr></hr>
      <p>
        Random riječi:
        {randomstring.generate({
          length: 12,
          charset: "alphabetic",
        })}
      </p>
    </div>
  );
}

export default App;

// 1.	Napraviti novu React aplikaciju
// 2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
// 3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
// 4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
// 5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom
// 6. instalirati loadash pa se poigrati sa stringom
