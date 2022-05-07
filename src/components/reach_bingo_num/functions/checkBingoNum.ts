const checkBingo = (lineArr, numbersArr) => {
  // ===== ビンゴ数をチェックする関数 =====
  let bingoNum = 0;
  for (let i = 0; i < 5; i++) {
    // true(穴が空いてる)なら
    if (numbersArr.includes(lineArr[i])) {
      bingoNum += 1;
    }
  }
  // 'free'を含んでいたら＋1する
  if (lineArr[2] === "free") {
    bingoNum += 1;
  }
  return bingoNum === 5 ? 1 : 0;
};
export default checkBingo;
