import React from "react";
import AddOrderForm from "../../components/orders/addOrderForm";
import Header from "@/components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
export const getServerSideProps = async (context: { locale: any; }) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
export default addOrder;