import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //ボールボタンの表示非表示
  const [showBingoBallBtn, setShowBingoBallBtn] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        showBingoBallBtn,
        setShowBingoBallBtn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
