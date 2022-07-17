import Grid from '@mui/material/Grid';
import { CrushCard } from './CrushCard';

export const Leaderboard = () => {
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{padding: {
              sm: "0px",
              md: "10px",
              lg: "20px",
            }
      }}
    >
      <CrushCard />
      <CrushCard />
      <CrushCard />
      <CrushCard />
      <CrushCard />
    </Grid>
  )
}

