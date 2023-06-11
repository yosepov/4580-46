export const YoniButton = () => {
  console.log("my button");
  const title = "click me";

  const handleButton = () => {
    console.log("yoni");
  };

  return (
    <>
      <button onClick={handleButton} className="css">
        {title}
      </button>
    </>
  );
};
