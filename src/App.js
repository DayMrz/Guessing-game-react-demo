import './App.css';
import './style.css';
import './App/Easy-game'

function App() {
  return (
      <section id="container">
          <h1>Guess the Random Number</h1>
          <h2>Select difficulty: </h2>
          <a type='button' href="Easy-game.js" class=" easy"> Easy: 10 attemps </a>
          <a type='button' href="hard.html" class="hard"> Hard: 5 attemps </a>
      </section>
  );
}

export default App;
