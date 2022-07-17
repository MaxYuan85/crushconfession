import { Box, Typography, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form'
import formErrorMessages from '../utils/formErrorMessages'
import { useState, useEffect } from 'react'
import Database from '../types/Database'
import { ConfessForm } from '../components/ConfessForm'

import db from '../db/db'
import { SignInButton } from '../components/SignInButton'
import { SignOutButton } from '../components/SignOutButton'
import { Leaderboard } from '../components/Leaderboard/Leaderboard'

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  const [todos, setTodos] = useState<Database.Todo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      return await db.query({ collection: 'todos' });
    }

    fetchData().then((data) => {
      setTodos(data)
    })
  }, []);

  return (
    <>
      // TODO: Use actual image from ./public
      <Box style={{ backgroundColor: "rgb(152,190,250)", height: '100vh', width: '100vw', backgroundImage: 'url(https://images.unsplash.com/photo-1506669318200-6790d9b4c014)', backgroundSize: 'cover'}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <Typography paragraph variant='h1' align='center' style={{fontWeight: "bold"}}>
            College Crush <br></br>Confessions
          </Typography>

          <Box style={{ paddingTop: '10vh', marginLeft: 'auto', marginRight: 'auto', width: '80%', maxWidth: '800px' }}>
            <Typography paragraph variant='body2' align='center'>
              Have a crush? Too scared to confess? Put down their “.edu” email address and get notified <i>only if they put yours down too</i>, <b>completely confidentially!</b>
            </Typography>
          </Box>
        </Grid>

        <Typography paragraph variant='body2' align='center' style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}>
          ⬇️ See the Leaderboards ⬇️
        </Typography>
      </Box>

      <Box style={{ backgroundColor: "rgb(255, 218, 117)", width: '100vw', padding: '30px' }}>
        <Leaderboard/>
      </Box>

      <Box style={{ backgroundColor: "rgb(250,211,152)", height: '100vh', width: '100vw', padding: '30px' }}>
        <ConfessForm />
        <Box mt={6}>
          <Typography paragraph>TODO List</Typography>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.description}</li>
            ))}
          </ul>
        </Box>
        <form
          onSubmit={handleSubmit(vals => {
            const item: Database.Todo = {
              id: vals.name,
              description: vals.name,
              order: todos.length,
              completed: false
            }
            db.addItem(
              'todos',
              item,
            )
            reset()
          })}
        >
          <TextField
            label='Enter your name'
            variant='outlined'
            fullWidth
            {...register('name', {
              required: formErrorMessages.required
            })}
            error={!!errors.name}
            helperText={errors.name?.message || ' '}
          />
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </form>

        <SignInButton />
        <SignOutButton />
      </Box>
    </>
  )
}

export default Home
