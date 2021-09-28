import React, { useState, useContext} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import EmailIcon from '@material-ui/icons/Email'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import welcome from '../../assets/imagens/welcome.jpeg'

import {
    Button, CssBaseline, TextField, Typography,
    Container, makeStyles, InputAdornment, IconButton,
} from '@material-ui/core'


const SignIn = () => {

    const classes = useStyles()
    const [show, setShow] = useState(false)
    const email = localStorage.getItem('email')

    const initialFormState = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('Entre com um e-mail válido!').required('O e-mail é obrigatório!'),
        password: yup.string('Entre com sua senha').required('A senha é obrigatória!'),
    })

    const formik = useFormik({
        initialValues: initialFormState,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values.email.length === 0 || values.password.length === 0) {
                return
            } else if(values.email == 'desafio@connecta.com' && values.password == '123'){
                localStorage.setItem('email', values.email)
                window.location.href = '/success'
            
            } else {
                alert('E-mail e/ou senha inválidos!')
            }
        }
    })

    const logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                {email &&
                    <div className={classes.paper}>
                        <img className={classes.logo} src={welcome} alt='' />
                        <p align="center">
                            Conectado como:
                            <h2 className={classes.title}>
                                {email}
                            </h2>
                        </p>
                        <form className={classes.form} noValidate onSubmit={logout}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Limpar dados e Sair
                            </Button>
                        </form>
                    </div>
                }
                {!email &&
                    <div className={classes.paper}>
                        <img className={classes.logo} src={welcome} alt='' />
                        <Typography component="h1" variant="h5" className={classes.title}>
                            REALIZE SEU LOGIN
                        </Typography> 
                        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton color='default'>
                                                <EmailIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Senha"
                                variant='outlined'
                                fullWidth
                                required
                                type={show ? 'text' : 'password'}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                autoComplete="current-password"
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                color='default'
                                                onClick={() => setShow(!show)}
                                            >
                                                {show ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Entrar
                            </Button>
                            
                        </form>
                    </div>
                }
        </Container>
    );
}

export default SignIn

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#070',

        '&:hover': {
            background: '#005200'
        },
    },
    logo: {
        width: 300,
        marginTop: '20%'
    },
    title: {
        flexGrow: 1,
        textTransform: 'capitalize',
        marginTop: '10%',
    },
    link: {
        fontSize: 20
    }
}));