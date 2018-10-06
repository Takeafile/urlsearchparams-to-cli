function mapping([key, value])
{
  return `--${key}=${value}`
}


module.exports = function(searchParams = window.location.search)
{
  if(!(searchParams instanceof URLSearchParams))
    searchParams = new URLSearchParams(searchParams)

  return Array.from(searchParams).map(mapping)
}
