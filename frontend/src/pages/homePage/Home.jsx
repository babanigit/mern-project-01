import React from "react";
import Header from "../../components/1header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div>hello home</div>
      <div>
        <button onClick={()=>{ localStorage.removeItem("token");}} > clear storage</button>
      </div>
    </>
  );
};

export default Home;
