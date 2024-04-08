import React, { createContext, useState } from "react";
export const EmailContext = createContext();

export default function ContextMailProvider(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const updateUserData = (newData) => {
    setUserData((prevData) => {
      const updatedData = {
        ...prevData,
        ...newData,
      };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  return (
    <EmailContext.Provider value={{ userData, updateUserData }}>
      {props.children}
    </EmailContext.Provider>
  );
}
