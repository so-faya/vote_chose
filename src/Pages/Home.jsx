import React from "react";
import GradientBox from "../Components/GradientBox";
import Picture from "../Components/Picture";
import Question from "../Components/Question";
import Result from "../Components/Result";
import useHandleDot from "../Components/HandleDot";
import linkk from "./Login"

const HomePage = () => {
  const { positions, handleDotDrag } = useHandleDot();
  const [showResults, setShowResults] = React.useState(false);

  return (
    <div className="container">
      <h1>Interactive Gradient Box</h1>
      <Picture />
      <Question />
      <GradientBox handleDotDrag={handleDotDrag} />
      <button onClick={() => setShowResults(true)} className="result-btn">
        Show Results
      </button>
      {showResults && <Result positions={positions} />}
    </div>
  );
};

export default HomePage;
