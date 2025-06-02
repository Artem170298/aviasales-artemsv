/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
export const SET_SEARCH_ID = 'SET_SEARCH_ID';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const FETCH_TICKETS_COMPLETE = 'FETCH_TICKETS_COMPLETE';
export const SET_ACTIVE_FILTERS = 'SET_ACTIVE_FILTERS';
export const SET_FILTERED_TICKETS = 'SET_FILTERED_TICKETS';

export const setSearchId = (searchId) => ({ type: SET_SEARCH_ID, payload: searchId });
export const fetchTicketsRequest = () => ({ type: FETCH_TICKETS_REQUEST });
export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});
export const fetchTicketsComplete = () => ({ type: FETCH_TICKETS_COMPLETE });
export const setActiveFilters = (filters) => ({
  type: SET_ACTIVE_FILTERS,
  payload: filters,
});
export const setFilteredTickets = (tickets) => ({
  type: SET_FILTERED_TICKETS,
  payload: tickets,
});
