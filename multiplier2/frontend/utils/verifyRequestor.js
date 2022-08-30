const generateCalldata = require("../utils/generate_calldata.js");

const verifyRequestor = async (localState, setLocalState) => {
    console.log(localState);
    console.log("WAITING____");

    let resp = await generateCalldata(localState.factor1);
    console.log(resp);

    console.log("WAITING_OVER____");
}

export default verifyRequestor;