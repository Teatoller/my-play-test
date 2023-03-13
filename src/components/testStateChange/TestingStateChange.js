import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Oliver",
  },
  {
    id: 2,
    name: "Sang",
  },
  {
    id: 3,
    name: "Kibet",
  },
];

export default function TestingStateChange() {
  const [loaded, setLoaded] = useState(false);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [elements, setElements] = useState(data);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded && <h3>Page Loaded</h3>}
      {toggleTextVisible && <p> Text visible </p>}

      <h3> List </h3>
      {elements.map((item) => (
        <div key={item.id} data-testid="record">
          {item.id}: {item.name}
        </div>
      ))}
      <button
        onClick={() => {
          setElements([
            ...elements,
            {
              id: 4,
              name: "Omuga",
            },
          ]);
        }}
      >
        {" "}
        Add to list{" "}
      </button>

      <button
        onClick={() => {
          setElements(elements.filter((item) => item.id != 2));
        }}
      >
        {" "}
        Remove from list{" "}
      </button>

      <button
        disabled={btnDisabled}
        onClick={() => {
          setToggleTextVisible(!toggleTextVisible);
        }}
      >
        {" "}
        Toggle text{" "}
      </button>

      <button
        onClick={() => {
          setBtnDisabled(!btnDisabled);
        }}
      >
        Toggle button disabled
      </button>
    </div>
  );
}
