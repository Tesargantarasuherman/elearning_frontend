import React from 'react'
import './CourseCheckoutComponent.css'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
function CourseCheckoutComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={`checkout-body ${theme == 'dark' ? 'dark' : ''} `}>
            <div className="course-checkout-body">
                <div className="course-checkout-left">
                    <h1>Keranjang</h1>
                    <h2>Ringkasan Harga</h2>
                    <div className="list-checkout">
                        <div>
                            <img src="https://class.buildwithangga.com/storage/assets/thumbnails/BWAFUI%201.jpg" alt="" srcset="" />
                        </div>
                        <div>
                            <p>lorem</p>
                        </div>
                        <div>
                            <p>Rp. 700.000</p>
                        </div>
                    </div>
                    <div className="checkout-voucher">
                        <div>
                            <input type="text" placeholder='Masukkan Kode Promo' />
                        </div>
                        <div>
                            <button>Terapkan</button>
                        </div>
                    </div>
                    <div className="total-checkout">
                        <div>
                            <p>Total</p>
                        </div>
                        <div>
                            <p>Rp. 700.000</p>
                        </div>
                    </div>
                </div>
                <div className="course-checkout-right">
                    <div>
                        <button>BNI</button>
                        <button>BRI</button>
                        <button>MANDIRI</button>
                    </div>
                    <div>
                        <div>
                            <p>Nama Bank</p>
                            <p>BNI</p>
                        </div>
                        <div>
                            <p>No Rekening</p>
                            <p>08131131</p>
                        </div>
                        <div>
                            <p>Atas Nama</p>
                            <p>lorem</p>
                        </div>
                    </div>
                    <button>Konfirmasi Pembayaran</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCheckoutComponent
