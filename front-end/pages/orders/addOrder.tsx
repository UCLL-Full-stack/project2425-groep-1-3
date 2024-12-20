import React from "react";
import AddOrderForm from "../../components/orders/addOrderForm";
import Header from "@/components/header";
import Head from "next/head";

const addOrder: React.FC = () => {
  return (
  <>
  <Head>
    <title>Add Order</title>
  </Head>
    <Header />
  <div>
      <AddOrderForm />
  </div>
  </>
);
}
export default addOrder;