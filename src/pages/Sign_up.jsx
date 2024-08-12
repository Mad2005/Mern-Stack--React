import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
   





    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("sigup");
        // if (password !== confirmPassword) {
        //     setError('Passwords do not match');
        //     return;
        // }
        // if (email && password && username) {
        //     alert('Sign Up successful!');
        //     console.log(`username: ${username}\nemail: ${email}\npassword: ${password}`);

        // } else {
        //     setError('Please fill all fields');
        // }
        const formdata = {
            username:username,
            email:email,
            password:password,
        };
        console.log(formdata);
        const reponse = await axios.post("http://localhost:5000/signUp",formdata)
        if(reponse.status === 201){
            alert("Account created");
            console.log(reponse.data.message);
            navigate("/")
            
        }else{
            console.error("An error occured while signing up:",error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{color:"White"}}>Sign Up</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                {/* <div style={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div> */}
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/03/11/59/83/1000_F_311598304_fdudXPNJgsUMybT1UAEwjHslW3LBq91L.jpg")',
        backgroundSize: 'cover'    
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#eb3f3f',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '15px',
    },
};

export default SignUp;
