import React, { useEffect } from 'react'
import './FAQ.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
function FAQ() {
  const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {

            this.classList.toggle("actived");
        
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
    }, [])
    return (
      <div className={`faq ${theme == 'dark' ? 'dark' : ''} `}>
      <h1>FAQ</h1>
            <p>Berdasarkan pertanyaan yang sering ditanyakan</p>

            <button className={`accordion ${theme == 'dark' ? 'dark' : ''} `}>loremipsun</button>
            <div className={`panel ${theme == 'dark' ? 'dark' : ''} `}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className={`accordion ${theme == 'dark' ? 'dark' : ''} `}>Lorem ipsum dolor sit amet</button>
            <div className={`panel ${theme == 'dark' ? 'dark' : ''} `}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className={`accordion ${theme == 'dark' ? 'dark' : ''} `}>Pertanyaan Lorem ipsum dolor sit amet</button>
            <div className={`panel ${theme == 'dark' ? 'dark' : ''} `}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className={`accordion ${theme == 'dark' ? 'dark' : ''} `}>Pertanyaan sed do eiusmod tempor</button>
            <div className={`panel ${theme == 'dark' ? 'dark' : ''} `}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
export default FAQ
