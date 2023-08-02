import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Divider from '@mui/material/Divider';
import "../styles/Modal.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Container>
      <div className='ModalContentContainer'>
        <div className='ModalDataContainer'>
          <h3>123</h3>
          <h3>123</h3>
          <h3>123</h3>
        </div>
        <div className='ModalStuffContainer'>
          <h3>123</h3>
          <h3>123</h3>
          <h3>123</h3>
        </div>
      </div>
    </Container>
  );
}