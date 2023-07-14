import { Box, Avatar, Typography, Button } from "@mui/material";
import { User } from "../../models/User";

export default function UserCard({ username }: User) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#f9f9f9"
      padding="32px"
      borderRadius="25px"
      gap="32px"
    >
      <Box display="flex" gap="32px" alignItems="center">
        <Avatar>{username[0]}</Avatar>
        <Typography variant="body1">{username}</Typography>
      </Box>
      <Box display="flex" gap="16px">
        <Button variant="contained" color="success" fullWidth>
          Перейти
        </Button>
        <Button variant="contained" color="error" fullWidth>
          Удалить
        </Button>
      </Box>
    </Box>
  );
}
