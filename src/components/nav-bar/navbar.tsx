/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconMail,
    IconHome,
    IconId,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const data = [
    { link: '/', label: 'Home' },
    { link: '/stop_watch', label: 'Stop-Watch' },
    { link: '/pile_ou_face', label: 'Pile ou Face' },
    { link: '/convertisseur', label: 'Coinvertisseur de devises' },
    { link: '/Villa', label: 'Location Villa' },
];

const NavbarSimple = () => {
    const [active, setActive] = useState('Billing');
    // ? const navigate = useNavigate();
    const links = data.map((item) => (
        
        <Link
            className={classes.link}
            to={item.link}
            key={item.label}
            data-active={item.label === active || undefined}
            onClick={() => { setActive(item.label); }}
        >
            <span>{item.label}</span>
        </Link>
   
    ));

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
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconHome className={classes.linkIcon} stroke={1.5} />
                    <span>Home Page</span>
                </a>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconId className={classes.linkIcon} stroke={1.5} />
                    <span>Curiculum Vitae</span>

                </a>
            </div>
        </nav>
    );
};

export default NavbarSimple;