import React from 'react'
import {StyledHome} from './style'

import Header from '../../components/Header/index.jsx'
import Main from '../../components/Main/index.jsx'

function Home() {

  return (
    <StyledHome>
      <Header/>
      <Main/>
    </StyledHome>
  )
}

export default Home
