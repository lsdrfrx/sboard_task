import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";

import { ChangeEvent, useState } from "react";
import RegistrationForm from "../../forms/RegistrationForm/RegistrationForm";
import LoginForm from "../../forms/LoginForm/LoginForm";

export default function Auth() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (e: any, index: any) => {
    console.log(index);
    setCurrentTab(index);
  };

  const handleSubmit = (event: any) => {
    alert();
    console.log(event.currentTarget);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("username"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        gap="24px"
        padding="32px"
        borderRadius="25px"
        bgcolor="#f9f9f9"
        marginTop={24}
      >
        <Tabs value={currentTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Регистрация" />
          <Tab label="Вход" />
        </Tabs>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          {currentTab === 0 && <RegistrationForm />}
          {currentTab === 1 && <LoginForm />}
        </Box>
      </Box>
    </Container>
  );
}
