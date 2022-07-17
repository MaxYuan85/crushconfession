import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import db from '../../db/db';
import Database from '../../types/Database';
import { CrushCard } from './CrushCard';
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

export const Leaderboard = () => {
  const [confessions, setConfessions] = useState<Database.Confession[]>([])
  useEffect(() => {
    const fetchData = async () => {
      return await db.query({ collection: 'confessions' });
    }

    fetchData().then((data) => {
      setConfessions(data)
    })
  }, []);
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
        confessions.map(data => {
          return (
            <CrushCard
              email={data.crushEmail}
              crushCount={data.confessionMessages.length}
              instagramLink={data.crushLinkedin}
              confessions={data.confessionMessages}
            />
          )
        })
      }
    </Grid>
  )
}

