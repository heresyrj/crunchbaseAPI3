qs = require('qs');

var endpoint='https://api.crunchbase.com/v/3/';
var keyParam, config = {};

function init(apikey) {
  config.apikey = apikey;
  keyParam = 'user_key=' + config.apikey;
}

function getOrganizationsUrl(params) {
  console.log(params);
  console.log(qs.stringify(params));
  return endpoint
  + 'organizations' + '?' + keyParam
  + '&' + qs.stringify(params);
}

function getOrganizationUrl(permalink) {
  console.log(permalink);
  return endpoint
  + 'organizations/' + permalink + '?' + keyParam;
}

function getPeopleUrl(page){
  return endpoint
  + 'people' + '?' + keyParam
  + '&' + qs.stringify(page);
}

function getPersonUrl(permalink){
  return endpoint
  + 'people/' + permalink + '?' + keyParam;
}

function getProductsUrl(params) {
  return endpoint
  + 'products' + '?' + keyParam
  + '&' + qs.stringify(params);
}

function getProductUrl(permalink) {
  return endpoint
  + 'products/' + permalink + '?' + keyParam;
}

function getFundingRoundsUrl(updated_since) {
  return endpoint
  + 'funding-rounds' + '?' + 'updated_since=' + updated_since
  + '&' + keyParam;
}

function getFundingRoundUrl(uuid) {
  return endpoint
  + 'funding-rounds/' + uuid + '?' + keyParam;
}

function getAcquisitionsUrl() {
  return endpoint
  + 'acquisitions/' + '?' + keyParam;
}

function getAcquisitionUrl(uuid) {
  return endpoint
  + 'acquisitions/' + uuid + '?' + keyParam;
}

function getIPOSUrl() {
  return endpoint
  + 'ipos' + '?' + keyParam;
}

function getIPOUrl(uuid) {
  return endpoint
  + 'ipos/' + uuid + '?' + keyParam;
}

function getFundsUrl(uuid) {
  return endpoint
  + 'funds/' + uuid + '?' + keyParam;
}

function getLocationsUrl(params) {
  return endpoint
  + 'locations' + '?' + keyParam
  + '&' + qs.stringify(params);
}

function getCategoriesUrl() {
  //params = params.split(' ');
  return endpoint
  + 'categories' + '?'
  + keyParam;
}


function getDeletePage(pageNo, callback) {
  return endpoint
  + 'deletes?page=' + pageNo
  + '&' + keyParam;
}

function getDeleteType(entity_type, callback) {
  return endpoint
  + 'deletes/' + entity_type
  + '?' + keyParam;
}

module.exports = {
  init: function(apikey) {
    return init(apikey);
  },
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getOrganizationUrl: function(permalink) {
    return getOrganizationUrl(permalink);
  },
  getPeopleUrl: function(page) {
    return getPeopleUrl(page);
  },
  getPersonUrl: function(permalink) {
    return getPersonUrl(permalink);
  },
  getProductsUrl: function(params) {
    return getProductsUrl(params);
  },
  getProductUrl: function(permalink) {
    return getProductUrl(permalink);
  },
  getFundingRoundsUrl: function(updated_since) {
    return getFundingRoundsUrl(updated_since);
  },
  getFundingRoundUrl: function(uuid) {
    return getFundingRoundUrl(uuid);
  },
  getAcquisitionsUrl: function() {
    return getAcquisitionsUrl();
  },
  getAcquisitionUrl: function(uuid) {
    return getAcquisitionUrl(uuid);
  },
  getIPOSUrl: function() {
    return getIPOSUrl();
  },
  getIPOUrl: function(uuid) {
    return getIPOUrl(uuid);
  },
  getFundsUrl: function(uuid) {
    return getFundsUrl(uuid);
  },
  getLocationsUrl: function(params) {
    return getLocationsUrl(params);
  },
  getCategoriesUrl: function(params) {
    return getCategoriesUrl(params);
  },
  getDeletePage: function(pageNo, callback) {
    return getDeletePage(pageNo, callback);
  },
  getDeleteType: function(entity_type, callback) {
    return getDeleteType(entity_type, callback);
  }
}

