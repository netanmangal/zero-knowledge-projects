import { multiplier2CallData } from "../zkproof/multiplier2/snarkjsMultiplier2.js";

const verifyRequestor = async (localState, setLocalState, contract) => {
    console.log("WAITING____");

    let calldata = await multiplier2CallData(localState.factor1, localState.factor2);
    console.log(calldata);

    let resp = await contract.iKnowMultipliers(
        localState.name,
        calldata[0],
        calldata[1],
        calldata[2],
        calldata[3]
    );

    console.log(resp);
    console.log("WAITING_OVER____");
}

export default verifyRequestor;