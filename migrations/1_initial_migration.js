const Migrations = artifacts.require("PermitSignature");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
