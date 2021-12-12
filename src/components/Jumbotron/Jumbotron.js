import React from 'react'
import '../Jumbotron/Styles/Jumbotron.css'
import imgJumbotron from '../../images/BG3.png'
function Jumbotron() {
    return (
        <section className='jumbotron'>
            <div className='jumbotron-left'>
                <h1>
                    <strong>Learn Japanese With Us</strong>
                </h1>
                <h2>
                    Let's Begin Now
                </h2>
                <div>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
            <div className="jumbotron-right">
                <img src={imgJumbotron} />
            </div>
        </section>
    )
}

export default Jumbotron
