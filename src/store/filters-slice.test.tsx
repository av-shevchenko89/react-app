import reducer, {
  initialState,
  genreChanged,
  sortingChanged,
  searchChanged,
  selectGenre,
  selectSorting,
  selectSearch,
} from './filters-slice';

test('should return the initial state', () => {
  // @ts-ignore
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should set genre', () => {
  const previousState = initialState;

  expect(reducer(previousState, genreChanged('Comedy'))).toEqual({
    genre: 'Comedy',
    sortBy: 'release_date',
    sortOrder: 'desc',
    search: '',
    searchBy: 'title',
    limit: 12,
  });
});

test('should set sorting', () => {
  const previousState = initialState;

  expect(
    reducer(
      previousState,
      sortingChanged({
        sortBy: 'title',
        sortOrder: 'asc',
      })
    )
  ).toEqual({
    genre: '',
    sortBy: 'title',
    sortOrder: 'asc',
    search: '',
    searchBy: 'title',
    limit: 12,
  });
});

test('should set search', () => {
  const previousState = initialState;

  expect(reducer(previousState, searchChanged('Search'))).toEqual({
    genre: '',
    sortBy: 'release_date',
    sortOrder: 'desc',
    search: 'Search',
    searchBy: 'title',
    limit: 12,
  });
});

test('should select genre', () => {
  const selected = selectGenre.resultFunc(initialState);
  expect(selected).toBe('');
});

test('should select sorting', () => {
  const selected = selectSorting.resultFunc(initialState);
  expect(selected).toEqual({ sortBy: 'release_date', sortOrder: 'desc' });
});

test('should select genre', () => {
  const selected = selectSearch.resultFunc(initialState);
  expect(selected).toBe('');
});
