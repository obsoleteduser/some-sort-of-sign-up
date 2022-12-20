import './header.css'

export const Header = ({sign})=>{

    return(
        <header>
            <div onClick={()=>{sign(true)}} className="sign-up-button">Sign Up</div>
        </header>
    )

}