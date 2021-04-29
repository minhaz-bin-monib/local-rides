import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./Login.css"


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false
    })
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,

                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from)
                console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message)
            })
    }






    const handleSignOut = () => {

        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signedOutUser)

            })
            .catch((error) => {

            });
    }

    const handleBlur = (e) => {

        let isFieldValid = true;

        if (e.target.name === 'email') {

            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }


    }

    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserInfo(user.name);
                    console.log(res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)



                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)
                    console.log('sign in user info', res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();

    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,

        }).then(function () {
            console.log('User name updated successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <div>


            <h1 style={{ marginLeft: "420px" }}>Sign in  for Authentication</h1>


            <div style={{ marginLeft: "400px", backgroundColor: "skyblue", border: "1px solid red", borderRadius: "5px", width: "500px" }}>
                <div style={{ marginLeft: "180px", marginTop: "50px" }}>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />

                    <label htmlFor="newUser"> Click for Sign up </label>
                </div>
                <form style={{ marginLeft: "100px" }} className="ship-form" onSubmit={handleSubmit}>
                    {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                    <br />
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email Address" required />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                    <br />
                    <input style={{ color: "blue" }} type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                </form>
            </div>

            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} successful</p>}


            {
                user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button> :
                <button style={{ backgroundColor: "skyblue",  marginBottom: "10px", marginLeft: "570px" }} onClick={handleSignIn}>Sign in With Google</button>
            }
            <br />


            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt="" />

                </div>
            }
        </div>
    );
};

export default Login;