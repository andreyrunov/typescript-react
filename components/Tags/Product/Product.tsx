import React, { useRef, useState } from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../../Card/Card';
import { Rating } from '../Rating/Rating';
import { Label } from '../../Labels/Label';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review } from '../../Review/Review';
import { ReviewForm } from '../../ReviewForm/ReviewForm';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    
    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div className={className} {...props}>

            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Label className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Label>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}
                    <span className={styles.month}>/мес</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.labels}>{product.categories.map(c => <Label key={c} className={styles.category} color='ghost'>{c}</Label>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href='#ref' onClick={scrollToReview}>
                        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div key={c.name} className={styles.characteristics}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages &&
                        <div className={styles.advantages}>
                            <div className={styles.advTitle}>Преимущества</div>
                            <div>{product.advantages}</div>
                        </div>}
                    {product.disadvantages &&
                        <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>Недостатки</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    }
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button appearance='primary'>Узнать подробнее</Button>
                    <Button 
                        className={styles.reviewButton} 
                        appearance='ghost' 
                        arrow={isReviewOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card color='blue' className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
            })} ref={reviewRef}>
                {product.reviews.map(r => (
                    <div key={r._id}>
                        <Review  review={r} />
                        <Divider />
                    </div>
                ))}
                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    );
};
