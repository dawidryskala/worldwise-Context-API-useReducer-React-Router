import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const naviagte = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        // button is in form so we need to take e.preventDefault()
        // to stop default behavior of form so to stop re-render
        e.preventDefault();
        naviagte(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
