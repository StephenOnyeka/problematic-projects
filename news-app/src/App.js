import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=57192720cf074280828f679c821ea6f3`
    ).then(res => res.json())
      .then(data => setItems(data.articles))
      .then(data => console.log(data));
  })

  // useEffect(() => {
  //   fetch(
  //     `https://newsdata.io/api/1/news?apikey=pub_32911cdde98500ada31637722cf6e9a6cc8fc&language=en`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  //   })
   return (
      <div className="App">
        <h1 className="title">See the Latest News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <NewsGrid items={items} />
      </div>
    );
}

export default App;
