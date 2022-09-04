import { useState } from 'react';
import {
  useConnect,
  useAccount,
  useNetwork,
  useContract,
  useSigner,
  useProvider
} from "wagmi";

import styles from '../styles/Home.module.css';
import detailStyles from '../styles/Details.module.css';
import verifyRequestor from '../utils/verifyRequestor.js';
import { switchNetwork } from "../utils/switchNetwork.js";
import networks from "../utils/networks.json";
import multiplierContractAbi from "../utils/abiFiles/Multiplier.json";
import contractAddress from "../utils/contractAddress.json";

const Card = () => {
  let [localState, setLocalState] = useState({
    name: "",
    factor1: "",
    factor2: ""
  });

  const [connectQuery, connect] = useConnect();
  const [accountQuery, disconnect] = useAccount();
  const [{ data, error, loading }] = useNetwork();
  const [signer] = useSigner();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: contractAddress.multiplier2Contract,
    contractInterface: multiplierContractAbi.abi,
    signerOrProvider: signer.data || provider,
  });

  return (
    <div className={detailStyles.bigCard}>
      <p>Prove you know the <b>Factors of 33.</b>
        <br />
        Don't worry, it's a <b>Trusted</b> setup. We ensure <b>ZeroKnowledge</b> transfer.</p>
      <p>Details:</p>

      <input
        type={"string"}
        className={styles.input}
        placeholder="Name"
        value={localState.name}
        onChange={(e) => {
          setLocalState({
            ...localState,
            name: e.target.value
          })
        }}
      />

      <input
        type={"number"}
        className={styles.input}
        placeholder="Factor 1"
        value={localState.factor1}
        onChange={(e) => {
          setLocalState({
            ...localState,
            factor1: e.target.value
          })
        }}
      />

      <input
        type={"number"}
        className={styles.input}
        placeholder="Factor 2"
        value={localState.factor2}
        onChange={(e) => {
          setLocalState({
            ...localState,
            factor2: e.target.value
          })
        }}
      />

      <div className={detailStyles.fotter}>
        <button className={styles.gradientButton} onClick={() => {
          verifyRequestor(localState, setLocalState, contract);
        }}>
          Check, If I Know !!!
        </button>
      </div>
    </div>
  );
}

export default Card;