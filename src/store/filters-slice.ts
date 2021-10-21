export interface FiltersState {
    genre: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    search: string;
}

const initialState: FiltersState = {
    genre: 'all',
    sortBy: 'release_date',
    sortOrder: 'desc',
    search: ''
}

export function filtersReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'filters/genreChanged': {
            return { ...state, genre: action.payload }
        }
        case 'filters/sortingChanged': {
            const {sortBy, sortOrder} = action.payload;
            return { ...state, sortBy, sortOrder }
        }
        default:
            return state
    }
}
