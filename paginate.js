function Paginate(arrLength, limit) {
  let p = {};

  // initialize variables
  let _length = arrLength,
      _limit = limit,
      _pageCount = 0,
      _curPage = 0;

  // init function
  (function() {
    _setPageCount();
  })();

  // private functions
  function _setPageCount() {
    _pageCount = Math.ceil(_length / _limit);
  };

  // getters
  p.getLength = () => _length;
  p.getLimit = () => _limit;
  p.getTotalPages = () => _pageCount;
  p.getPage = () => _curPage;
  p.getLowerIndex = () => _curPage * _limit + 1;
  p.getUpperIndex = () => {
    if (p.canMove(1)) {
      return _curPage * _limit + _limit;
    } else {
      return _length;
    }
  };

  // setters
  p.setLength = (input) => {
    input.length ? _length = input.length : _length = input;
    _setPageCount();
    p.resetCurrentPage();
  };

  p.setLimit = (input) => {
    _limit = input;
    _setPageCount();
    p.resetCurrentPage();
  };

  p.setPage = (direction) => {
    if (p.canMove(direction)) {
      _curPage += direction;
    }
  };

  // utility functions
  p.canMove = (direction) => (_curPage + direction > -1) && (_curPage + direction < _pageCount);
  p.resetCurrentPage = () => _curPage = 0;

  return p;
};
