const abi = require("./abi.json");

const STAKED_USDAI_CONTRACT = "0x0B2b2B2076d95dda7817e785989fE353fe955ef9";

async function tvl(api) {
  const nav = await api.call({
    target: STAKED_USDAI_CONTRACT,
    abi: abi.getNav
  });
  return { [STAKED_USDAI_CONTRACT]: nav };
}

module.exports = {
  ethereum: {
    tvl
  },
  methodology:
    "TVL is calculated by the net asset value of the Staked USDai contract",
};
