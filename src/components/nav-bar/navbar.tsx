/* eslint-disable react/jsx-curly-brace-presence */

//? TODO: "Uncaught Error: useNavigate() may be used only in the context of a <Router> component.
import { useState } from 'react';
// ? import { useNavigate } from 'react-router-dom';
import { Group, Code } from '@mantine/core';
import {
    IconMail,
    IconHome,
} from '@tabler/icons-react';
import classes from './navbar.module.css';
import StopWatch from '@/pages/stop_watch-home';
import PileOuFace from '@/pages/pile-ou-face';
import Convertisseur from '@/pages/convertisseur';

const data = [
    
    { link: 'Stop-Watch', label: 'Stop-Watch', Component: <StopWatch /> },
    { link: 'Pile ou Face', label: 'Pile ou Face', Component: <PileOuFace /> },
    { link: 'Coinvertisseur de devises', label: 'Coinvertisseur de devises', Component: <Convertisseur /> },
    
];

 const NavbarSimple = () => {
    const [active, setActive] = useState('Billing');

    // ? const navigate = useNavigate();


    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <span>{item.label}</span>
        </a>

       
    ));

    // ? const goToHomePage = () => {
    // ?     navigate('../../pages/Home.page.tsx');
    // ? };

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    Avatar
                    <Code fw={700}>{'+32(0)488609209'}</Code>
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                    <IconMail className={classes.linkIcon} stroke={1.5} />
                    <a href="mailto:samueldemees@gmail.com">samueldemees@gmail.com</a>

                {/* <a href="#" className={classes.link} onClick={goToHomePage}> */}
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconHome className={classes.linkIcon} stroke={1.5} />
                    <span>Home Page</span>
                </a>
            </div>
        </nav>
    );
};

export default NavbarSimple;