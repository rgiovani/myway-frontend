import React, { useState, useMemo, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import ProfileNav from '../ProfileNav'
import Box from '../ui/Box'
import Flex from '../ui/Flex'
import { Container } from '../ui/Grid'
import Nav from '../ui/nav'
import { useStyles, StyledItem } from './styles'

export default function Header() {
  const history = useHistory()
  const styles = useStyles()
  const location = useLocation()

  const [selected, setSelect] = useState('')

  const items = useMemo(
    () => ({
      cursos: { label: 'Cursos', to: '' },
      tradutores: { label: 'Tradutores', to: 'anuncio-tradutor' },
    }),
    []
  )

  const pathname = useMemo(() => {
    return `/${location.pathname.split('/').slice(2, 3).join('')}`
  }, [location])

  useEffect(() => {
    const itemKey = Object.keys(items).find(key => items[key].to === pathname)

    if (itemKey) {
      setSelect(itemKey)
    } else {
      setSelect('')
    }
  }, [items, pathname])

  const handleChange = (item, _key) => {
    const goto = `/${item.to}`
    history.push(goto)
  }

  return (
    <div style={{ height: '80px' }}>
      <div className={styles.header}>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <div style={{ cursor: 'pointer', color: '#fff' }} onClick={() => history.push('/')}>My Way</div>
            <Flex pr="30px">
              <Box height="80px">
                <Nav onChange={handleChange} selected={selected} variant="header" items={items} />
              </Box>
              <StyledItem active={pathname === '/profile'}>
                <ProfileNav />
              </StyledItem>
            </Flex>
          </Flex>
        </Container>
      </div>
    </div>
  )
}
