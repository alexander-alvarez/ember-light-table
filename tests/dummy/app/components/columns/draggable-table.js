// BEGIN-SNIPPET draggable-table
import Ember from 'ember';
import TableCommon from '../../mixins/table-common';

const {
  computed
} = Ember;

export default Ember.Component.extend(TableCommon, {
  columns: computed(function() {
    return [{
      label: 'User Details',
      sortable: false,
      align: 'center',
      draggable: true,
      subColumns: [{
        label: 'Avatar',
        valuePath: 'avatar',
        width: '60px',
        sortable: false,
        draggable: true,
        cellComponent: 'user-avatar'
      }, {
        label: 'First',
        valuePath: 'firstName',
        width: '150px',
        draggable: true
      }, {
        label: 'Last',
        valuePath: 'lastName',
        width: '150px',
        draggable: true
      }]
    }, {
      label: 'Contact Information',
      sortable: false,
      align: 'center',
      draggable: true,
      subColumns: [{
        label: 'Address',
        valuePath: 'address',
        draggable: true
      }, {
        label: 'State',
        valuePath: 'state',
        draggable: true
      }, {
        label: 'Country',
        valuePath: 'country',
        draggable: true
      }]
    }];
  }),
  columns2: computed(function() {
    return [{
      label: 'User Details2',
      sortable: false,
      align: 'center',
      draggable: true,
      subColumns: [{
        label: 'Avatar2',
        valuePath: 'avatar',
        width: '60px',
        sortable: false,
        draggable: true,
        cellComponent: 'user-avatar'
      }, {
        label: 'First2',
        valuePath: 'firstName',
        width: '150px',
        draggable: true
      }, {
        label: 'Last',
        valuePath: 'lastName',
        width: '150px',
        draggable: true
      }]
    }, {
      label: 'Contact Information2',
      sortable: false,
      align: 'center',
      draggable: true,
      subColumns: [{
        label: 'Address2',
        valuePath: 'address',
        draggable: true
      }, {
        label: 'State2',
        valuePath: 'state',
        draggable: true
      }, {
        label: 'Country2',
        valuePath: 'country',
        draggable: true
      }]
    }];
  })
});
// END-SNIPPET
