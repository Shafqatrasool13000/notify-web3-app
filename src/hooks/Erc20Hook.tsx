import { useMemo, useState } from "react";
import { ethers, Signer } from "ethers";
import { ERC20 } from "../typechain";
import { tokens } from "../utils/constants";
import { getSigner } from "../utils/connectors";
import { erc20TokenHandler } from "../utils/contracts";

export const useTokenBalance = (address:string) => {
    const [balance, setBalance] = useState("");
    useMemo(async () => {
        const signer: Signer = await getSigner();
        let token: ERC20 = erc20TokenHandler(signer)
        let b = await token.balanceOf(await signer.getAddress())
        setBalance(ethers.utils.formatUnits(b, "ether"));
    }, []);
    return balance;
};


// export const useTokenSupply = () => {
//     const [supply, setSupply] = useState("");
//     useMemo(async () => {
//         const signer: Signer = await getSigner();
//         let token: ERC20 = erc20TokenHandler(signer)
//         let b = await token.totalSupply()
//         setSupply(ethers.utils.formatUnits(b, "ether"));
//     }, []);
//     return supply;
// };

// Hook for Write Contracts 



