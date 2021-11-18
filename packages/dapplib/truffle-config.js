require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember pudding hope enter orange giggle'; 
let testAccounts = [
"0xa00c4ec133b5bd88b78090a5c6e1a5174b47956a0a96b0c16fd695664757a177",
"0x8729b490501889e3b5fa4ef689d2167d4219bdbab5bda7705b7a73f5ee300ac3",
"0x42110d02020942c64e9238b0fe13d20fcaa6388c9c8f404be09831c8662e657b",
"0x83539c4f7a2e18dc1caac277ed467c1f5d39f6de1dacc297d3e34340a9947ad9",
"0x00b09a14e32974c06f4665a530975f7c77af3d2a187e063793e3a865d87b64fc",
"0x1e9e01faed5865022901a3cd51aff42861a5e0564d75f67b771f0d0a43e33284",
"0x90b5ac5cfef26b64c59caeccc75247c4115e3397d7807675d33ced89227b6776",
"0x339c97d6a4710881649dace6e6b777833138410b34f4b475eba12ccdc2b76a10",
"0x11ee612aa828f9d57ad949bbb79b85c5b012b39fce59c806d7772175c4827824",
"0xf39e58c68bcf1f7637fb2fe159681e2efacf2b1aeca8792d066a0c06e0c6b69d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

