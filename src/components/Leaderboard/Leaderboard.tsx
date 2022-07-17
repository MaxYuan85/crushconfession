import Grid from '@mui/material/Grid';
import { CrushCard } from './CrushCard';

export const Leaderboard = () => {
  const testData = [
    {
      email: 'maryjane@email.com',
      crushCount: 5,
      instagramLink: 'insta.com',
      confessions: [
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        }
      ]
    },
    {
      email: 'maryjane@email.com',
      crushCount: 5,
      instagramLink: 'insta.com',
      confessions: [
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        }
      ]
    },
    {
      email: 'maryjane@email.com',
      crushCount: 5,
      instagramLink: 'insta.com',
      confessions: [
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        },
        {
          id: 'asdf',
          comment: 'you are the best love lve love',
          likes: 2,
        }
      ]
    }
  ]

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{
        padding:
        {
          sm: "0px",
          md: "10px",
          lg: "20px",
        }
      }}
    >
      {
        testData.map(data => {
          return (
            <CrushCard
              email={data.email}
              crushCount={data.crushCount}
              instagramLink={data.instagramLink}
              confessions={data.confessions}
            />
          )
        })
      }
    </Grid>
  )
}

