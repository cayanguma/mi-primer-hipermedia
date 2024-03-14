import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1> Mi primerapagina web hipermedia</h1>
<h2>Imagen</h2>
    <img src='https://i.stack.imgur.com/ScRR6m.jpg'></img>
<h3>  esta es la representación grafic de mi con esto </h3>  
<h2> Audio </h2>
<audio controls=""> <source src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3" type="audio/mpeg">Tu navegador no soporta la etiqueta de audio.</audio>
<h2> video </h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2yJgwwDcgV8" frameborder="0" allowfullscreen></iframe>
  

    </div>
  );
}

export default App;
