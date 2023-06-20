import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 1,
        margin: 'auto',
        maxWidth: 200,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#9BABB8',
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 80 }}>
            <Img width={220} height={180} alt="complex" src="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/homepage/common/bf-2042-section-bg-homepage-hero-keyart-xl.jpg.adapt.1920w.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard Edition
              </Typography>
              <Typography variant="body2" gutterBottom>
              Battlefield
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2042
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $29.99
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}