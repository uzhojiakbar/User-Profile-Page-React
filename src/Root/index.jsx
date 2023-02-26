import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Navigations } from '../utils/navbar'
import './style.css'

const Root = () => {
    const [OpenImages, setOpenImages] = useState(false)
    return (
        <div className='Back-main'>
            <div className="main">
                <Navbar OpenImages={OpenImages} setOpenImages={setOpenImages} />
                <Routes>
                    {
                        Navigations.map((v) => <Route key={v.id} path={v.path} element={v.element} />)
                    }
                </Routes>
            </div>
        </div>
    )
}

export default Root