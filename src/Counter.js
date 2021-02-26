import React from "react";

const Counter = ({ startingNum = 0 }) => {
  const [num, setNum] = React.useState(startingNum);
  return (
    <div>
      <span style={{ paddingRight: 10 }} data-testid="number">
        {num}
      </span>
      <button
        onClick={() => {
          if (num < 5) {
            setNum((num) => num + 1);
          }
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
