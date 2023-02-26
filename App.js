import React from 'react'
import Footer from './components/Footer.js'

export default function App() {
    return (
        <>
            <div id='container'>
                <img src='./images/laura-smith.png'></img>
                <h1>Laura Smith</h1>
                <p id='subtext'>Frontend Developer</p>
                <small><p>laurasmith.website</p></small>
                <div id='buttons--div'>
                    <button id='email'><img src='./images/Mail.png'></img> Email</button><button id='linkedIn'><img src='./images/linkedin.png'></img> LinkedIn</button>
                </div>
                <div id='about-me'>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                    <Footer/>
            </div>
        </>
    )
}