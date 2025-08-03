import { useState } from "react";
import { Greeting } from "./Greeting";
import { FlightList } from "./Flights";

export function Logger() {

    const [isLogged, setIsLogged] = useState('');

    const handleLogin = () => {
        setIsLogged(true);
    }

    const handleLogout = () => {
        setIsLogged(false);
    }

    return (
        <div>
            <Greeting isLogged={isLogged} />
            <br/>
            {
                (isLogged) ?
                    <LogoutButton onClick={handleLogout} /> :
                    <LoginButton onClick={handleLogin} />
            }
            <FlightList isLogged={isLogged} />
        </div>
    );

}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}