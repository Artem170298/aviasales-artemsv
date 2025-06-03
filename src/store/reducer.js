import {
  SET_SEARCH_ID,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_COMPLETE,
  SET_ACTIVE_FILTERS,
  SET_FILTERED_TICKETS,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_DURATION,
  SET_SORT_BY_OPTIMAL,
} from './actions';

const initialState = {
  searchId: null,
  allTickets: [],
  filteredTickets: [],
  activeFilters: [],
  loading: false,
  error: null,
  isComplete: false,
  sortBy: '',
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_BY_PRICE:
      return { ...state, sortBy: 'price' };

    case SET_SORT_BY_DURATION:
      return { ...state, sortBy: 'duration' };

    case SET_SORT_BY_OPTIMAL:
      return { ...state, sortBy: 'optimal' };

    case SET_SEARCH_ID:
      return { ...state, searchId: action.payload };

    case FETCH_TICKETS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        allTickets: [...state.allTickets, ...action.payload],
        loading: false,
      };

    case FETCH_TICKETS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FETCH_TICKETS_COMPLETE:
      return { ...state, loading: false, isComplete: true };

    case SET_ACTIVE_FILTERS:
      return { ...state, activeFilters: action.payload };

    case SET_FILTERED_TICKETS:
      return { ...state, filteredTickets: action.payload };

    default:
      return state;
  }
}

export { ticketsReducer };
