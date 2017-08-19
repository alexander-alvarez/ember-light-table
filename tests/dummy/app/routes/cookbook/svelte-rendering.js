import TableRoute from '../table-route';


export default TableRoute.extend({
  model() {
    return this.get('store').query('user', { limit: 4000, page: 1 });
  }
});
