import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';

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
    <Grid key={id} container wrap="nowrap" alignItems="center">
      <Grid item sx={{ ml: 1, mb: 2, mt: 2, mr: 1, width: '100%' }}>
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other}/>;
})(({ theme, expand }) => ({
  variant: "outlined",
  backgroundColor: '#fff',
  border: "1px solid #bbb",
  '&:hover': {
    backgroundColor: '#ddd',
  },
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CrushCard = (props: CrushCardInterface) => {
  const { email, crushCount, instagramLink, linkedinLink, confessions } = props;

  // Calculate "random" rotation based on uid
  const sumOfASCII = [...email].map(c => c.charCodeAt(0)).reduce((a,b)=>a+b, 0);
  const rotation = (sumOfASCII % 20) / 10 - 1;  // [-1, 1]

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        <CardActions 
          disableSpacing
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography sx={{ mt: 1.5, mb: 1 }} variant="subtitle1" color="text.secondary">
            Love Notes
          </Typography>
          <Grid container wrap="nowrap" direction="column">
            {
              confessions.map(confession => {
                return (
                  <CrushComment
                    key={confession.id}
                    id={confession.id}
                    message={confession.message}
                    upvotes={confession.upvotes}
                  />
                )
              })
            }
          </Grid>
        </Collapse>


      </CardContent>
    </React.Fragment>
  );

  return (
    <Grid item style={{width: "345px"}}>
      <Card 
        variant="outlined" 
        sx={{ borderRadius: '20px', padding: '10px', boxShadow: 3, transform: 'rotate('+ rotation + 'deg)' }}
      >
        {card}
      </Card>
    </Grid>
  );

}

