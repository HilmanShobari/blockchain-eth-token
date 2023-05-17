const Migrations = artifacts.require("TestingThreeToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
