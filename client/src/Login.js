import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            <h1>Cryptid Watcher</h1>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <p>
                        Don't have an account?
                        <button onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <p>
                        Already have an account?
                        <button onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
        </>
    );
}

export default Login;
