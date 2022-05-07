const checkReach = (lineArr, numbersArr) => {
  // ===== リーチ数をチェックする関数 =====
  let reachNum = 0;
  for (let i = 0; i < 5; i++) {
    // true(穴が空いてる)なら
    if (numbersArr.includes(lineArr[i])) {
      reachNum += 1;
    }
  }
  // 'free'を含んでいたら＋1する
  if (lineArr[2] === "free") {
    reachNum += 1;
  }
  return reachNum === 4 ? 1 : 0;
};
export default checkReach;
