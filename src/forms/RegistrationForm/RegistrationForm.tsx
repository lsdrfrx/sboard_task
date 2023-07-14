import { TextField, Button } from "@mui/material";

export default function RegistrationForm() {
  return (
    <>
      <TextField
        id="email"
        name="email"
        type="email"
        label="Email"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="firstname"
        name="firstname"
        label="Имя"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="lastname"
        name="lastname"
        label="Фамилия"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="username"
        name="username"
        label="Имя пользователя"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Пароль"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" fullWidth>
        Зарегистрироваться
      </Button>
    </>
  );
}
