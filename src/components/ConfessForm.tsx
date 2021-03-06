import { useState } from 'react'
import { Button, Modal, TextField, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import formErrorMessages from '../utils/formErrorMessages'
import db from '../db/db'
import { v4 as uuidv4 } from 'uuid'
import Database from '../types/Database';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: '60%',
  p: 4,
};

interface confessionSubmissionInterface { 
  userEmail: string
  crushEmail: string
  crushInstagram?: string
  crushLinkedin?: string
  message: string 
}

const createConfessionEntry = (data: confessionSubmissionInterface) => {
  const message: Database.ConfessionMessage = {
    id: uuidv4(),
    userEmail: data.userEmail,
    userUUID: 'asdf',
    message: data.message,
    upvotes: 1,
  }

  const confession: Database.Confession = {
    crushEmail: data.crushEmail,
    crushLinkedin: data.crushLinkedin,
    crushInstagram: data.crushInstagram,
    confessionMessages: [message],
  }

  return confession
} 


export const ConfessForm = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<confessionSubmissionInterface>()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={handleSubmit(vals => {
            const entry = createConfessionEntry(vals);
            db.upsertConfession(entry);
            reset();
            handleClose();
          })}
        >
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Your Email (This will never be public)'
                  variant='outlined'
                  fullWidth
                  {...register('userEmail', {
                    required: formErrorMessages.required
                  })}
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message || ' '}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Crush's Email"
                  variant='outlined'
                  fullWidth
                  {...register('crushEmail', {
                    required: formErrorMessages.required
                  })}
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message || ' '}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Crush's Instagram Handle"
                  variant='outlined'
                  fullWidth
                  {...register('crushInstagram', {
                    required: formErrorMessages.required
                  })}
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message || ' '}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Crush's Linkedin"
                  variant='outlined'
                  fullWidth
                  {...register('crushLinkedin', {
                    required: formErrorMessages.required
                  })}
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message || ' '}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Note to your crush (this will be public)"
                  multiline={true}
                  minRows={2}
                  variant='outlined'
                  fullWidth
                  {...register('message', {
                    required: formErrorMessages.required
                  })}
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message || ' '}
                />
              </Grid>
            </Grid>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  )
}

