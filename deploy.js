const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'page moral concert glare valid want stool hundred company cinnamon image minor',
    'https://rinkeby.infura.io/v3/6f5c5c9b2a1147c2a8f3a971c3140afc'
     
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log("Attempting to dpeloy from account", accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface)) //ABI
        .deploy({ data: bytecode })
        .send({from: accounts[0], gas: '1000000' })

    console.log('contract deployed to:', result.options.address)    

}
deploy()

