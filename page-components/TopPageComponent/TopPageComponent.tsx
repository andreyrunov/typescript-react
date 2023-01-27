import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { H, HhData, Label, P, Sort } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { SortEnum } from '../../components/Tags/Sort/Sort.props';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <H tag='h1'>{page.title}</H>
                {products && <Label color='grey' size='m'>{products.length}</Label>}
                <Sort sort={SortEnum.Rating} setSort={() => { }}/>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <H tag='h2'>Вакансии - {page.category}</H>
                <Label color='red' size='m'>hh.ru</Label>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <H tag='h2'>Преимущества</H>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <H tag='h2'>Получаемые навыки</H>
            {page.tags.map(t => <Label key={t} color='primary'>{t}</Label>)}
        </div>
    );
};