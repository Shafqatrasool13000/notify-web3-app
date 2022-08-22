import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { ethers, Signer } from "ethers";
import { ERC20 } from "../typechain";
import { erc20TokenHandler } from "../utils/contracts";

export const useApprove = () => {

    return useCallback(
        async (to: string,amount:string): Promise<void> => {
            const signer: Signer = await getSigner();
            let token: ERC20 = erc20TokenHandler(signer);
            try {
                const tx = await token.approve(to, ethers.utils.parseEther(amount))
                await tx.wait()
                console.log(tx,'data in tex')
            } catch (error) {
                console.log(error);
                
            }
        },
        []
    );
};
