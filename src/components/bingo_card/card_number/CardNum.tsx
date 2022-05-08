import React from "react";

type Props = {
  cardNum: Array<number | string>;
  numbersArr: Array<number>;
};

type Style = {
  backgroundColor: string;
  borderRadius: string;
};

const numStyle: Style = {
  backgroundColor: "gold",
  borderRadius: "20px 20px 0 0",
};

const CardNum = ({ cardNum, numbersArr }: Props) => {
  // undefinedだった場合、空の配列を返す。でないと、includes()の所でエラーになる
  if (numbersArr === undefined) numbersArr = [];
  return (
    <div>
      {cardNum.map((num: number | string, i) => (
        <p
          style={
            num === "free" || numbersArr.includes(num) ? numStyle : undefined
          }
          key={i}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default CardNum;
