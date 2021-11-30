import { TextField } from "@mui/material";

import "./style.css";

export default function TextInputComponent(props) {
  const { type, error } = props;

  return (
    <div className={`text-input-component-content ${error && "error"}`}>
      {type === "multiline" ? (
        <TextField
          fullWidth
          error={error}
          helperText={error}
          multiline
          rows={2}
          inputProps={{
            maxLength: props.maxLength
          }}
          {...props}
        >
          {props.children}
        </TextField>
      ) : (
        <TextField 
          fullWidth 
          error={error} 
          helperText={error} 
          inputProps={{
            maxLength: props.maxLength
          }}
          {...props}
        >
          {props.children}
        </TextField>
      )}
    </div>
  );
}
