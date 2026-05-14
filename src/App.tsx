import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const sound = new Audio("/click.mp3");

  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const max = 100;

  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function increase() {
    if (count < max) {
      setCount(count + 1);
    }
  }
  <button
onClick={() => {
sound.play();
setCount(count + 1);
}}

> 

Increase
</button>

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  <button
  onClick={() => {
    sound.play();
    setCount(count - 1);
  }}
>
  Decrease
</button>

  function reset() {
    setCount(0);
  }

  function changeTheme() {

    if (theme === "dark") {
      setTheme("purple");
    }

    else if (theme === "purple") {
      setTheme("neon");
    }

    else {
      setTheme("dark");
    }
  }

  const progress = (count / max) * 360;

  return (

    <div className={`container ${theme}`}>

      <div className="particles"></div>

      <div className="card">

        <h1>✨ Counter App ✨</h1>

        <div
          className="circle"
          style={{
            background: `conic-gradient(
              #38bdf8 ${progress}deg,
              rgba(255,255,255,0.1) ${progress}deg
            )`
          }}
        >

          <div className="inner-circle">
            {count}
          </div>

        </div>

        {count === 100 && (
          <h2 className="celebrate">
            🎉 Maximum Reached 🎉
          </h2>
        )}

        <div className="buttons">

          <button className="green" onClick={increase}>
            +1
          </button>

          <button className="red" onClick={decrease}>
            -1
          </button>

          <button className="yellow" onClick={reset}>
            Reset
          </button>

        </div>

        <button className="theme-btn" onClick={changeTheme}>
          🎨 Change Theme
        </button>

      </div>

    </div>
  );
}

export default App;