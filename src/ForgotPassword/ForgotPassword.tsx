import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Link } from 'react-router-dom'

const lightTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ForgotPassword = () => {
  

  return (
    <Container component="main" maxWidth="sm" >
       <ThemeProvider theme={lightTheme}>
       <CssBaseline />
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            style={{color: 'white'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
          <Link to="/SigninPage">
            {"Remembered? Sign In"}
          </Link>
        </Box>
      </Box>
      </ThemeProvider>
    </Container>
  );
}