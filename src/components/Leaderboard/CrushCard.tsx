import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Comments shit
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CrushComment } from './CrushComment'

export const CrushCard = () => {

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Email
        </Typography>
        <Typography variant="h5" component="div">
          mary.jane@berkeley.edu
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Crush Count
        </Typography>
        <Typography variant="h5" component="div">
          7
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Social Media
        </Typography>
        <Typography variant="h5" component="div">
          instagram.com/maryjane
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Love Notes
        </Typography>

        <Grid container wrap="nowrap" direction="column">
          <CrushComment />
          <CrushComment />
          <CrushComment />
        </Grid>

      </CardContent>
    </React.Fragment>
  );

  return (
    <Grid item xs={4}>
      <Card variant="outlined">{card}</Card>
    </Grid>
  );
  
}

