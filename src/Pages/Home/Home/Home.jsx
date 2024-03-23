import Banner from "../Component/Banner";
import { Helmet } from "react-helmet-async";
import Loading from "../../Loading/Loading";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    <Loading />;
  }
  return (
    <>
      <Helmet title="Md. Mahedi Hassan Shuvo" />
      <Banner />
    </>
  );
};

export default Home;
