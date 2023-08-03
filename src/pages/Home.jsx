import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPizza } from '../redux/pizza/selectors.js';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice.js';
import { selectFilter } from '../redux/filter/selectors.js';
import { fetchPizzas } from '../redux/pizza/asyncActions.js';

import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import PizzaBlock from '../components/PizzaBlock/index.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import Pagination from '../components/Pagination/index.jsx';

const Home = () => {
  const { searchValue, categoryId, currentPage, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    try {
      dispatch(setCategoryId(id));
    } catch (error) {
      console.log('error in onChangeCategory -->', error);
    }
  };

  const onChangePage = (number) => {
    try {
      dispatch(setCurrentPage(number));
    } catch (error) {
      console.log('error in onChangePage -->', error);
    }
  };

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        try {
          const category = categoryId > 0 ? `category=${categoryId}` : '';
          const search = searchValue ? `search=${searchValue}` : '';
          const formData = {
            currentPage: currentPage,
            category: category,
            sort: sort,
            search: search,
          };
          dispatch(fetchPizzas(formData));
        } catch (error) {
          console.log('error in fetchData -->', error);
        }
      };
      fetchData();
      window.scrollTo(0, 0);
    } catch (error) {
      console.log('error in useEffect -->', error);
    }
  }, [categoryId, sort, searchValue, currentPage, dispatch]);

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(index) => onChangeCategory(index)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'rejected' ? (
        <div className="content__error-info">
          <h2>
            Ошибка загрузки <span>😕</span>
          </h2>
          <p>Произошла ошибка загрузки пицц.</p>
        </div>
      ) : (
        <div>
          <div className="content__items">{status === 'fulfilled' ? pizzas : skeletons}</div>
          <Pagination currentPage={currentPage} onChangePage={(number) => onChangePage(number)} />
        </div>
      )}
    </div>
  );
};

export default Home;
