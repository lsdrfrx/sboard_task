import { Container, Grid } from "@mui/material";
import UserCard from "../../components/UserCard/UserCard";

export default function Home() {
  const users = [
    {
      username: "lsdrfrx",
    },
    {
      username: "aqnox",
    },
    {
      username: "forxz",
    },
  ];
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={2} marginTop={24}>
        {users.map((user, i) => {
          return (
            <Grid item xs={4} key={i}>
              <UserCard username={user.username} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
