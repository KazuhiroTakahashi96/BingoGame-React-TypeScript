import React from "react";

const numStyle = {
  backgroundColor: "gold",
  borderRadius: "20px 20px 0 0",
};

const CardNum = ({ cardNum, numbersArr }) => {
  // undefinedだった場合、空の配列を返す。でないと、includes()の所でエラーになる
  if (numbersArr === undefined) numbersArr = [];
  return (
    <div>
      {cardNum.map((num, i) => (
        <p
          style={num === "free" || numbersArr.includes(num) ? numStyle : null}
          key={i}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default CardNum;
