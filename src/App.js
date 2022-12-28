import HelloWorld from './components/HelloWorld';
import SayMyName from './components/props/SayMyName'
import Item from './components/props/Item'

import './App.css';
import Form from './components/Form';

function App() {

  const name = "Matheus"

  function sum(a, b) {
    return a + b
  }

  const url = "https:/via.placeholder.com/150";

  return (
    <div className="App">
      <p>Testando o JSX</p>
      <p>Olá { name }</p>
      <p>A soma é {sum(1,2)}</p>
      <img src={ url } alt="Minha imagem"></img>
      <HelloWorld />
      <SayMyName nome="Joao" />
      <SayMyName nome="Francisco" />
      <SayMyName nome="Matheus" />
      <Item marca="Nike" />
      <Form />
    </div>
  );
}

export default App;
