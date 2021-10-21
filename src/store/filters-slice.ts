export interface FiltersState {
    genre: string;
    sortBy: string;
    sortOrder: string;
    search: string;
}

const initialState: FiltersState = {
    genre: 'all',
    sortBy: 'year',
    sortOrder: 'desc',
    search: ''
}

export function filtersReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'filters/genreChanged': {
            return { ...state, genre: action.payload }
        }
        case 'filters/sortingChanged': {
            return { ...state, sortBy: action.payload }
        }
        default:
            return state
    }
}
