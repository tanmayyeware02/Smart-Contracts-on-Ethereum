var eth = artifacts.require("eth");

module.exports = function(deployer) {
	deployer.deploy(eth);
};
