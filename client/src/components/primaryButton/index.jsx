import { Button } from "@mui/material";

import "./style.css";

export default function PrimaryButton(props) {
  return (
    <div className="primary-button-content">
      <Button {...props} variant={props.variant || "contained"}>
        {props.children}
      </Button>
    </div>
  );
}
