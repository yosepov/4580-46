import "./yoni.css";

export const YoniButton = () => {
  console.log("my button");
  const title = "click me";

  const handleButton = () => {
    console.log("yoni");
  };

  return (
    <>
      <button className="yoniBtn" onClick={handleButton}>
        {title}
      </button>
    </>
  );
};
