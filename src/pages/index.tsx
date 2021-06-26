import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Website } from '../components/website/website'
const App = () => (
  <Layout>
    <SEO />
    <Website/>
  </Layout>
);

export default App;
