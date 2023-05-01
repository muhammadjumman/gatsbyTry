import React from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";

const blog = () => {
    return (
        <Layout title={"Blog"}>
            <p>My cool blog goes here</p>
        </Layout>
    );
};

export const Head = () => <Seo title={"Blog"} />;
export default blog;
