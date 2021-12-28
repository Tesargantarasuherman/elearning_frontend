import React from 'react'
import './Profile.css'
function Profile(props) {
    return (
        <div className="my-profile">
            <form action="" className="form-profile">
                <div className="body-input-form-profile">
                    <label htmlFor="">Nama Lengkap</label>
                    <input type="text" value={props.data_user.nama}/>
                </div>
                <div className="body-input-form-profile">
                    <label htmlFor="">Email</label>
                    <input type="text"  value={props.data_user.email}/>
                </div>
                <div className="body-input-form-profile">
                    <label htmlFor="">No Kontak</label>
                    <input type="text" />
                </div>
                <div className="body-input-form-profile">
                    <label htmlFor="">Alamat</label>
                    <input type="text" />
                </div>
                <div className="body-input-form-profile">
                    <label htmlFor="">No Rekening</label>
                    <input type="text" />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Profile
