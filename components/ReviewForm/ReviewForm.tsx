import React from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { Input } from '../Tags/Input/Input';
import { Rating } from '../Tags/Rating/Rating';
import { Textarea } from '../Tags/Textarea/Textarea';
import { Button } from '../Tags/Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                {/* в этом инпуте используем синтаксис неуправляемых компонентов (register) */}
                <Input {...register('name')} className={styles.inputName} placeholder='Имя' />
                <Input {...register('title')} className={styles.inputHeader}  placeholder='Заголовок отзыва' />
                <div className={styles.rating}>
                    <span>Оценка</span>
                    <Controller 
                        control={control} 
                        name='rating'
                        // field позволяет управлять состоянием рейтинга
                        render={({field}) => (
                            // в рейтинге используем синтаксис управляемых компонентов, поэтому оборачиваем его Controller'ом
                            <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange}/>
                        )}
                    />
                    
                </div>

                <Textarea {...register('description')} placeholder='Текст отзыва' className={styles.description} />
                <div className={styles.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>

                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div className={styles.successDescription}>Спасибо! Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.close}/>
            </div>
        </form>
    );
};
