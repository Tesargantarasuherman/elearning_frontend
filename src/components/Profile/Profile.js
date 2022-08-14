import React from 'react'
import './Profile.css'
import { connect } from 'react-redux'

export const Profile = (props) => {
    return (
        <div className={`body-profile ${props.theme == 'dark' ? 'dark' : ''} ${props.sidebar ?'back':''} `}>
            <h1>Profiles</h1>
            <div className={`my-profile ${props.theme == 'dark' ? 'dark' : ''} `}>
                <form action="" className="form-profile">
                    <div className="body-input-form-profile">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text" value={null} />
                    </div>
                    <div className="body-input-form-profile">
                        <label htmlFor="">Email</label>
                        <input type="text" value={null} />
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
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme:state.theme.theme,
    user:state.auth.data_user,
    sidebar:state.sidebar.sidebar
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
