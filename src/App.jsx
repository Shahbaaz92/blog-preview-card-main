// import { useState } from "react";
import heroImage from "./assets/images/illustration-article.svg";
import authorImage from "./assets/images/image-avatar.webp";

import "./App.css";

function App() {
  return (
    <>
      <img src={heroImage} className="HeroImg" alt="Html and Css foundation" />
      <article>
        <small>Learning</small>
      </article>
      <small className="date">Published 21 Dec 2023</small>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="author">
        <img src={authorImage} alt="Greg Hooper" />
        <small>Greg Hooper</small>
      </div>
    </>
  );
}

export default App;
