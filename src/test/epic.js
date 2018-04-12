export const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000)
      .mapTo(PONG());

const PONG = (data) => ({
  type: 'PONG',
  dates: data
})