import './header.css'

export const Header = ({sign, signUpName})=>{

    return(
        <header>
            <div onClick={()=>{sign(true)}} className="sign-up-button">{signUpName}</div>
        </header>
    )

}