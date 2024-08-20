import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect } from "chai";
  import hre from "hardhat";
  
  describe("Verfy", function () {
    async function deployOneYearLockFixture() {
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await hre.ethers.getSigners();
  
      const Verfy = await hre.ethers.getContractFactory("Verfy");
      const verfy = await Verfy.deploy();
  
      return { verfy, owner, otherAccount };
    }

    describe("End-to-End", function () {
        it("Should set data and allow for retrieval of data", async function () {
          const { verfy, owner } = await loadFixture(
            deployOneYearLockFixture
          );
          const hashHex= "0x1234";
          const publicKey = "publickey";
          const signature = "signature";

          await verfy.set(hashHex, publicKey, signature);

          const result = await verfy.get(hashHex);

          expect(result[0]).to.eq(hashHex);
          expect(result[1]).to.eq(publicKey);
          expect(result[2]).to.eq(signature);
        });
      });
  });
  