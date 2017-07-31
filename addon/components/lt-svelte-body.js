import Ember from 'ember';
import LTBodyComponent from './lt-body';
import layout from 'ember-light-table/templates/components/lt-svelte-body';
import cssStyleify from 'ember-light-table/utils/css-styleify';

const { computed } = Ember;

export default LTBodyComponent.extend({
  layout,

  style: computed('sharedOptions.height', function() {
    let height = this.get('sharedOptions.height');
    const [num, units] = height.split(/(.*[0-9])([a-z].*)/).filter((s) => s.length);
    // TODO do this dynamic
    const newHeight = `${Number.parseInt(num) - 5}${units}`;
    return cssStyleify({ height: newHeight, 'overflow-x': 'auto' });
  })
});
