
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { SignUp } from './components/SignUp'
import { Welcome } from './components/Welcome'

function App() {
  const [name, setName] = useState('')
  const [signUp, setSignUp] = useState(false)
  const [welcome, setWelcome] = useState(false)
  const [signUpName, setSignUpName] = useState('Sign Up')

  return (
    <div className="App">
    {signUp && <SignUp setSignUpName={setSignUpName} setSignUp={setSignUp} setWelcome={setWelcome} setName={setName}></SignUp> }
      <Header signUpName={signUpName} sign={setSignUp}></Header>
     {welcome && <Welcome name={name}></Welcome>}
    </div>
  )
}

export default App
