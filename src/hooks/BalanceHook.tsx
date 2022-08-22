import {  useMemo, useState } from "react";
import { getSigner } from "../utils/connectors";
import {  ethers, Signer } from "ethers";
import { ERC20 } from "../typechain";
import { erc20TokenHandler } from "../utils/contracts";

export const useBalance = (account:string) => {
    const [balance, setBalance] = useState("0");
    useMemo(async () => {
        if(account === '') return balance;
        const signer: Signer = await getSigner();
        let token: ERC20 = erc20TokenHandler(signer)
        let b = await token.callStatic.balanceOf(account)
        setBalance(ethers.utils.formatUnits(b, "ether"));
    }, [account,balance]);
    return balance;
};
