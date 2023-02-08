import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import { Button, H, Input, Label, P, Rating, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
// import Error from 'next/error';


function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [rating, setRating] = useState<number>(4);

  // return <Error statusCode={404} />;

  useEffect(() => {
    console.log('Counter ' + counter);

    return function cleanUp() {
      console.log('Unmount');
    };
  },);


  return (
    <>
      <H tag='h1'>{counter}</H>
      <Button appearance='primary' onClick={(() => setCounter(count => count + 1))}>Увеличить счетчик</Button>
      <Button appearance='ghost' onClick={(() => setCounter(count => count - 1))}>Уменьшить счетчик</Button>
      <P size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
      <P>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
      <P size='s'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</P>
      <Label size='s' color='ghost' >ghost</Label>
      <Label size='m' color='grey' >grey</Label>
      <Label color='green' >green</Label>
      <Label size='s' color='primary' >primary</Label>
      <Label size='s' color='red' >red</Label>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='Имя' />
      <Textarea placeholder='Текст отзыва' />
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}