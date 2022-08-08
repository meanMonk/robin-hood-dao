import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {

  const address = useAddress()
  const connectWithMetaMask = useMetamask();

  console.log("👋 Address:", address);

  if (!address) {

    return (
      <div className="landing">
        <h1>Welcome to 🛬 Robin Hood DAO</h1>
        <button
          className="btn-hero"
          onClick={connectWithMetaMask}
        >Connect to wallet </button>
      </div>
    );
  }


  return (
    <div className="landing">
      <h1>👌 wallet connected now what?</h1>

    </div>
  );

};

export default App;
