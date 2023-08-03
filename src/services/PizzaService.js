import $api from '../http/index';

export default class PizzaService {
  static async fetchPizzas(currentPage, category, sort, search) {
    return $api.get(
      `items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=${sort.orderBy}&${search}`,
    );
  }
  static async fetchPizza(id) {
    return $api.get(`https://64c41c8667cfdca3b660a1b2.mockapi.io/items/${id}`);
  }
}
