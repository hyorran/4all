import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function FormContainer() {
  const classes = useStyles()

  const [values, setValues] = useState({
    id: '',
    age: '',
    name: 'hai',
    description: '',
    category: null
  })
  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }



  return (
    <Grid
      container
      component="div"
      alignContent="flex-start"
    >
      <Card style={{
        width: '100%',
        padding: 10,
        margin: 10
      }}>
        <form autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
              <Typography>Categoria</Typography>
            </InputLabel>
            <Select
              value={values.age}
              onChange={handleChange}
              input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Tenxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Card>
    </Grid>
  )
}

export default FormContainer
