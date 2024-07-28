import { useEffect, useState } from "react";
import Board from "./components/Board";

function App() {
  const wordAllowed = ["CHAIR", "FLIES", "BREAD", "LOVED"];
  const attemptsAllowed: number = 6;
  const [inputWord, setInputWord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [target, setTarget] = useState<string>("");

  useEffect(() => {
    //Runs when mounted
    const randWord: string =
      wordAllowed[Math.floor(Math.random() * wordAllowed.length)];

    //Runs when rendered so this ensures the target is not reset
    if (target.length === 0) {
      setTarget(randWord);
    }
  }, [wordAllowed]);

  function clickHandlerNewGame() {
    setTarget(wordAllowed[Math.floor(Math.random() * wordAllowed.length)]);
    setGuesses([]);
    console.log("new", target);
  }

  return (
    <>
      <h1 className="h1">Wellcome to Wordle</h1>
      <div className="h1">
        <button type="reset" onClick={clickHandlerNewGame}>
          New Game
        </button>
        <p> </p>
      </div>

      <Board
        target={target}
        guesses={guesses}
        attemptsAllowed={attemptsAllowed}
      />
      <p className="h1">
        Guess {guesses.length} of {attemptsAllowed}
      </p>
      {guesses[guesses.length - 1] !== target &&
      guesses.length < attemptsAllowed ? (
        <div className="h1">
          <p>Please enter a {target.length}-letter word below:</p>

          <input onChange={(e) => setInputWord(e.target.value.toUpperCase())} />
          <button
            disabled={inputWord.length !== 5}
            onClick={() => setGuesses([...guesses, inputWord])}
          >
            Submit
          </button>
        </div>
      ) : (
        <h1 className="h1">
          YOU HAVE {guesses[guesses.length - 1] === target ? "WON" : "FAILED"}!
        </h1>
      )}
    </>
  );
}

export default App;