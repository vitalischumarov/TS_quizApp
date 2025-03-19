import "./Button.scss";

//hiermit lege ich fest, dass der prob 'action', den der Button bekommen, vom Typ ()=>Void ist
interface ButtonProps {
  action: () => void;
  title: string;
}

function Button({ action, title }: ButtonProps) {
  return (
    <button className="StartButton" onClick={action}>
      {title}
    </button>
  );
}

export default Button;
