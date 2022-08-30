const { multiplier2CallData } = require("../zkproof/multiplier2/snarkjsMultiplier2.js");

const verifyRequestor = async (localState, setLocalState) => {
    console.log(localState);
    console.log("WAITING____");

    let resp = await multiplier2CallData(localState.factor1, localState.factor2);
    console.log(resp);

    console.log("WAITING_OVER____");
}

export default verifyRequestor;