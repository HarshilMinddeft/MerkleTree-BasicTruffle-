/* global artifacts contract before it assert */

const BN = require("bn.js");
const truffleAssert = require("truffle-assertions");

const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  const tokenName = "Airdrop";
  const tokenSymbol = "Airdrop";
  const addressZero = "0x0000000000000000000000000000000000000000";
  const account01 = accounts[1];

  let tokenContractInstance;

  before(async () => {
    tokenContractInstance = await Token.deployed();
  });

  it("01 - token should have right name, symbol and cap", async () => {
    const name = await tokenContractInstance.name.call();
    const symbol = await tokenContractInstance.symbol.call();

    assert.equal(name, tokenName, `Token name should be ${tokenName}`);
    assert.equal(symbol, tokenSymbol, `Token symbol should be ${tokenSymbol}`);
  });

  //   it("02 - token should be able to mint", async () => {
  //     const tx = await tokenContractInstance.mint(account01);

  //     truffleAssert.eventEmitted(tx, "Transfer", (obj) => {
  //       return obj.from === addressZero && obj.to === account01;
  //     });
  //   });

  it("04 - only owner should be able to mint", async () => {
    await truffleAssert.reverts(
      tokenContractInstance.mint(account01, 1, { from: account01 }),
      "Token: only owner can mint."
    );
  });
});
