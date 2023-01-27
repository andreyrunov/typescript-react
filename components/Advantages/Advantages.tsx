import React from 'react';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import { H } from '..';
import CheckIcon from './check-icon.svg';



export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <div className={styles.header}>
                        <CheckIcon />
                        <H tag='h3'>{a.title}</H>
                    </div>
                    <div className={styles.text}>{a.description}</div>
                </div>
            ))}
        </>

        // <div className={styles.advantages}>
        //     <H tag='h2'>Преимущества</H>
        //     <div className={styles.wrapper}>
        //         <div className={styles.header}>
        //             <CheckIcon />
        //             <H tag='h3'>Мобильность специалиста</H>
        //         </div>
        //         <div className={styles.text}>
        //             Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.
        //         </div>
        //     </div>
        //     <div className={styles.wrapper}>
        //         <div className={styles.header}>
        //             <CheckIcon />
        //             <H tag='h3'>Индивидуальный график работы</H>
        //         </div>
        //         <div className={styles.text}>
        //             Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.
        //         </div>
        //     </div>
        //     <div className={styles.wrapper}>
        //         <div className={styles.header}>
        //             <CheckIcon />
        //             <H tag='h3'>Контроль дохода</H>
        //         </div>
        //         <div className={styles.text}>
        //             Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону.
        //         </div>
        //     </div>
        //     <div className={styles.wrapper}>
        //         <div className={styles.header}>
        //             <CheckIcon />
        //             <H tag='h3'>Выбор работы</H>
        //         </div>
        //         <div className={styles.text}>
        //             Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах.
        //         </div>
        //     </div>
        //     <div>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</div>
        // </div>
    );
};