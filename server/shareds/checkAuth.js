// @ts-check

module.exports = function(req) {
  if (!req['isAuth']) throw new Error('Unauthorized')
  return req['userId']
}