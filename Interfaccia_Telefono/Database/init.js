import {InfluxDB, Point} from 'https://unpkg.com/@influxdata/influxdb-client-browser/dist/index.browser.mjs'

const url = "http://0.0.0.0:8086";
const token = "dL1bze4lNIn66HkXHOa2upKxiV6CRR9ns3V-Znge1QF9N3MqTgahYAOBeUN4-xaApSCbPuZhZhn3Bwbt-QdFwQ==";
const org = 'Casino'
const bucket = 'newdb'
const client = new InfluxDB({url, token})
var nome;
var point;

function initApi(){
    const writeApi = client.getWriteApi(org, bucket)
    writeApi.useDefaultTags({host: 'host1'})
    return writeApi;
}


window.ins_nome=()=>{
    nome = document.getElementById("nome").value;
    point = new Point(nome);
    const writeApi=initApi();
    point.stringField("Stato", "Connesso")
    writeApi.writePoint(point)
    writeApi
        .close()
        .then(() => {
            console.log('FINISHED')
        })
        .catch(e => {
            console.error(e)
            console.log('\\n ERROR')
        })
}

window.postStringData=(field, value)=>{
    const writeApi=initApi();
    point.stringField(field, value)
    writeApi.writePoint(point)
    writeApi
        .close()
        .then(() => {
            console.log('FINISHED, WROTE FIELD: FFF VALUE: VVV'.replace(/FFF/, field).replace(/VVV/, value))
        })
        .catch(e => {
            console.error(e)
            console.log('\\nERROR WRITING FIELD: FFF VALUE: VVV'.replace(/FFF/, field).replace(/VVV/, value))
        })
}

window.postIntData=(field, value)=>{
    const writeApi=initApi();
    point.intField(field, value)
    writeApi.writePoint(point)
    writeApi
        .close()
        .then(() => {
            console.log('FINISHED, WROTE FIELD: FFF VALUE: VVV'.replace(/FFF/, field).replace(/VVV/, value))
        })
        .catch(e => {
            console.error(e)
            console.log('\\nERROR WRITING FIELD: FFF VALUE: VVV'.replace(/FFF/, field).replace(/VVV/, value))
        })
}

