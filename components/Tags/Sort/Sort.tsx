import React from 'react';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg';

export const Sort = ({  sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key == 'Enter' || e.key == 'Space') {
                        setSort(SortEnum.Rating);
                    }
                }}
                aria-selected={sort == SortEnum.Rating}
            >
                <SortIcon className={styles.sortIcon} /> По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key == 'Enter' || e.key == 'Space') {
                        setSort(SortEnum.Price);
                    }
                }}
                aria-selected={sort == SortEnum.Price}
            >
                <SortIcon className={styles.sortIcon} /> По цене
            </span>
        </div>
    )
};
