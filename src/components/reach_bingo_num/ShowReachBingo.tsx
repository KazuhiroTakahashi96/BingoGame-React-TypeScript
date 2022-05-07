import React, { useEffect, useState } from "react";
import {
  calcTotalBingoNum,
  calcTotalReachNum,
  makeLineArrays,
} from "./functions/calcReachBingo";

const reachBingoNumStyle = {
  fontSize: "30px",
  fontWeight: "bold",
};

const ShowReachBingo = ({ cardNumArray, numbersArr }) => {
  // リーチ数とビンゴ数を表示する
  const [reachNumber, setReachNumber] = useState(0);
  const [bingoNumber, setBingoNumber] = useState(0);

  useEffect(() => {
    makeLineArrays(cardNumArray);
  }, [cardNumArray]);

  if (numbersArr === undefined) numbersArr = [];

  // 合計リーチ数
  const totalReachNumber = calcTotalReachNum(numbersArr);
  // 画面に出力
  useEffect(() => {
    setReachNumber(totalReachNumber);
  }, [totalReachNumber]);

  // 合計ビンゴ数
  const totalBingoNumber = calcTotalBingoNum(numbersArr);
  // 画面に出力
  useEffect(() => {
    setBingoNumber(totalBingoNumber);
  }, [totalBingoNumber]);

  return (
    <div style={{ width: "100%" }}>
      <div>リーチ数</div>
      <div style={reachBingoNumStyle}>{reachNumber}</div>
      <br />
      <br />
      <div>ビンゴ数</div>
      <div style={reachBingoNumStyle}>{bingoNumber}</div>
    </div>
  );
};

export default ShowReachBingo;
