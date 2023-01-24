import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';


export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <div>
            <ul>
                {menu.map((m, ind) => (<li key={ind}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    );
};
