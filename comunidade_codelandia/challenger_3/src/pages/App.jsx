import { useState } from 'react';
import './App.css';
import Initial from './initial/Initial'
import MainInHtml from './Main/MainInHtml';
import Footer from './Footer/Footer';

// Colocar as larguras por porcentagem animal

function App() {

  return (
    <div className="App">
      <Initial />
      <MainInHtml />
      <Footer />
    </div>
  )
}

export default App
