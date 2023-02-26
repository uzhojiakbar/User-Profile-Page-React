import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navigations } from '../../utils/navbar'
import { Container, Left, Right } from './style'
import Profile from '../../Assets/img/profile.jpg'
import OpenImage from '../OpenImage'
const Navbar = ({ OpenImages, setOpenImages }) => {
  return (<>
    <Container>
      <Left>
        {
          Navigations.map((v) => v.view && (
            <NavLink key={v.id} className={({ isActive }) => isActive ? 'link active' : 'link'}
              to={v.path}
            >
              {v.name}
            </NavLink>
          )
          )
        }
      </Left>
      <Right>
        <select className='select' name="" id="">
          <option value="">My Profile</option>
          <option value="">Exit</option>
        </select>
        <div onClick={() => setOpenImages(true)} className="profile">
          <img src={Profile} alt="" />
        </div>
      </Right>
    </Container>
    {OpenImages ? <OpenImage setOpenImages={setOpenImages} img={Profile} /> : ''}
  </>
  )
}

export default Navbar