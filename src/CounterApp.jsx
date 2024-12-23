import React, { useState } from "react";

function Counter() {
  const audio = new Audio("./sound.mp3");
  const [number, setNumber] = useState(0);

  const playAudio = () => {
    audio.play();
  };

  const setTarget = () => {
    const targetValue = parseInt(document.getElementById("target").value);
    if (!isNaN(targetValue)) {
      localStorage.setItem("target", targetValue);
      alert(`You have targeted the number: ${targetValue}`);
    } else {
      alert("Please enter a valid number");
    }
  };

  const checker = () => {
    const target = parseInt(localStorage.getItem("target"));
    if (number >= target) {
      alert("You have reached the target!");
      localStorage.removeItem("target");
    }
  };

  const numberUp = () => {
    playAudio();
    setNumber((prevNumber) => {
      const newNumber = prevNumber + 1;
      checker(newNumber);
      return newNumber;
    });
  };

  const numberDown = () => {
    playAudio();

    if (number > 0) {
      setNumber((prevNumber) => {
        const newNumber = prevNumber - 1;
        checker(newNumber);
        return newNumber;
      });
    } else {
      alert("Your number is already 0");
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="wrapper">
      <div className="topPart">
        <div className="left">
          <input id="target" type="text" placeholder="Input your target" />
        </div>
        <div className="right">
          <button className="target" onClick={setTarget}>
            Set target
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className="content">
        <button className="minus" onClick={numberDown}>
          -
        </button>
        <div className="numberContainer">
          <p className="number">{number}</p>
        </div>
        <button className="plus" onClick={numberUp}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
