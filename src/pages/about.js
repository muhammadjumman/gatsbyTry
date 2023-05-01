import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
const about = () => {
    return <Layout title={"About"}>This is the about section</Layout>;
};

export const Head = () => (
    <>
        <Seo title="About" />
    </>
);

export default about;
