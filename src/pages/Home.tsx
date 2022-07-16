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
      <Box style={{ backgroundColor: "rgb(152,190,250)", height: '100vh', width: '100vw' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <Typography paragraph variant='h1' align='center'>
            College Crush <br></br>Confessions
          </Typography>

          <Box style={{ paddingTop: '10vh', marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
            <Typography paragraph variant='body2' align='center'>
              Have a crush? Too scared to confess? Put down their “.edu” email address and get notified <i>only if they put yours down too</i>! <b>Completely anonymous, completely confidential</b>.
            </Typography>
          </Box>
        </Grid>

        <Typography paragraph align='center' style={{ position: 'absolute', bottom: '0', fontSize: '18pt', left: '0', right: '0' }}>
          ⬇️ See the Leaderboards ⬇️
        </Typography>
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
