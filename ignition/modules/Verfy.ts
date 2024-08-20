import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const VerfyModule = buildModule("VerfyModule", (m) => {
  
  const verfy = m.contract("Verfy")


  return { verfy };
});

export default VerfyModule;
