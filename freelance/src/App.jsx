import {React, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/footer'
import { Helmet } from 'react-helmet';
import Home from './layout/index/Home'

function App() {

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.huggingtails.org/" />
        <title>HuggingTails - Healthy Dog Meals & Walking Services</title>
        <meta name="description" content="Discover nutritious meals and dog walking services tailored for your furry friend." />
        <meta name="keywords" content="huggingtails,huggingtail,hugging tails,hugging tail, tail, chien, dog meals, dog walking, pet care, healthy dog food, HuggingTails" />
      </Helmet>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
