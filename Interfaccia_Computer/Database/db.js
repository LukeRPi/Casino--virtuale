import {InfluxDB, Point} from 'https://unpkg.com/@influxdata/influxdb-client-browser/dist/index.browser.mjs'

const url = "http://192.168.1.12:8086";
const token = "dL1bze4lNIn66HkXHOa2upKxiV6CRR9ns3V-Znge1QF9N3MqTgahYAOBeUN4-xaApSCbPuZhZhn3Bwbt-QdFwQ==";
const org = 'Casino'
const bucket = 'newdb'
const client = new InfluxDB({url, token})
const queryApi = client.getQueryApi(org)

const query = 'from(bucket: "newdb") |> range(start: -1h)'
queryApi.queryRows(query, {
  next(row, tableMeta) {
    const o = tableMeta.toObject(row)
    console.log(
      o._time, o._measurement, o._field, o._value
    )
  },
  error(error) {
    console.error(error)
    console.log('\\nFinished ERROR')
  },
  complete() {
    console.log('\\nFinished SUCCESS')
  },
})

function monitor(){
    var id = null;
    clearInterval(id);
    id = setInterval(m, 1000);
    function m(){
        queryApi.queryRows(query, {
            next(row, tableMeta) {
              const o = tableMeta.toObject(row)
              console.log(
                o._time, o._measurement, o._field, o._value
              )
            },
            error(error) {
              console.error(error)
              console.log('\\nFinished ERROR')
            },
            complete() {
              console.log('\\nFinished SUCCESS')
            },
          })
    }
}
monitor();