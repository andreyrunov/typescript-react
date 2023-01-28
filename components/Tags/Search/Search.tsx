import React, { KeyboardEvent, useState } from 'react';
import { SearchProps } from './Search.props';
import { Button } from '../Button/Button';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import SearchIcon from './search-icon.svg';
import { useRouter } from 'next/router';

export const Search = ({ children, className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input 
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button 
                appearance='primary'
                className={styles.button}
                onClick={() => goToSearch() }
            >
                <SearchIcon />
            </Button>
        </div>
    );
};
