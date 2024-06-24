import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey/'
import Header from './components/Header'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
