const contractName = artifacts.require("contractFileName");

module.exports = function (deployer) {
  deployer.deploy(contractName);
};
