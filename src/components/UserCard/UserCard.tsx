import { Box, Avatar } from "@mui/material";
import { User } from "../../models/User";

export default function UserCard({ username }: User) {
  return (
    <Box bgcolor="#f9f9f9" padding="32px" borderRadius="25px">
      <Box display="flex" gap="32px">
        <Avatar>{username[0]}</Avatar>
      </Box>
    </Box>
  );
}
