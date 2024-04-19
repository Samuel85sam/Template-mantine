import { Button, Group } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavLnks = () => {

    const navigate = useNavigate();

  return (
      <Group justify="center" mt="xl">
          <Button onClick={() => navigate('stop_watch')}>Stop-Watch</Button>
          <Button onClick={() => navigate('pile_ou_face')}>"Pile ou Face"</Button>
          <Button onClick={() => navigate('convertisseur')}>Convertisseur de devises</Button>
      </Group>
  )
}

export default NavLnks