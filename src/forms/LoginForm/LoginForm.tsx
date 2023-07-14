import { TextField, Button } from "@mui/material";
export default function LoginForm() {
  return (
    <>
      <TextField
        id="username"
        name="username"
        label="Имя пользователя"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Пароль"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" fullWidth>Войти</Button>
    </>
  );
}
