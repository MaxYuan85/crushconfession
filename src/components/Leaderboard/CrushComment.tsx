import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Comments shit
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const CrushComment = () => {

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item sx={{mb: 1, mt: 1}}>
        <Typography component="div">
          I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  I love you.  
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

