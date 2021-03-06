import React from 'react';
import {Link} from 'react-router';

var Pagination = React.createClass({
  render() {

    var page = +this.props.data.page,
        previous,
        next;

    if (page > 1) {
      var p = page - 1;
      previous = <Link to="list-paginate" params={{page: p}}>«</Link>
    }

    if (page < +this.props.data.totalPages) {
      var p = page + 1;
      next = <Link to="list-paginate" params={{page: p}}>»</Link>
    }

    return (
      <div class="row">
        <div className="pager">
          {previous} {this.props.data.page} / {this.props.data.totalPages} {next}
        </div>
      </div>
    );
  }
});

export default Pagination;
