import { Box, Typography, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import routes from './routes'
import Wrapper from '../components/Wrapper'
import AppBar from '../components/AppBar'
import { useForm } from 'react-hook-form'
import formErrorMessages from '../utils/formErrorMessages'
import { useState } from 'react'
import Database from '../types/Database'
import { ConfessForm } from '../components/ConfessForm'

const Home = () => {

  return (
    <>
      <Box style={{backgroundColor: "rgb(152,190,250)", height: '100vh', width: '100vw'}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{height: '100vh'}}
        >
          <Typography paragraph variant='h1' align='center'>
            College Crush <br></br>Confessions
          </Typography>

          <Box style={{paddingTop: '10vh', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
            <Typography paragraph variant='body2' align='center'>
              Have a crush? Too scared to confess? Put down their “.edu” email address and get notified <i>only if they put yours down too</i>! <b>Completely anonymous, completely confidential</b>.
            </Typography>
          </Box>
        </Grid>

        <Typography paragraph align='center' style={{position: 'absolute', bottom: '0', fontSize: '18pt', left: '0', right: '0'}}>
        ⬇️ See the Leaderboards ⬇️
        </Typography>
      </Box>
      <Box style={{backgroundColor: "rgb(250,211,152)", height: '100vh', width: '100vw', padding: '30px'}}>
        <ConfessForm />
      </Box>
    </>
  )
}

export default Home
