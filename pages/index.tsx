import { GetStaticProps } from 'next';
import React from 'react';
import { H } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import { Items } from '../components/Tags/Items/Items';
// import Error from 'next/error';


function Home({ menu }: HomeProps): JSX.Element {
  // return <Error statusCode={404} />;

  return (
    <>
      <H tag='h1'>Агрегатор курсов онлайн</H>
      <Items menu={menu}/>
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