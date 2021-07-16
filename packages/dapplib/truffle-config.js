require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind equip hidden ensure success solution'; 
let testAccounts = [
"0x1c37a02b57c3822c5c46e6ea16a3d746ce019d12452f6aa406528216f1203b6b",
"0x64cc56ad8642b8c379ccb94e2b57334747f215899b0cc5c3c22605b8c97b3b73",
"0x091b1fb638032352f37ca82c530ac4ff6c40e07232ac1ce32d7f7d92e2a4c176",
"0x5897efb6ea0ac365b71d8f627c242fb7ffed9fec38db21b670aa7d4484aa41f6",
"0xd5146189b2fc562da094810353b6faee586efa3681fef70571c860b06c7c436a",
"0x854ae569d197c66c7f604a98550f9fd757ab50a9c8e92116d06dbbb27b20a849",
"0x814b9809c1b4a6ca264c37392cfd8e3de983b7a35c4052a2b32b7c60f944b0c8",
"0x3d7e08a5b2431c3f2bdd4b22ae3714738e17bad62f5d3c3dcd3700c7af669c8f",
"0xfbaf457d2b14603351caf602e8414d0f16765a2e0e023c4b9cd709aa474976dd",
"0xcbcdf8a6a33326cb478f1b5638d2f7899c31821ecc11a1f37cb0703988a8ecd2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

