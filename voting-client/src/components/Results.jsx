import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/* eslint-disable no-unused-vars */
import Winner from './Winner';
import Tally from './Tally';
/* eslint-enable no-unused-vars */

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function () {
    return (
      this.props.winner
      ? <Winner ref='winner' winner={this.props.winner} />
      : <div className='results'>
          <Tally pair={this.props.pair} tally={this.props.tally} />
          <div className='management'>
            <button ref='next'
              className='next'
              onClick={this.props.next}>
              Next
            </button>
          </div>
        </div>
    );
  }
});
