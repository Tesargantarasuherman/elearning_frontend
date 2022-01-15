import React from 'react'
import './HomeBenefit.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
function HomeBenefit() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={`home-benefit ${theme == 'dark' ? 'dark' : ''} `}>
            <div>
                <h1>Benefit Yang Kami Tawarkan</h1>
                <p>Belajar bersama platform ureshii lebih berkualitas dapat diakses kapan pun dan dimana saja.</p>
                <button>Try Free Class</button>
            </div>
            <div>
                <h1>Pengajar berkualitas</h1>
                <p>pengajar kami rata - rata memiliki sertifikat JLPT N-3</p>
                <h1>Kualitas Video</h1>
                <p>1080HD 60FPS</p>
                <h1>Module</h1>
                <p>Terdapat materi PDF dapat diunduh</p>
            </div>
            <div>
                <h1>Akses selamanya</h1>
                <p>Sekarang belajar bisa dimana saja dan kapanpun</p>
                <h1>Group Konsultasi</h1>
                <p>Sarana Group untuk Konsultasi Member</p>
                <h1>Tips & Trik</h1>
                <p>Ada cara ninja untuk cepat bisa bahasa jepang</p>
            </div>
        </div>
    )
}

export default HomeBenefit
