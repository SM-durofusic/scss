import React from "react";
import Page from "./ui-kit/Page/Page";
import ResearchCloudOverviewPage from "./research-cloud/ResearchCloudOverviewPage";
import SiteExperienceOverviewPage from "./site-experience/SiteExperienceOverviewPage";

const App = () => (
  <Page>
    <ResearchCloudOverviewPage />
    <SiteExperienceOverviewPage />
  </Page>
);

export default App;
