import React, { useState, useContext } from 'react'

import success from '../../assets/imagens/success.jpeg'

import {
    Button, CssBaseline, Typography, Container, makeStyles,
} from '@material-ui/core'

const Success = () => {

    const classes = useStyles()
    const email = localStorage.getItem('email')

    const logout = () => {
        window.location.href = '/'
        localStorage.clear()
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img className={classes.logo} src={success} alt='' />
                
                <Typography component="h1" variant="h5" className={classes.title}>
                    Boas Vindas, {email}!
                </Typography>
                
                <p>Este foi o desafio desenvolvido por Vinicius Carneiro,
                    espero que tenha sido satisfatório e que eu possa ser selecionado para a vaga.
                </p>
                <p>Até a próxima :)</p>

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
        </Container>
    )
}

export default Success

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
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
}));