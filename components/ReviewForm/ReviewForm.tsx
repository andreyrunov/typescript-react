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
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                {/* в этом инпуте используем синтаксис неуправляемых компонентов (register) */}
                <Input 
                    {...register('name', { required: { value: true, message: 'Заполните ваше имя' }, maxLength: {value: 5, message: 'Длинна не более 5 символов'}})} 
                    className={styles.inputName} 
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input 
                    {...register('title', { required: { value: true, message: 'Заполните заголовок отзыва' }, maxLength: {value: 25, message: 'Длинна не более 25 символов'}})}
                    className={styles.inputHeader} 
                    placeholder='Заголовок отзыва'
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка</span>
                    <Controller
                        control={control}
                        name='rating'
                        // field позволяет управлять состоянием рейтинга
                        rules={{ required: { value: true, message: 'Укажите рейтинг' }}}
                        render={({ field }) => (
                            // в рейтинге используем синтаксис управляемых компонентов, поэтому оборачиваем его Controller'ом
                            <Rating 
                                isEditable 
                                rating={field.value} 
                                ref={field.ref} 
                                setRating={field.onChange}
                                error={errors.rating} 
                            />
                        )}
                    />

                </div>

                <Textarea 
                    {...register('description', { required: { value: true, message: 'Заполните текст отзыва' }, maxLength: { value: 250, message: 'Длинна не более 250 символов' } })} 
                    placeholder='Текст отзыва' 
                    className={styles.description}
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>

                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div className={styles.successDescription}>Спасибо! Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.close} />
            </div>
        </form>
    );
};
