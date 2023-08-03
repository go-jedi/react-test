import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectPizza } from '../redux/pizza/selectors.js';
import { fetchPizza } from '../redux/pizza/asyncActions.js';

const FullPizza = () => {
  const { item } = useSelector(selectPizza);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchNeedPizza() {
      try {
        dispatch(fetchPizza(id));
      } catch (error) {
        console.log('error in fetchNeedPizza -->', error);
        navigate('/');
      }
    }
    fetchNeedPizza();
  }, [dispatch, id, navigate]);

  if (!item) {
    return 'Идёт загрузка...';
  }

  return (
    <div className="container">
      <img src={item.imageUrl} alt="pizza" />
      <h2>{item.name}</h2>
      <h4>{item.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add" style={{ marginTop: '20px' }}>
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
