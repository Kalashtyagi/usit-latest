import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export default function NewsProvider({ children }) {
  const initialNews = JSON.parse(sessionStorage.getItem("news")) || [
    "Welcome to Our website ",
    "You can add your news here",
  ];

  const [news, setNews] = useState(initialNews);
  useEffect(() => {
    sessionStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
}
