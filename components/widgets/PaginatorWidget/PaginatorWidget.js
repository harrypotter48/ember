import React, { Component } from "react";
import PropTypes from "prop-types";
// import { MDBPagination, MDBBtn, MDBIcon } from 'mdbreact';
import { Pagination } from "react-bootstrap";
// import { ITEMS_PER_PAGE } from '../../../utils/paginationUtils';

const ITEMS_PER_PAGE = 5;

class PaginatorWidget extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func.isRequired,
  };

  state = {
    totalPages: Math.ceil(Number(this.props.total / ITEMS_PER_PAGE)),
    showFirstButton: false,
    showLastButton: false,
  };

  componentDidMount() {
    this.setState({
      totalPages: Math.ceil(Number(this.props.total / ITEMS_PER_PAGE)),
    });
  }

  updateActivePage = (currentPage) => {
    const { onPageChanged } = this.props;
    onPageChanged && onPageChanged(currentPage);
  };

  firtPage = () => {
    this.showFirstButton() && this.updateActivePage(1);
  };

  previousPage = () => {
    this.showPrevButton() && this.updateActivePage(this.props.current - 1);
  };

  nextPage = () => {
    this.showNextButton() && this.updateActivePage(this.props.current + 1);
  };

  lastPage = () => {
    this.showLastButton() && this.updateActivePage(this.state.totalPages);
  };

  showFirstButton = () => {
    if (this.props.current > 2) {
      return true;
    }
    return false;
  };

  showPrevButton = () => {
    if (this.props.current > 1) {
      return true;
    }
    return false;
  };

  showNextButton = () => {
    if (this.props.current < this.state.totalPages) {
      return true;
    }
    return false;
  };

  showLastButton = () => {
    if (this.props.current < this.state.totalPages - 1) {
      return true;
    }
    return false;
  };

  itemsToDisplay = (currentPage) => {
    const items = [];

    for (var i = 0; i < this.state.totalPages; i++) {
      let item = {};
      if (i === currentPage - 1) {
        item.active = true;
      }

      items.push(item);
    }

    return items;
  };

  renderItem = (icon, text, onClick, isShowing) => (
    <Pagination.Item
      className="px-2"
      color="white"
      variant="info"
      onClick={onClick}
      disabled={isShowing() ? false : true}
      key={text}
    >
      <a href="#">{text}</a>
    </Pagination.Item>
  );

  render() {
    return (
      this.props.total > 0 && (
        <Pagination aria-label="Page navigation example">
          {this.renderItem(
            "angle-double-left",
            "First",
            this.firtPage,
            this.showFirstButton
          )}
          {this.renderItem(
            "angle-left",
            "Prev",
            this.previousPage,
            this.showPrevButton
          )}
          {this.itemsToDisplay(this.props.current).map((item, index) => {
            return this.renderItem(
              "",
              String(index + 1),
              () => this.updateActivePage(index + 1),
              () => true
            );
          })}
          {this.renderItem(
            "angle-right",
            "Next",
            this.nextPage,
            this.showNextButton
          )}
          {this.renderItem(
            "angle-double-right",
            "Last",
            this.lastPage,
            this.showLastButton
          )}
        </Pagination>
      )
    );
  }
}

export default PaginatorWidget;
