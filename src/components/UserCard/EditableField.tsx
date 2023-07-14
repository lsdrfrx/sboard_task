import { TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  data: any;
}

export default function EditableField({ data }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState(data);

  return (
    <>
      {!isFocused ? (
        <Typography
          display="inline"
          onClick={() => {
            setIsFocused(true);
          }}
        >
          {value !== undefined ? value : "Не указано"}
        </Typography>
      ) : (
        <TextField
          autoFocus
          variant="standard"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setIsFocused(false)}
        />
      )}
    </>
  );
}
