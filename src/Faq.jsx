import illustrationMobile from "../images/illustration-mobile.svg";
import arrow from "../images/icon-arrow-down.svg";
import { useState } from "react";

function Faq(props) {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((prevState) => !prevState);
  }
  const questionStyle = {
    color: show ? "#192345" : "",
    fontWeight: show ? 700 : "",
  };

  const btnStyle = {
    transform: show ? "rotate(180deg)" : "",
  };

  return (
    <div className="flex flex-col">
      <h1 className=" m-5 font-bold text-[#192345] mx-auto  text-5xl">
        {props.heading}
      </h1>

      <div className="flex justify-between items-center">
        <h2 className=" text-left font-medium" style={questionStyle}>
          {props.question}
        </h2>
        <button onClick={toggle} style={btnStyle}>
          <img src={arrow} />
        </button>
      </div>

      {show && (
        <h3 className="mt-2 md:max-w-sm text-[#828282]">{props.answer}</h3>
      )}
      <hr />
    </div>
  );
}

function Image() {
  return (
    <>
      <img
        src={illustrationMobile}
        className="w-80 mt-20 absolute z-50 -top-52 md:top-0 md:-left-10 md:w-96"
      />
    </>
  );
}

export default Faq;
export { Image };
