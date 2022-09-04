import Link from "next/link";
import { useAccount, useConnect, useNetwork } from "wagmi";
import networks from "../utils/networks.json";

import { switchNetwork } from "../utils/switchNetwork";
import styles from "../styles/Home.module.css";

export default function Header() {
  const [connectQuery, connect] = useConnect();
  const [accountQuery, disconnect] = useAccount();
  const [{ data, error, loading }] = useNetwork();

  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
  const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  };

  const renderConnectWallet = () => {
    if (!accountQuery.data?.address) {
      return (
        <button
          className={styles.gradientButton}
          onClick={() => {
            connect(connectQuery.data.connectors[0]);
          }}
        >
          Connect Wallet
        </button>
      );
    } else if (
      accountQuery.data?.address &&
      data.chain.id.toString() !== networks.selectedChain
    ) {
      return (
        <button
          className={styles.gradientButton}
          onClick={() => {
            switchNetwork();
          }}
        >
          Switch Network
        </button>
      );
    } else {
      return (
        <div>
          <div>
            <span>{truncateEthAddress(accountQuery.data?.address)}</span>
          </div>
          <button
            onClick={disconnect}
            className={styles.gradientButton}
          >
            Disconnect
          </button>
        </div>
      );
    }
  };

  return (
    <header>
      <Link href="/">
        <a>
          <b>I Know Multiplier</b>
        </a>
      </Link>
      <div className="flex justify-center items-center">
        <div>{renderConnectWallet()}</div>
      </div>
    </header>
  );
}
