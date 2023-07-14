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

export default function Auth() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (e: any, index: any) => {
    console.log(index);
    setCurrentTab(index);
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
        {currentTab === 0 && ()}
      </Box>
    </Container>
  );
}
