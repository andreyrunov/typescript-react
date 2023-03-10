import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
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
import { motion } from 'framer-motion';
import Link from 'next/link';


export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: 0 },
    }

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        reviewRef.current?.focus();
    };

    return (
        <div className={className} {...props} ref={ref}>

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
                    <span className={styles.month}>/??????</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.labels}>{product.categories.map(c => <Label key={c} className={styles.category} color='ghost'>{c}</Label>)}</div>
                <div className={styles.priceTitle}>????????</div>
                <div className={styles.creditTitle}>????????????</div>
                <div className={styles.rateTitle}>
                    <a href='#ref' onClick={scrollToReview}>
                        {product.reviewCount} {declOfNum(product.reviewCount, ['??????????', '????????????', '??????????????'])}
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
                            <div className={styles.advTitle}>????????????????????????</div>
                            <div>{product.advantages}</div>
                        </div>}
                    {product.disadvantages &&
                        <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>????????????????????</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    }
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Link href={product.link}  target='_blank' rel='noreferrer'>
                        <Button appearance='primary' className={styles.btn}>???????????? ??????????????????</Button>
                    </Link>
                    <Button
                        className={styles.reviewButton}
                        appearance='ghost'
                        arrow={isReviewOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                        aria-expanded={isReviewOpened}
                    >???????????? ????????????</Button>
                </div>
            </Card>
            <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial={'hidden'}>
                <Card color='blue' className={styles.reviews} ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>
                    {product.reviews.map(r => (
                        <div key={r._id}>
                            <Review review={r} />
                            <Divider />
                        </div>
                    ))}
                    <ReviewForm productId={product._id} isOpened={isReviewOpened} />
                </Card>
            </motion.div>
        </div>
    );
}));
