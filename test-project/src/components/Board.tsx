import ".././index.css";

interface Board {
  target: string;
  guesses: string[];
  attemptsAllowed: number;
}
interface Line {
  text: string;
  lineNum: number;
  target: string;
}

function Board({ target, guesses, attemptsAllowed }: Board) {
  const lenthOfGuesses = guesses.length;
  const lenthOftarget = target.length;
  const unknown = "?".repeat(lenthOftarget);

  return (
    <div className="board">
      {guesses.map((guess, index) => {
        return (
          <Line
            text={guess}
            lineNum={index}
            target={target}
            key={index.toString() + "-" + guess}
          />
        );
      })}
      {[...Array(attemptsAllowed - lenthOfGuesses)].map((item, index) => {
        return (
          <Line
            text={unknown}
            lineNum={index}
            target={target}
            key={index.toString() + "-" + unknown}
          />
        );
      })}
    </div>
  );
}

function Line({ text, lineNum, target }: Line) {
  const letters = text.split("");
  return (
    <div className="line">
      {letters.map((letter, letterNum) => {
        return (
          <div
            key={lineNum.toString() + "-" + letterNum.toString()}
            className={
              "box" +
              (target[letterNum] === letter
                ? " success"
                : target.includes(letter)
                ? " discovered"
                : letter === "?"
                ? ""
                : " incorrect")
            }
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}

export default Board;