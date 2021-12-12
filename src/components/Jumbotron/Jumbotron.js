import React from 'react'
import '../Jumbotron/Styles/Jumbotron.css'
function Jumbotron() {
    return (
        <section className='jumbotron'>
            <div className='jumbotron-description'>
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
        </section>
    )
}

export default Jumbotron
