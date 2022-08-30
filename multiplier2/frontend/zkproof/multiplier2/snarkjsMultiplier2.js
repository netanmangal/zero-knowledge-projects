import { exportCallDataGroth16 } from "../snarkjsZkproof";

export async function multiplier2CallData(factor1, factor2) {
  const input = {
    a: factor1,
    b: factor2,
  };

  let dataResult;

  try {
    dataResult = await exportCallDataGroth16(
      input,
      "/zkproof/multiplier2/multiplier2.wasm",
      "/zkproof/multiplier2/multiplier2_0001.zkey"
    );
  } catch (error) {
    console.log(error);
    // window.alert("Wrong answer");
  }

  return dataResult;
}
