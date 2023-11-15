'use server'

const fetchBackImage = (backdrop_path : string) : string => {
  return `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
}

export {fetchBackImage}