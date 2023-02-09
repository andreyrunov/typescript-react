import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '../../components/Tags/Search/Search';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    const router = useRouter();

    const isMainPage = () => {
        if (router.asPath === '/') {
            return '#';
        }
        return '/';
    };
    return (
        <>
            <div className={cn(className, styles.sidebar)} {...props}>
                <Link href={isMainPage()}>
                    <Logo className={styles.logo} />
                </Link>
                <Search />
                <Menu />
            </div>
        </>
    )
};
