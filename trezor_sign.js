window.__TREZOR_CONNECT_SRC = 'http://localhost:8088/'
var TrezorConnect = require('trezor-connect').default;

TrezorConnect.manifest({
    email: 'adrian.nagy@simplestaking.com',
    appUrl: 'http://just.testing.connect.xyz'
})

TrezorConnect.tezosSignTransaction({
    path: "m/44'/1729'/10'",
    branch: "BKk7ZsvvkQSntQ31j2Hxsw8bfYtUKGjsKHT2aQrxAqUYyQUHxmM",
    operation: {
        transaction: {
            source: "tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo",
            destination: "KT1MJSg8YrnjSewrWGYL3e8XfqtLAG5WU4Hg",
            counter: 20449,
            amount: 0,
            fee: 10000,
            gas_limit: 11000,
            storage_limit: 277,
            manager_smart_contract_params: {
                cancel_delegate: true,
            }
        }
    }
}).then(function (result) {
    console.log(result)
});
