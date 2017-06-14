// BEGIN-SNIPPET table-common
import Ember from 'ember';
import Table from 'ember-light-table';
import { task } from 'ember-concurrency';

const {
  inject,
  isEmpty,
  computed
} = Ember;

export default Ember.Mixin.create({
  store: inject.service(),

  page: 0,
  limit: 10,
  dir: 'asc',
  sort: 'firstName',

  isLoading: computed.oneWay('fetchRecords.isRunning'),
  canLoadMore: true,
  enableSync: true,

  model: null,
  meta: null,
  columns: null,
  table: null,

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('model'), { enableSync: this.get('enableSync') });
    let table2 = new Table([...this.get('columns2')], this.get('model'), { enableSync: this.get('enableSync') });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
    this.set('table2', table2);

  },

  fetchRecords: task(function*() {
    let records = yield this.get('store').query('user', this.getProperties(['page', 'limit', 'sort', 'dir']));
    this.get('model').pushObjects(records.toArray());
    this.set('meta', records.get('meta'));
    this.set('canLoadMore', !isEmpty(records));
  }).restartable(),

  actions: {
    onScrolledToBottom() {
      if (this.get('canLoadMore')) {
        this.incrementProperty('page');
        this.get('fetchRecords').perform();
      }
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
          canLoadMore: true,
          page: 0
        });
        this.get('model').clear();
      }
    }
  }
});
// END-SNIPPET
