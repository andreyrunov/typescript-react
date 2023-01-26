import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { H, HhData, Label } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <H tag='h1'>{page.title}</H>
                {products && <Label color='grey' size='m'>{products.length}</Label>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <H tag='h2'>Вакансии - {page.category}</H>
                <Label color='red' size='m'>hh.ru</Label>
            </div>
            {firstCategory  == TopLevelCategory.Courses &&<HhData {...page.hh} />}
        </div>
    );
};