import React from 'react'
import {StyledHome} from './style'

import Header from '../../components/view/Home/Header/index.jsx'
import Layout from '../../components/shared/Layout/index.jsx'

function Home() {

  return (
    <StyledHome>
      <Header/>
      <Layout/>
    </StyledHome>
  )
}

export default Home
