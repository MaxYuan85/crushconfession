import Grid from '@mui/material/Grid';
import { CrushCard } from './CrushCard';

export const Leaderboard = () => {
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <CrushCard />
      <CrushCard />
      <CrushCard />
      <CrushCard />
      <CrushCard />
    </Grid>
  )
}

