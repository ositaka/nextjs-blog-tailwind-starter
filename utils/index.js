import { SHOW_PER_PAGE } from '../config'

//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date)
}

// count the page number
export function pageCount(number) {
  return Math.ceil(number / SHOW_PER_PAGE)
}

// Utility function to format a date
export function formatDate(date) {
  const options = {
    dateStyle: 'medium',
    timeZone: 'Portugal',
  }

  return new Intl.DateTimeFormat('en-UK', options).format(date)
}