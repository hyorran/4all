import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import Container from '@material-ui/core/Container'
import SelectInput from '@material-ui/core/Select/SelectInput'
import FormContainer from '../FormContainer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cartButton: {
    marginRight: 2
  },
  toolbar: {
    flexDirection: 'row-reverse'
  },
  container: {
    margin: 10,
    width: '100%',
    height: '100%'
  }
}))

function ScreenDefault(props) {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <AppBar position="static" color="default">
        <Toolbar className={ classes.toolbar }>
          <IconButton edge="start" aria-label="menu" href="#" className={ classes.cartButton }>
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={ classes.container }>
        <FormContainer />
      </Container>
    </div>
  )
}

ScreenDefault.propTypes = {

}

export default ScreenDefault
