import { useContext, useState } from "react";
import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/reach_bingo_num/ShowReachBingo";
import { DataContext } from "./context/DataContext";
import makeCardNumArray from "./makeCardNumArray/makeCardNumArray";

// カードの番号を格納する配列(処理は別ファイルに記述)
const cardNumArray: Array<number> = makeCardNumArray();

// 1〜75を持った長さ75の配列の作成
const bingoBallArray: Array<number> = [];
for (let i = 1; i <= 75; i++) {
  bingoBallArray.push(i);
}

// 出たビンゴボールの数字を格納していく配列の作成
const ballNumbersArray: Array<number> = [];

// ===============================================================
function App() {
  const data = useContext(DataContext);

  // 何個目のボールか
  const [ballCount, setBallCount] = useState<number>(0);
  // 引いたボールの番号を表示
  const [ballNumber, setBallNumber] = useState<Array<number>>([]);
  // ballNumbersArrayを配下のコンポーネントに送り出す
  const [numbersArr, setNumbersArr] = useState<Array<number>>([]);

  // ============= ビンゴボールの数字を作成する関数 ============
  const makeBingoBall = () => {
    // 0〜74の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * bingoBallArray.length);

    // bingoBallArrayのインデックス「randomNum」番目の数字をballNumbersArrayの先頭に格納
    ballNumbersArray.unshift(bingoBallArray[randomNum]);

    // 数字が重複しないよう、元の配列から削除
    bingoBallArray.splice(randomNum, 1);

    // 画面に数字を表示
    // 75回引き終わった場合
    if (bingoBallArray.length === 0) {
      setBallNumber(ballNumbersArray[0]);
      // ボタンを消す
      data.setShowBingoBallBtn(!data.showBingoBallBtn);
    } else {
      setBallNumber(ballNumbersArray[0]);
    }

    // ballNumbersArrayを配下のコンポーネントに送り出す
    setNumbersArr(ballNumbersArray);
  };

  return (
    <div className="App">
      <header className="App-header">ビンゴゲーム in React </header>

      <div className="container">
        {/* [cardNumArray] は、ビンゴカード上の数字が入った配列 */}
        {/* [numbersArr] は、引いたボールの数字が入った配列 */}
        <BingoCard cardNumArray={cardNumArray} numbersArr={numbersArr} />
        <ShowReachBingo cardNumArray={cardNumArray} numbersArr={numbersArr} />
        {/* [ballCount] は、n個目のボールかの数字 */}
        {/* [ballNumber] は、引いたボールの数字 */}
        <BingoBall ballCount={ballCount} ballNumber={ballNumber} />
      </div>

      <div>
        <button
          style={data.showBingoBallBtn ? null : { display: "none" }}
          onClick={() => {
            setBallCount(ballCount + 1);
            makeBingoBall();
          }}
        >
          ボールを引く
        </button>
      </div>
    </div>
  );
}

export default App;
