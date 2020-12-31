import React, { useEffect, useState } from 'react'
import { FiLogOut, FiBookOpen } from 'react-icons/fi'
import { GiTeacher } from 'react-icons/gi'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


import jwt_decode from "jwt-decode";

import { logOutRequest } from "../../../store/modules/auth/actions";
import Item from '../ProfileNavItem'
import { StyledFullName, StyledEmail } from './styles'

const ProfileNavList = () => {
  const history = useHistory()
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token)
  const [userInfo, setUserInfo] = useState({})

  const handleLogout = () => {
    dispatch(logOutRequest())
  }

  useEffect(() => {
    const decoded_token = jwt_decode(token.access_token)
    setUserInfo(decoded_token)
  }, [token])

  const handlePageChange = (path) => {
    history.push(path)
  }

  return (
    <>
      <div>
        <StyledFullName>{userInfo.firstName} {userInfo.lastName}</StyledFullName>
        <StyledEmail>{userInfo.email}</StyledEmail>
      </div>
      <div>
        <Item icon={<FiBookOpen />} onClick={() => handlePageChange('/meus-cursos')}>
          Meus cursos
        </Item>
        <Item divider />
        {
          userInfo.typeUser === 'Student' && (
            <Item icon={<GiTeacher />} onClick={() => handlePageChange('/tornar-professor')}>
              Torne-se Professor
            </Item>
          )
        }
        {userInfo.typeUser === 'Teacher' && (
          <Item icon={<GiTeacher />} onClick={() => handlePageChange('/painel-professor')}>
            Painel Professor
          </Item>
        )}
        <Item divider />
        <Item icon={<FiLogOut />} onClick={handleLogout}>
          Sair
        </Item>
      </div>
    </>
  )
}

export default ProfileNavList
