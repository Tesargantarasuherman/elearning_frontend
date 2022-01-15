import React from 'react'
import './Commentar.css'
function Commentar(props) {
    return (
        <div>
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
                    <button onClick={() => props.setPage((c) => c + 1)} style={{ padding: '20px' }}>
                        selanjutnya
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default Commentar
