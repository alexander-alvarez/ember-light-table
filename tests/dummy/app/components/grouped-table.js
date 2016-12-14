// BEGIN-SNIPPET grouped-table
import Ember from 'ember';
import TableCommon from '../mixins/table-common';

const {
  computed
} = Ember;

export default Ember.Component.extend(TableCommon, {
  classNameBindings: [':grouped-table'],
  columns: computed(function() {
    return [{
      label: 'User Details',
      sortable: false,
      align: 'center',

      subColumns: [{
        label: '',
        width: '10px',
        sortable: false
      }, {
        label: 'First',
        valuePath: 'firstName',
        width: '150px'
      }, {
        label: 'Last',
        valuePath: 'lastName',
        width: '150px'
      }]
    }, {
      label: 'Contact Information',
      sortable: false,
      align: 'center',

      subColumns: [{
        label: 'Address',
        valuePath: 'address'
      }, {
        label: 'State',
        valuePath: 'state'
      }, {
        label: 'Country',
        valuePath: 'country'
      }]
    }];
  })
});
// END-SNIPPET
