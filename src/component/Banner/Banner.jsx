import React from 'react'
import Button from '../Button/Button'
import "./Banner.scss"

function Banner() {
    return (
        <section className="banner">
            <div className='banner-container'>
                <div className='banner-detail'>
                    <h3>Thuecanho.com</h3>
                    <p className="text-middle">Expat housing service. Work with our real estate agents in DaNang.</p>
                    <p> 0917 321 218</p>
                </div>
                <div className="banner-button">
                    <Button name="ĐĂNG TIN" modified="button-post" />
                    <Button name="TÌM KIẾM" modified="button-search"/>
                </div>
            </div>
        </section>
    )
}

export default Banner
