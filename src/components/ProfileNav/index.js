import React, { useRef } from 'react'

import useDropdown from '../ui/Dropdown'
import ProfileNavAvatar from './ProfileNavAvatar'
import ProfileNavList from './ProfileNavList'
import { StyledMenu } from './styles'

const ProfileMenu = () => {
  const userMenuEl = useRef(null)
  const menuDropEl = useRef(null)
  const [menuDropOpen, togglemenuDrop] = useDropdown(menuDropEl, userMenuEl)
  const onClick = () => togglemenuDrop()

  return (
    <>
      <div ref={userMenuEl} onClick={onClick} role="button" aria-hidden>
        <ProfileNavAvatar />
      </div>
      <StyledMenu ref={menuDropEl} onClick={togglemenuDrop} hidden={menuDropOpen} aria-label="Profile Menu">
        <ProfileNavList />
      </StyledMenu>
    </>
  )
}

export default ProfileMenu
