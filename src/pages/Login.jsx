import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      setError(''); // Clear previous error
  
      if (username && password) {
          try {
              const formData = {
                  username,
                  password
              };
  
              const response = await axios.post("http://localhost:5000/login", formData);
  
              if (response.status === 200) {
                  alert('Login successful!');
                  console.log(response.data.message); 
                  navigate("/home")
              }else {
                  setError('Unexpected response from server'); 
              }
          } catch (err) {
              // setError('An error occurred during login'); 
              setError('An error occurred:', err); 
          }
      } else {
          setError('Please fill in both fields'); 
      }
  };
  
  const handleSignUp = () => {
    navigate('/signup');
};



    return (
        <div style={styles.container} className='bg'>
            <h2 style={{color:"White"}}>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit"  style={styles.button}>Login</button>
                <br></br>
                <p>Don't have a Account?</p>
                <button type="button"  class="btn btn-secondary" onClick={handleSignUp}>Sign Up</button>
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
        backgroundImage: 'url("https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-686.jpg?w=996&t=st=1710534483~exp=1710535083~hmac=f002e6102a0ed843d1d4ef38f1b2689684fb465cddef219d0c8879337c754159")',
        backgroundSize: 'cover'    },
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
        padding: '7px',
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

export default Login;
