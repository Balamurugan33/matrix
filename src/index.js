import { useState } from "react";
import "./styles.css";

export default function App() {
  const datas = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [30, 31, 32, 33],
    [40, 41, 42, 43]
  ];
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedPreBox, setSelectedPreBox] = useState(null);
  const handleClick = (value) => {
    if (selectedPreBox === null) {
      setSelectedPreBox(value);
    } else {
      setSelectedPreBox(selectedBox);
    }
    setSelectedBox(value);
  };
  return (
    <div className="App">
      {datas.map((data) => {
        return (
          <div className="row">
            {data.map((d) => {
              return (
                <button
                  onClick={() => handleClick(d)}
                  className={
                    selectedPreBox === d ? " col bg-red" : "col bg-blue"
                  }
                ></button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
