import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import makeStyles from '@material-ui/styles/makeStyles'
import Container from '@material-ui/core/Container'
import FormContainer from '../../FormContainer'
import GridContainer from '../../GridContainer'

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
    maxWidth: '100%',
    maxHeight: '100%'
  }
}))

function ScreenDefault(props) {
  const {
    store
  } = props

  console.warn(store)

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
      <Container className={ classes.container } fixed>
        <FormContainer />
        <GridContainer />
      </Container>
    </div>
  )
}

ScreenDefault.propTypes = {
  store: PropTypes.object.isRequired
}

export default ScreenDefault
