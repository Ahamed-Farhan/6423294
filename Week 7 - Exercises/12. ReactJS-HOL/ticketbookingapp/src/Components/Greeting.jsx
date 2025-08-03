export function Greeting(props) {
    if (props.isLogged) {
        return <UserGreeting />
    }
    else {
        return <GuestGreeting />
    }
}

function UserGreeting() {
    return (<h1>Welcome Back</h1>);
}

function GuestGreeting() {
    return (<h1>Please sign up.</h1>)
}