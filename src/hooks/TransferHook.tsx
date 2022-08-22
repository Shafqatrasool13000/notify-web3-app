import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { ethers, Signer, utils } from "ethers";
import { ERC20, ERC20__factory } from "../typechain";
import Notify from "bnc-notify";
import { tokens } from "../utils/constants";
import { ethereum } from "../App";

// Notify dapp Connect
const notify = Notify({
  dappId: "62dd48af-c147-4c69-9623-709db985aff8", 
  networkId: 5, 
});

export const useTransfer = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  return useCallback(async (to: string, amount: string): Promise<void> => {

    const signer: Signer = await getSigner();
    let contract: ERC20 = ERC20__factory.connect(tokens.salToken, signer);

    // Transaction Handling Methods
    try {
      const txDetails = {
        from: "0xf53113958D08876d3E421917AdEc43fce599cD43",
        to,
        value: amount,
      };
      const estimateGas = async (): Promise<string> => {
        let res = await provider.estimateGas({
          to,
          value: amount,
        });
        return ethers.utils.formatEther(res).toString();
      };
      const gasPrice = async (): Promise<string> => {
        let res = await provider.getGasPrice();
        return utils.formatUnits(res, "gwei");
      };

      const sendTransaction = async (): Promise<string> => {
        const tx = await contract.transfer(to, ethers.utils.parseEther(amount));
        return tx.hash as string;
      };
      const balance = async () => {
        const res = await provider.getBalance(
          "0xf53113958D08876d3E421917AdEc43fce599cD43"
        );
        return ethers.utils.formatUnits(res, "ether").toString();
      };
      const transactionHandler = async () => {
        const { emitter} = notify.transaction({
          txDetails,
          estimateGas,
          gasPrice,
          balance: await balance(),
          sendTransaction,
          contractCall: {
            methodName: "transfer",
            params: [to, amount],
          },
        });
        emitter.on("txSendFail", (transaction) => {
          return {
            message: "Transaction Canceled",
            type: "error",
          };
        });
      };
      transactionHandler();
    } catch (error) {
      console.log(error);
    }
  }, []);
};
