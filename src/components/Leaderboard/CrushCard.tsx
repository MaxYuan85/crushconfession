import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface CrushCommentInterface {
  id: string
  message: string
  upvotes: number
}

export interface CrushCardInterface {
  email: string
  crushCount: number,
  instagramLink?: string
  linkedinLink?: string
  confessions: CrushCommentInterface[]
}

export const CrushComment = (props: CrushCommentInterface) => {
  const { id, message, upvotes } = props;

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item sx={{ mb: 1, mt: 1 }}>
        <Typography component="div">
          {message}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton color="primary" component="label">
          <FavoriteBorderIcon />
        </IconButton>
      </Grid>
    </Grid>
  );

}



export const CrushCard = (props: CrushCardInterface) => {
  const { email, crushCount, instagramLink, linkedinLink, confessions } = props;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Email
        </Typography>
        <Typography variant="h5" component="div">
          {email}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="subtitle1" color="text.secondary">
          Crush Count
        </Typography>
        <Typography variant="h5" component="div">
          {crushCount}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="subtitle1" color="text.secondary">
          Social Media
        </Typography>
        <Typography variant="h5" component="div">
          {instagramLink}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="subtitle1" color="text.secondary">
          Love Notes
        </Typography>

        <Grid container wrap="nowrap" direction="column">
          {
            confessions.map(confession => {
              return (
                <CrushComment
                  id={confession.id}
                  message={confession.message}
                  upvotes={confession.upvotes}
                />
              )
            })
          }
        </Grid>

      </CardContent>
    </React.Fragment>
  );

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined" sx={{ borderRadius: '20px', padding: '10px', boxShadow: 3 }}>{card}</Card>
    </Grid>
  );

}

