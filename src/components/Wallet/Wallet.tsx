import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Web3ReactSelectedHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";

export default function Wallet({
  connector,
  hooks,
  name,
}: {
  connector: Connector;
  hooks: Web3ReactSelectedHooks;
  name: string;
}) {
  const {
    useSelectedAccount,
    useSelectedChainId,
    useSelectedIsActive,
    useSelectedIsActivating,
  } = hooks;
  const isActivating = useSelectedIsActivating(connector);
  const isActive = useSelectedIsActive(connector);
  const account = useSelectedAccount(connector);
  const chain = useSelectedChainId(connector);

  const [error, setError] = useState<Error | undefined>(undefined);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  const navigate = useNavigate();

  const handleConnect = () => {
    setError(undefined);

    if (!isActive && !isActivating) {
      setConnectionStatus("Connecting..");
      Promise.resolve(connector.activate(1)).catch((e) => {
        connector.resetState();
        setError(e);
      });
    }
  };

  useEffect(() => {
    if (isActive) {
      setConnectionStatus("Connected");
      localStorage.setItem("walletAddress", account || ""); // Save wallet address in local storage
      navigate("/");
    } else {
      setConnectionStatus("Disconnected");
    }
  }, [isActive, account, navigate]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  return (
    <div>
      <button className='btn' onClick={handleConnect} disabled={isActivating || isActive}>
        {isActive ? "Connected" : "Connect"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
