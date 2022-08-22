import { Signer } from "ethers";
import {
    ERC20,
    ERC20__factory,
} from "../typechain";
import { tokens } from "./constants";

export const erc20TokenHandler = (singer: Signer): ERC20 => {
    return ERC20__factory.connect(tokens.salToken, singer);
};


