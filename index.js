function mapping([key, value])
{
  return `--${key}=${value}`
}


module.exports = function(searchParams = window.location.searchParams)
{
  if(!(searchParams instanceof URLSearchParams))
    searchParams = new URLSearchParams(searchParams)

  return searchParams.entries().map(mapping)
}
