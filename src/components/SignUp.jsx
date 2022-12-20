import { useState } from 'react'
import './SignUp.css'

export const SignUp = ({setName, setWelcome, setSignUp}) => {

    const [regname, setRegname] = useState('REGISTER')

    const namehandler = (event) =>{
        setName(event.target.value)
    }

    return (
        <div className="overlay">
            <div className="sign-up-modal">
                <h1>Sign Up</h1>
                <input onChange={namehandler} type="text" className="name" placeholder='Name:'/>
                <input type="email" className="email" name="" id=""  placeholder='Email:'/>
                <input type="password" className="password" name="" id="" placeholder='Password:'/>
                <button type='submit' onClick={()=>{
                    setWelcome(true)
                    setSignUp(false)
                    
                    }} className="enter">{regname}</button>
            </div>
        </div>
    )
}