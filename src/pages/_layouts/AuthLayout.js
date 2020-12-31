import React from 'react'
import { useLocation, useHistory } from 'react-router'

import { Typography, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import WaveImage from '../../assets/images/Wave.png'
import Logo from '../../assets/images/logo_dark.svg'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  logo: {
    marginTop: '30px',
    color: theme.palette.primary.contrastText,
  },
  copyright: {
    marginBottom: '10px',
    fontWeight: 100,
    color: theme.palette.primary.contrastText,
  },
  centerText: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  painelLeft: {
    flexBasis: '40%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  background: {
    backgroundImage: `url(${WaveImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  painelRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '60%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
    },
  },
  logoTitle: {
    color: theme.palette.primary.main,
    marginBottom: '1rem',
  },
}))

export default function AuthLayout({ children }) {
  const location = useLocation()
  const history = useHistory()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.painelLeft}>
        <Container className={classes.background}>
          <img className={classes.logo} src={Logo} alt='logo' />
          <div className={classes.centerText}>
            <Typography align="center" variant="h4">
              Bem vindo de volta!
            </Typography>
            <Typography align="center" variant="h6" style={{ fontWeight: 100 }}>
              Entre com seu usuário e senha para continuar com as aulas.
            </Typography>

            {location.pathname === '/cadastro' ? (
              <Button
                variant="outlined"
                style={{ color: '#fff', borderColor: '#fff', marginTop: '1rem' }}
                disableElevation
                onClick={() => history.push('/')}
              >
                Já possuo conta
              </Button>
            ) : (
                ''
              )}
          </div>
          <Typography className={classes.copyright} align="center" variant="h6">
            copyright
          </Typography>
        </Container>
      </div>
      <div className={classes.painelRight}>{children}</div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
