import React from 'react'

import { Typography, Button, Paper, TextField } from '@material-ui/core'

import Flex from '../../components/ui/Flex'
import { useStyles } from './styles'

export default function CriarCurso() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.content}>

                <Flex justifyContent="space-between">

                    <Paper elevation={3} className={classes.paper}>
                        <div>
                            <Typography variant="h5" style={{ marginLeft: '30rem', marginTop: '2rem', color:'#0B3144', fontSize: 35 }}>Aula Prática</Typography>
                        </div>

                        <div>
                            <form className={classes.texto} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Título da Aula *" />
                            </form>

                            <form className={classes.texto} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Descrição da aula *" />
                            </form>

                            <form className={classes.texto} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Link para um formulário ou ambiente prático *" />
                            </form>
                        </div>

                        <div>
                            <Flex justifyContent="space-between">
                                <Button variant="outlined" size="large" style={{marginLeft: '1.7rem', marginTop:'23rem'}}>Cancelar</Button>
                                <Button variant="contained" size="large" style={{marginRight: '1.7rem', marginTop:'23rem', color:"#FFFFFF", backgroundColor:'#0B3144'}}>Adicionar aula</Button>
                            </Flex>
                        </div>

                    </Paper>

                </Flex>
            </div>
        </div>
    )

}