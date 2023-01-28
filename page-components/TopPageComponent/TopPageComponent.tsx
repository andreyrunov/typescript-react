import React, { useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { H, HhData, Label, P, Product, Sort } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { SortEnum } from '../../components/Tags/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort})
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <H tag='h1'>{page.title}</H>
                {products && <Label color='grey' size='m'>{products.length}</Label>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p} />))}
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