// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       {/* <RandomColor /> */}
//       {/* <StarRating noOfStars={10} /> */}
//       <ImageSlider />
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoadMoreData } from "./components/load-more-data";
import ImageSlider from "./components/image-slider";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={5} /> */}
      <LoadMoreData />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Main Page</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
