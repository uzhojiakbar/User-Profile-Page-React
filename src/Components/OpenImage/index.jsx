import React, { useState } from 'react'
import { Container, Controls, Image } from './style'

const OpenImage = ({ img, setOpenImages }) => {
    const [rotate, setRotate] = useState(0)
    const onRotate = () => {
        if (rotate == 0) {
            setRotate(90)
        }
        if (rotate == 90) {
            setRotate(180)
        }
        if (rotate == 180) {
            setRotate(270)
        }
        if (rotate == 270) {
            setRotate(360)
        }
        if (rotate == 360) {
            setRotate(0)
        }
    }
    console.log(rotate);
    return (
        <Container>
            <Controls>
                <div className="button download">
                    <a download={'Picture_By_Profile_Page'} href={img}>
                        <i className="fa-solid fa-arrow-down icon"></i>
                    </a>
                </div>
                <div onClick={() => { onRotate() }} className="button exit">
                    <i className="fa-solid fa-rotate-right icon"></i>
                </div>
                <div onClick={() => setOpenImages(false)} className="button exit">
                    <i className="fa-solid fa-xmark icon"></i>
                </div>
            </Controls>
            <Image rotate={rotate}>
                <img src={img} alt="" />
            </Image>
        </Container>
    )
}

export default OpenImage