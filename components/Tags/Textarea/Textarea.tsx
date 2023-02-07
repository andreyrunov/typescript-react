import React, { ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textAreaWrapper, className)}>
            <textarea className={cn(styles.text, {
                [styles.error]: error
            })} ref={ref} {...props} />
            {error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
Textarea.displayName = 'Textarea';