import checkBingo from "./checkBingoNum";
import checkReach from "./checkReachNum";

// B列、I列、N列、G列、O列の配列（縦列）
const col_B = [];
const col_I = [];
const col_N = [];
const col_G = [];
const col_O = [];

// 横列
const row_1 = [];
const row_2 = [];
const row_3 = [];
const row_4 = [];
const row_5 = [];

// 斜め列
const cross_1 = [];
const cross_2 = [];

// ============== 各列の値を取り出して、用意した配列に格納する関数 ==============
export const makeLineArrays = (cardNumArray) => {
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

  // 横列の数字を、用意した配列に格納
  for (let i = 0; i < 25; i += 5) {
    for (let j = 0; j < 5; j++) {
      if (j === 0) {
        row_1.push(cardNumArray[i]);
      } else if (j === 1) {
        row_2.push(cardNumArray[i + j]);
      } else if (j === 2) {
        row_3.push(cardNumArray[i + j]);
      } else if (j === 3) {
        row_4.push(cardNumArray[i + j]);
      } else if (j === 4) {
        row_5.push(cardNumArray[i + j]);
      }
    }
  }

  // 斜め列の数字を、用意した配列に格納
  // 左上から右下の列
  for (let i = 0; i <= 24; i += 6) {
    cross_1.push(cardNumArray[i]);
  }
  // 左下から右上の列
  for (let i = 4; i <= 20; i += 4) {
    cross_2.push(cardNumArray[i]);
  }

  // 中央は'free'に置換しておく
  col_N[2] = "free";
  row_3[2] = "free";
  cross_1[2] = "free";
  cross_2[2] = "free";
};

// ============== 合計リーチ数・ビンゴ数を計算して、その数字を返す関数 ==============
export const calcTotalReachNum = (numbersArr) => {
  const totalReachNumber =
    checkReach(col_B, numbersArr) +
    checkReach(col_I, numbersArr) +
    checkReach(col_N, numbersArr) +
    checkReach(col_G, numbersArr) +
    checkReach(col_O, numbersArr) +
    checkReach(row_1, numbersArr) +
    checkReach(row_2, numbersArr) +
    checkReach(row_3, numbersArr) +
    checkReach(row_4, numbersArr) +
    checkReach(row_5, numbersArr) +
    checkReach(cross_1, numbersArr) +
    checkReach(cross_2, numbersArr);
  return totalReachNumber;
};

export const calcTotalBingoNum = (numbersArr) => {
  const totalBingoNumber =
    checkBingo(col_B, numbersArr) +
    checkBingo(col_I, numbersArr) +
    checkBingo(col_N, numbersArr) +
    checkBingo(col_G, numbersArr) +
    checkBingo(col_O, numbersArr) +
    checkBingo(row_1, numbersArr) +
    checkBingo(row_2, numbersArr) +
    checkBingo(row_3, numbersArr) +
    checkBingo(row_4, numbersArr) +
    checkBingo(row_5, numbersArr) +
    checkBingo(cross_1, numbersArr) +
    checkBingo(cross_2, numbersArr);
  return totalBingoNumber;
};
