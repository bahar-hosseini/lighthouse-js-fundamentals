const chooseStations = (stations) => {
  let goodStations = []
  stations.map(station => (station[1] >= 20) && (station[2] === 'school' || station[2] === 'community centre') ? goodStations.push(station[0]) : null)
  return goodStations;
}