import './ZoharButton.css'

export const YoniButton = () => {
  console.log("my button");
  const title = "click me";

  const handleButton = () => {
    console.log("yoni");
  };

  return (
    <>
      <button className="zoharBtn" onClick={handleButton}>
        {title}
      </button>
    </>
  );
};
