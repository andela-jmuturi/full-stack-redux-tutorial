import React from 'react';

import Winner from './Winner'; // eslint-disable-line
import Vote from './Vote'; // eslint-disable-line

export default React.createClass({
  render: function () {
    return (
      <div>
        {
          this.props.winner
            ? <Winner ref='winner' winner={this.props.winner} />
            : <Vote {...this.props} />
        }
      </div>
    );
  }
});
