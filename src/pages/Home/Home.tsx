import { Container, Grid } from "@mui/material";
import UserCard from "../../components/UserCard/UserCard";

export default function Home() {
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={2} marginTop={24}>
        <Grid item xs={4}>
          <UserCard username="lsdrfrx" />
        </Grid>
      </Grid>
    </Container>
  );
}
