import React from 'react'
import './Commentar.css'
import moment from 'moment';
function Commentar(props) {
    return (
        <div className={`commentar ${props.theme == 'dark' ? 'dark' : ''}`}>
            <h1>
                Komentar( {parseInt(props.totalResult)})
            </h1>
            {props.isiKomentar && props.isiKomentar.length > 0
                ? props.isiKomentar.map((komentar) => {
                    return (
                        <>
                            <h2>{komentar.user.nama}</h2>
                            <p className='content-comment'>{komentar.isi_komentar}</p>
                            <p className='time-comment'>{moment(komentar.created_at).startOf('hour').fromNow()}</p>
                        </>
                    );
                })
                : null}
            <div className="btn-nav-comment">
                {props.page > 1 ? (
                    <button onClick={() => props.setPage((c) => c - 1)}>
                        <ion-icon name="chevron-back-outline"></ion-icon> sebelumnya 
                    </button>
                ) : null}
                {props.toResult < props.totalResult ? (
                    <button onClick={() => props.setPage((c) => c + 1)}>
                        selanjutnya <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                ) : null}
            </div>
            <form className='form-comment' onSubmit={props.submitKomentar}>
                <textarea name="" placeholder='Masukkan Komentar' name="isi_komentar"
                    onChange={props.handleFormKomentar}
                    value={props.formKomentar.isi_komentar}></textarea>
                <button type="submit">Buat Komentar</button>
            </form>
        </div>
    )
}

export default Commentar
