import React from 'react';
import listSvg from "./assets/";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <button>Hello</button>
      </div>
      <div className="todo__content">
        <ul className="todo__list">
          <li>
            <i>
              <img src={listSvg} alt="List icon"/>
            </i>
            <span>Tasks</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;
