import { Container, Box, Avatar, Typography, Button } from "@mui/material";
import { IUser } from "../../models/User";
import EditableField from "../../components/UserCard/EditableField";

export default function User({
  email,
  username = "test",
  firstname,
  lastname,
  uuid,
  age,
}: IUser) {
  
  return (
    <Container component="main" maxWidth="md">
      <Box
        display="flex"
        gap="32px"
        bgcolor="#f9f9f9"
        borderRadius="25px"
        padding="32px"
        margin="0 auto"
        maxWidth="500px"
        marginTop={24}
      >
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
          }}
        >
          {username![0]}
        </Avatar>
        <Box>
          <Typography variant="h2" lineHeight="90px">
            {username}
          </Typography>
          <Box>
            <Typography display="inline">Имя пользователя: </Typography>
            <EditableField data={username} />
          </Box>
          <Box>
            <Typography display="inline">Имя: </Typography>
            <EditableField data={firstname} />
          </Box>
          <Box>
            <Typography display="inline">Фамилия: </Typography>
            <EditableField data={lastname} />
          </Box>
          <Box>
            <Typography display="inline">Возраст: </Typography>
            <EditableField data={age} />
          </Box>
          <Box>
            <Typography display="inline">Адрес электронной почты: </Typography>
            <EditableField data={email} />
          </Box>
          <Box display="flex" gap="16px" justifyContent="flex-end">
            <Button variant="contained" color="success">
              Сохранить
            </Button>
            <Button href="/" variant="contained">
              Назад
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
