import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const HomePageButton = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/');
    };

  return (
    <Button onClick={goToHomePage}>
        Home
    </Button>
  );
};

export default HomePageButton;