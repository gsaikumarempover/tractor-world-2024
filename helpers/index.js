import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(typeof window === "undefined" ? await serverSideTranslations(locale, ["common"]) : {}),
    },
  };
}