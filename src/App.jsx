import { useState } from "react";
import data from "./data";
import Faq, { Image } from "./Faq";
import "./App.css";

function App() {
  const dataElement = data.map((data) => {
    return (
      <>
        <Faq
          key={data.id}
          heading={data.heading}
          question={data.question}
          answer={data.answer}
        />
      </>
    );
  });

  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center relative m-12 p-5 pt-28 mt-40 bg-white rounded-3xl max-w-sm  bg-[url('../images/bg-pattern-mobile.svg')] bg-no-repeat bg-contain  md:max-w-4xl md:items-end md:justify-around md:pt-5  md:bg-[url('../images/bg-pattern-desktop.svg')">
      <div className=" flex flex-col  justify-center items-center">
        <Image />
      </div>

      <div>{dataElement}</div>
    </div>
  );
}

export default App;
