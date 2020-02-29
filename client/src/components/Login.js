import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  TextField,
  makeStyles,
  Button,
  InputAdornment,
  IconButton,
  Hidden,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import illustration from '../images/Login.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 6rem)',
  },
  formContainer: {
    flex: '1 1 30rem',
    height: '26rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      width: '100%',
      maxWidth: '20rem',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '15rem',
      },
    },
  },
  paper: {
    maxWidth: '70rem',
    height: '35rem',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '30rem',
      height: '38rem',
      alignItems: 'flex-start',
    },
  },
  img: {
    flex: '1 1 35rem',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
      marginBottom: theme.spacing(2),
    },
  },
  heading: {
    fontWeight: '700',
    marginBottom: theme.spacing(4),
  },
  button: {
    width: '100%',
    maxWidth: '18rem',
    height: '3rem',
    borderRadius: '2rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginTop: theme.spacing(1.5),
    textTransform: 'capitalize',
    boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '12rem',
    },
  },
  invalid: {
    display: isInvalidCred => (isInvalidCred ? 'block' : 'none'),
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    errors: false,
    email: ' ',
    password: ' ',
  });
  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classes = useStyles(isInvalidCred);

  // useEffect Hook to check if there are any errors after any change in the error state
  // It runs only after each time the form is submitted
  // Using this method as setState Hook doesnt support second callback argument
  useEffect(() => {
    if (!error.errors && isSubmitting) {
      console.log('useeffect');
      setIsInvalidCred(true);
      setPassword('');
      setEmail('');
    }
  }, [error, isSubmitting]);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const validateInputs = () => {
    let errors1 = false;
    let password1 = ' ';
    let email1 = ' ';

    if (email === '') {
      errors1 = true;
      email1 = 'Please fill out this field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors1 = true;
      email1 = 'Please enter a valid email';
    }
    if (password === '') {
      errors1 = true;
      password1 = 'Please fill out this field';
    } else if (password.length < 8) {
      errors1 = true;
      password1 = 'Password should have more than 8 characters';
    }

    setError(prevState => ({
      ...prevState,
      errors: errors1,
      email: email1,
      password: password1,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateInputs();
    setIsSubmitting(true);
  };

  const handleChange = e => {
    const setItem = e.target.name === 'email' ? setEmail : setPassword;
    setItem(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Hidden xsDown>
          <img
            src={illustration}
            alt='Login illustration'
            className={classes.img}
          />
        </Hidden>
        <div className={classes.formContainer}>
          <Typography variant='h3' className={classes.heading}>
            Login
          </Typography>
          <Hidden smUp>
            <img
              src={illustration}
              alt='Login illustration'
              className={classes.img}
            />
          </Hidden>
          <Typography variant='h6' color='error' className={classes.invalid}>
            Invalid email or password. Please try again
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit}
            autoComplete='off'
            className={classes.form}
          >
            <TextField
              required
              variant='filled'
              id='email-input'
              name='email'
              type='email'
              label='Email'
              value={email}
              onChange={handleChange}
              error={!(error.email === ' ')}
              helperText={error.email}
            />
            <TextField
              required
              variant='filled'
              id='password-input'
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              value={password}
              onChange={handleChange}
              error={!(error.password === ' ')}
              helperText={error.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={toggleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type='submit'
              color='primary'
              variant='contained'
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
