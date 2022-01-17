import React from 'react'
import './Commentar.css'
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
                            <span>{komentar.created_at}</span>
                            <p>{komentar.isi_komentar}</p>
                        </>
                    );
                })
                : null}
            <div className="btn-nav-comment">
                {props.page > 1 ? (
                    <button onClick={() => props.setPage((c) => c - 1)}>
                        sebelumnya
                    </button>
                ) : null}
                {props.toResult < props.totalResult ? (
                    <button onClick={() => props.setPage((c) => c + 1)}>
                        selanjutnya
                    </button>
                ) : null}
            </div>
            <form className='form-comment' onSubmit={props.submitKomentar}>
                <textarea name="" rows="4" placeholder='Masukkan Komentar' name="isi_komentar"
                    onChange={props.handleFormKomentar}
                    value={props.formKomentar.isi_komentar}></textarea>
                <button type="submit">Buat Komentar</button>
            </form>
        </div>
    )
}

export default Commentar
