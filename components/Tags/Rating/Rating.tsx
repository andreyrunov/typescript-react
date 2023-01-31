import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); // тк звездочки у рейтинга это JSX элементы, поэтому у useState указываем тип <JSX.Element>

    useEffect(() => {
        constructRating(rating);
    }, [rating]);


    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, ind: number) => {
            return (
                <span key={ind} className={cn(styles.star, {
                    [styles.filled]: ind < currentRating,
                    [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(ind + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(ind + 1)}
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(ind + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props} ref={ref}>
            {ratingArray.map((el, i) => (<span key={i}>{el}</span>))}
        </div>
    );
});
Rating.displayName = 'Rating';