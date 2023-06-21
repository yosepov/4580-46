import React from "react";
import { Link} from 'react-router-dom'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ErrorPage = () =>  {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography component="h1" variant="h5">
                    404 Error
                </Typography>
                <Typography component="h2" variant="subtitle1">
                    Sorry, the page you are looking for does not exist.
                </Typography>
                <Button variant="outlined" component={Link} to="/" sx={{ mt: 3 }}>
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
}