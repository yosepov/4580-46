import './Button.css'

export function SaoButton() {
  const title = "SAO";
  const buttonAction = () => {
    console.log("Hello🖖");
  };

  return <button className="button-arounder" onClick={buttonAction}>{title}</button>;
}

