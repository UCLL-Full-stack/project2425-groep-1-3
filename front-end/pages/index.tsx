import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-4xl bg-[#31b8f7] p-6 rounded-lg shadow-lg">
          Welcome to the home page
        </h1>
      </main>
    </>
  );
}

export const getServerSideProps = async (context: { locale: any }) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
