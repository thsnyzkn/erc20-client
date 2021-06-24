import { useState, useEffect } from "react";
import getWeb3 from "./utils/getWeb3";
import getBlockchain from "./utils/ethers";
import MyTahsinToken from "./contracts/MyTahsinToken.json";
import "./App.css";

function App() {
  const contractAddress = "0xD42390245b5003b0a2B23b46b2E9FD8445e94d08";
  let provider,
    signer,
    erc20,
    noProviderAbort = true;
  const [acc, setAcc] = useState("HA");
  const [simpleStorage, setSimpleStorage] = useState(undefined);
  const [data, setData] = useState(undefined);
  /* useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        console.log(web3);
        const accounts = await web3?.eth?.getAccounts();
        setAcc(accounts);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []); */
  useEffect(() => {
    const init = async () => {
      const { simpleStorage } = await getBlockchain();
      const data = await simpleStorage.balanceOf(contractAddress);
      console.log({ data });
      /* setSimpleStorage(simpleStorage);
      setData(data); */
    };
    init();
  }, []);
  return (
    <div className="App">
      <div style={{ color: "red" }}>{acc}</div>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
