// This function converts a human-readable timestamp into a Date object
function convertToDate(timestamp: string) {
  const [value, unit] = timestamp.split(' ')
  const date = new Date()

  switch (unit) {
    case 'm':
    case 'minutes':
    case 'minute':
    case 'm ago':
      date.setMinutes(date.getMinutes() - parseInt(value))
      break
    case 'h':
    case 'hour':
    case 'hours':
    case 'h ago':
      date.setHours(date.getHours() - parseInt(value))
      break
    case 'day':
    case 'days':
    case 'day ago':
      date.setDate(date.getDate() - parseInt(value))
      break
    case 'week':
    case 'weeks':
    case 'week ago':
      date.setDate(date.getDate() - 7 * parseInt(value))
      break
    // Add more cases as needed
    default:
      // Handle unknown formats by returning the current date as a default
      return new Date()
  }

  return date
}

export default convertToDate
