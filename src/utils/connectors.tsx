import { ethers, Signer } from "ethers";
import { ethereum } from "../App";

export const getSigner = async (): Promise<Signer> => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
};