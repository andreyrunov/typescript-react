import React, { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); // тк звездочки у рейтинга это JSX элементы, поэтому у useState указываем тип <JSX.Element>

    useEffect(() => {
        constructRating(rating)
    }, [rating])
    

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, ind: number) => {
            return (

                <StarIcon key={ind} className={cn(styles.star, {
                    [styles.filled]: ind < currentRating
                })} />
            );
        });
        setRatingArray(updateArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((el, i) => (<span key={i}>{el}</span>))}
        </div>
    );
};
