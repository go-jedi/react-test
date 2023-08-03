export const selectCart = (state) => state.cart;

// selectCartItemById - функция которая получает в параметрах id и возвращает другую ф-цию
export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
