/* eslint-disable no-await-in-loop */
import {
  setSearchId,
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  fetchTicketsComplete,
  setActiveFilters,
  setFilteredTickets,
} from './actions';

const MAX_RETRIES = 6;
const RETRY_DELAY = 1000;

export const applyFilters = () => (dispatch, getState) => {
  const { allTickets, activeFilters } = getState().tickets;

  if (!activeFilters.length || activeFilters.includes('all')) {
    dispatch(setFilteredTickets(allTickets));
    return;
  }

  const filtered = allTickets.filter((ticket) => {
    const stopsCount = ticket.segments[0].stops.length;
    return activeFilters.includes(stopsCount.toString());
  });

  dispatch(setFilteredTickets(filtered));
};

export const fetchTickets = () => async (dispatch, getState) => {
  try {
    dispatch(fetchTicketsRequest());

    // Получаем searchId
    if (!getState().tickets.searchId) {
      const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search');
      const { searchId } = await searchResponse.json();
      dispatch(setSearchId(searchId));
    }

    const { searchId } = getState().tickets;
    let stop = false;
    let retries = 0;

    while (!stop && retries < MAX_RETRIES) {
      try {
        const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

        if (response.status === 500) throw new Error('Server error');

        const data = await response.json();
        dispatch(fetchTicketsSuccess(data.tickets));
        //------------------------------
        console.log(data.tickets);
        if (data.tickets.length === 0) dispatch(fetchTicketsComplete());
        //--------------------------
        dispatch(applyFilters());

        stop = data.stop;

        retries = 0;
      } catch (error) {
        retries++;
        if (retries >= MAX_RETRIES) {
          dispatch(fetchTicketsFailure('Превышено количество попыток'));
          break;
        }
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      }
    }

    if (!stop) dispatch(fetchTicketsComplete());
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message));
  }
};

export default fetchTickets;
