import React, { useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import Logo from '../logo.svg';
import styles from './Header.module.css';
import cn from 'classnames';
import { ButtonIcon } from '../../components/Tags/ButtonIcon/ButtonIcon';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%',

        }
    };

    const isMainPage = () => {
        if (router.asPath === '/') {
            return '#';
        }
        return '/';
    };

    return (
        <>
            <header className={cn(className, styles.header)} {...props}>
                <Link href={isMainPage()}>
                    <Logo />
                </Link>
                <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
                <motion.div
                    className={styles.mobileMenu}
                    variants={variants}
                    initial={'closed'}
                    animate={isOpened ? 'opened' : 'closed'}
                >
                    <Sidebar />
                    <ButtonIcon className={styles.menuClose} onClick={() => setIsOpened(false)} appearance='white' icon='close' />
                </motion.div>
            </header>
        </>
    );
};
