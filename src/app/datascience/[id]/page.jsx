// src/app/datascience/[id]/page.jsx
import React from "react";
import { getPageData } from "@/utils/getDSPageData";
import Header from "@/app/components/course/hero/Header";
import Psummary from "@/app/components/course/psummary/Psummary";
import Practical from "@/app/components/course/practical/Practical";
import ProgramSection from "@/app/components/course/programsection/programSection";
import OutComeSection from "@/app/components/course/outCome/OutComeSection";
import AnimationNew from "@/app/components/course/whyChoose/AnimationNew";
import ReviewSlider from "@/app/components/global/reviewSlider/ReviewSlider";
import NewSevenSection from "@/app/components/global/newSevenSection/NewSevenSection";
import StructuredSection from "@/app/components/course/structured/StructuredSection";
import JobReadySection from "@/app/components/course/jobReadySection/JobReadySection";

const Page = async ({ params }) => {
  const { id } = params;
  const pageData = await getPageData(id);

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }

  return (
    <div>
      <Header title={pageData.header.title}
      orgTitle={pageData.header.orgTitle}
      spanTag={pageData.header.spanTag}
      spanIcon={pageData.header.spanIcon}
      descrption={pageData.header.descrption}

      applicationIcon={pageData.header.applicationIcon}
      BotWidth={pageData.header.BotWidth}
      BotHeight={pageData.header.BotHeight}
      ProgramIcon={pageData.header.ProgramIcon}
      trainingIcon={pageData.header.trainingIcon}
      CloseDes={pageData.header.CloseDes}
      CloseBotDate={pageData.header.CloseBotDate}
      DurationBot={pageData.header.DurationBot}
      DurationBotDate={pageData.header.DurationBotDate}
      TrainingBot={pageData.header.TrainingBot}

      />

      <Psummary summaryData={pageData.summary}/>
<Practical practicalData={pageData.practical.practical}
title={pageData.practical.title}/>
 <ProgramSection programSectionData={pageData.programSection} />
 < OutComeSection/>
 <AnimationNew/>
 <ReviewSlider/>
<StructuredSection/>
<JobReadySection/>

<NewSevenSection/>
    </div>
  );
};

export default Page;
