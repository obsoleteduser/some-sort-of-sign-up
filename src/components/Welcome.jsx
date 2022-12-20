import './welcome.css'

export const Welcome = ({name})=>{
    return(
        <div className="welcome">
            <h1>Welcome, {name}!</h1>
        </div>
    )
}