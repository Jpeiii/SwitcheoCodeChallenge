const { providers, Contract } = require('ethers');

async function getBalance(tokenAddress: string, addresses: any) {
    const abi = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "address",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
    try {
        const provider = new providers.JsonRpcProvider('https://bsc-dataseed.binance.org');
        const contract = new Contract(tokenAddress, JSON.stringify(abi), provider);
        for (let i = 0; i < addresses.length; i++) {
            const address = addresses[i]
            const balance = await contract.functions.balanceOf(address);
            console.log(`${address} ${balance.toString()}`);
        }
    } catch (error) {
        console.error(error);
    }
}

let addresses = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"]
getBalance("0xc0ecb8499d8da2771abcbf4091db7f65158f1468", addresses);