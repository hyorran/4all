import React from 'react'
import ScreenDefault from './features/screens/ScreenDefault'
import { view } from 'react-easy-state'
import appStore from './appStore'

export default view( () => {
  return (
      <ScreenDefault store={ appStore }/>
  )
})
