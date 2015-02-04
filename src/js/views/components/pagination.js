var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Pagination = React.createClass({
  render() {

    var page = +this.props.data.page,
        previous,
        next;

    if (page > 1) {
        var p = page - 1;
        previous = <Link to="list-paginate" params={{page: p}}>Previous</Link>
    }

    if (page < +this.props.data.totalPages) {
        var p = page + 1;
        next = <Link to="list-paginate" params={{page: p}}>Next</Link>
    }

    return (
      <div class="row">
        {previous} {this.props.data.page} / {this.props.data.totalPages} {next}
      </div>
    );
  }
});

module.exports = Pagination;
