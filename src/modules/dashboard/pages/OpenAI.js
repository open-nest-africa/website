import React from "react";
import DashboardContentLayout from "../../DashboardContentLayout";
import OpenAIContent from "../../component/OpenAIContent";
import SEO from "../../../components/SEO";

function OpenAI() {
  return (
    <DashboardContentLayout>
      <SEO 
        title="OpenAI Projects - OpenNest-Africa"
        description="Explore OpenAI-powered projects and collaborate with people working on accessible AI solutions in the open."
      />
      <div>
        <OpenAIContent />
      </div>
    </DashboardContentLayout>
  );
}

export default OpenAI;
