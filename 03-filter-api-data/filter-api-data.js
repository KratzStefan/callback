function filterApiData(apiData, mandatoryKeys) {
  // Add you solution here
}

function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter(function (item) {
    return mandatoryKeys.every(function (key) {
      return item.hasOwnProperty(key);
    });
  });
}
