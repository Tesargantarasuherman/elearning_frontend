import React from 'react'
import './CourseCheckoutComponent.css'
function CourseCheckoutComponent() {
    return (
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
            </div>
        </div>
    )
}

export default CourseCheckoutComponent
