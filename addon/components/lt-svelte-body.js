import Ember from 'ember';
import LTBodyComponent from './lt-body';
import layout from 'ember-light-table/templates/components/lt-svelte-body';
import cssStyleify from 'ember-light-table/utils/css-styleify';

const { computed } = Ember;

export default LTBodyComponent.extend({
  layout,

  style: computed('sharedOptions.height', function() {
    let height = this.get('sharedOptions.height');
    return cssStyleify({ height, 'overflow-x': 'auto' });
  })
});
