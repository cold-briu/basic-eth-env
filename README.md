# basic-eth-env
Making an eth-solidity dev env

## Pre reqs

1. Check for node js 

		$ node -v  
		# v12 at least. 

2. Check for npm 

		$ npm -v
		# v6 at least. 

**For linux you might want to use nvm**

## Dependencies

1. Truffle 

		$ npm i truffle
		# you can use -g for global install
		# working without global needs npx preffix to work

2. Ganache

- Gui on https://www.trufflesuite.com/ganache or: 
- Cli:
		$ npm i ganache-cli


## Boilerplate

1. Initialize new empty Ethereum project inside an empty folder

		$ truffle init

2. Start ganache-cli

		$ ganache-cli

3. Open truffle console 

		$ truffle console

## Developing 

1. Write your file under "contracts" 

2. Reference your file in "migratons" 

3. deploy

		$ truffle migrate

4. instantiate contract 

		contractName.deployed().then(function(instance){ app = instance; })