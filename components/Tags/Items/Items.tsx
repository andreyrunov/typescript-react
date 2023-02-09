import React from 'react';
import { ItemsProps } from './Items.props';
import styles from './Items.module.css';
import { H } from '../H/H';
import Link from 'next/link';
import { Button } from '../Button/Button';

export const Items = ({ menu }: ItemsProps): JSX.Element => {

    return (
        <>
            {
                menu.map((element) => (
                    <div key={element._id.secondCategory} className={styles.item}>
                        <div className={styles.item__wrapper}>
                            <H tag='h3'>{element._id.secondCategory}</H>
                            <div className={styles.linksBlock1}>
                                {element.pages.map((el, ind) => {
                                    if (ind <= 4) {
                                        return (
                                            <div key={el.alias} className={styles.links}>
                                                <Link href={'/courses/' + el.alias}>{el.title}</Link>
                                            </div>
                                        );
                                    }
                                })}
                                <hr className={styles.hr} />
                                <Link href={'/courses/' + element.pages[0].alias}>
                                    <Button appearance="ghost" >Подробнее</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};
