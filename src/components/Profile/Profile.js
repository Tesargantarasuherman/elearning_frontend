import React from 'react'
import './Profile.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
function Profile(props) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <h1>Profile</h1>
            <div className={`my-profile ${theme == 'dark' ? 'dark' : ''} `}>
                <form action="" className="form-profile">
                    <div className="body-input-form-profile">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" value={props.data_user.nama} />
                    </div>
                    <div className="body-input-form-profile">
                        <label htmlFor="">Email</label>
                        <input type="text" value={props.data_user.email} />
                    </div>
                    <div className="body-input-form-profile">
                        <label htmlFor="">No Kontak</label>
                        <input type="text" />
                    </div>
                    <div className="body-input-form-profile">
                        <label htmlFor="">Alamat</label>
                        <input type="text" placeholder='alamat' />
                    </div>
                    <div className="body-input-form-profile">
                        <label htmlFor="">No Rekening</label>
                        <input type="text" />
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </>
    )
}

export default Profile
