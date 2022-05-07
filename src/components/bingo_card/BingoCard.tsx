import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "./BingoCard.css";
import CardNum from "./card_number/CardNum";

// B列、I列、N列、G列、O列の配列（縦列）
const col_B = [];
const col_I = [];
const col_N = [];
const col_G = [];
const col_O = [];

const BingoCard = ({ cardNumArray, numbersArr }) => {
  const data = useContext(DataContext);

  const [colB, setColB] = useState([]);
  const [colI, setColI] = useState([]);
  const [colN, setColN] = useState([]);
  const [colG, setColG] = useState([]);
  const [colO, setColO] = useState([]);

  const [hideCardBtn, setHideCardBtn] = useState(false);

  // =========== ビンゴカードを画面に出力する関数 ============
  const makeBingoCard = () => {
    // 縦列の数字を、用意した配列に格納
    for (let i = 0; i < 25; i++) {
      // iが5未満なら
      if (i < 5) {
        // col_Bに、そのi=インデックス番号の数字を格納
        col_B.push(cardNumArray[i]);
        // 10未満なら
      } else if (i < 10) {
        col_I.push(cardNumArray[i]);
      } else if (i < 15) {
        col_N.push(cardNumArray[i]);
      } else if (i < 20) {
        col_G.push(cardNumArray[i]);
      } else if (i < 25) {
        col_O.push(cardNumArray[i]);
      }
    }

    // 中央はfree
    // インデックス2番目から1つ削除して、「free」に置換
    col_N.splice(2, 1, "free");

    setColB(col_B);
    setColI(col_I);
    setColN(col_N);
    setColG(col_G);
    setColO(col_O);
  };

  return (
    <div className="card-container">
      <div className="bingo">
        <p>B</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>O</p>
      </div>

      <div className="cardNum-container">
        <CardNum cardNum={colB} numbersArr={numbersArr} />
        <CardNum cardNum={colI} numbersArr={numbersArr} />
        <CardNum cardNum={colN} numbersArr={numbersArr} />
        <CardNum cardNum={colG} numbersArr={numbersArr} />
        <CardNum cardNum={colO} numbersArr={numbersArr} />
      </div>
      <br />
      <button
        style={hideCardBtn ? { display: "none" } : null}
        onClick={() => {
          setHideCardBtn(!hideCardBtn);
          // ボールを引くボタンを表示する
          data.setShowBingoBallBtn(!data.showBingoBallBtn);
          makeBingoCard();
        }}
      >
        カード作成
      </button>
    </div>
  );
};

export default BingoCard;
