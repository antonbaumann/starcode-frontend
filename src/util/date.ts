const germanDays = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
]

export const toDayMonth = (date: Date, delimiter: string = '/') => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  return `${String(day).padStart(2, '0')}${delimiter}${String(month).padStart(
    2,
    '0',
  )}`
}

export const toGermanLetterDate = (date: Date) => {
  const day = date.getDay()
  const year = date.getFullYear()
  return `${germanDays[day]}, den ${toDayMonth(date, '.')}.${year}`
}
