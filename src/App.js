import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import CollectionCard from "./Components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./Components/PunkList";
import Main from "./Components/Main";

function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setselectedPunk] = useState(0);

  useEffect(() => {
    //pulling apis with help of this
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x90606Ee39FA56b399eaAaDC4D08DA513535161Bd&order_direction=asc'
      );
      console.log(openseaData.data.assets);
      const temp=openseaData.data.assets.reverse()
      setpunkListData(temp);
    };

    return getMyNfts();
  }, []); //no dependencies

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setselectedPunk={setselectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
