
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat"
require('hardhat-deploy');
import { HardhatUserConfig } from "hardhat/config";

import "dotenv/config";
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

const config : HardhatUserConfig= {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500
      },
    }
},
  
  
  networks:{
    hardhat:{
      chainId:31337,
      allowUnlimitedContractSize:true
      

    },
    BitTorrent:{
       url: "https://pre-rpc.bt.io/",
       chainId:1029,
       
       accounts: [PRIVATE_KEY],
       allowUnlimitedContractSize:true,
       
    },
     matic: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [PRIVATE_KEY],
      chainId: 80001
    
    },
    localhost:{
      chainId:31337,
      allowUnlimitedContractSize:true
    }
  },

  namedAccounts:{
    deployer: {
       default: 0
    },
  }
}
export default config;
