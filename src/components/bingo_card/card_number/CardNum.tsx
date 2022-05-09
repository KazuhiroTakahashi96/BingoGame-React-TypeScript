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
  // const func = (num: number):boolean => {
  //   if (typeof num === "number") {
  //     if (numbersArr.includes(num)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div>
      {cardNum.map((num, i) => (
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
