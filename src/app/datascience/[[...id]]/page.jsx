import React from "react";
import dynamic from "next/dynamic";
import { getPageData, generateStaticParams } from "@/utils/getDSPageData";

import Header from "@/app/components/course/hero/Header";
const Psummary = dynamic(
  () => import("@/app/components/course/psummary/Psummary"),
  { ssr: false }
);
const Practical = dynamic(() =>
  import("@/app/components/course/practical/Practical")
);
const ProgramSection = dynamic(
  () => import("@/app/components/course/programsection/programSection"),
  { ssr: false }
);
const OutComeSection = dynamic(
  () => import("@/app/components/course/outCome/OutComeSection"),
  { ssr: false }
);
const AnimationNew = dynamic(() =>
  import("@/app/components/course/whyChoose/AnimationNew")
);
const ReviewSlider = dynamic(() =>
  import("@/app/components/global/reviewSlider/ReviewSlider")
);
const NewSevenSection = dynamic(() =>
  import("@/app/components/global/newSevenSection/NewSevenSection")
);
const StructuredSection = dynamic(() =>
  import("@/app/components/course/structured/StructuredSection")
);
const JobReadySection = dynamic(() =>
  import("@/app/components/course/jobReadySection/JobReadySection")
);
const MentorsSection = dynamic(
  () => import("@/app/components/course/mentor/Mentor"),
  { ssr: false }
);
const UpskillingSection = dynamic(() =>
  import("@/app/components/course/upskill/UpskillSection")
);
const SyllabusSection = dynamic(
  () => import("@/app/components/course/syllabus/Syllabus"),
  { ssr: false }
);
const ToolsSection = dynamic(() =>
  import("@/app/components/course/toolsSection/ToolsSection")
);
const FeeContent = dynamic(() =>
  import("@/app/components/course/feeSection/FeeSection")
);
const UpskillMbl = dynamic(() =>
  import("@/app/components/course/upskill/UpskillMbl")
);
const ProjectSection = dynamic(
  () => import("@/app/components/course/projectSection/ProjectSection"),
  { ssr: false }
);
const CertificateSection = dynamic(() =>
  import("@/app/components/course/certificateSection/CertificateSection")
);

const Page = async ({ params }) => {
  const id = Array.isArray(params.id) ? params.id : [params.id];
  const pageData = await getPageData(id.join("/"));

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }

  return (
    <div>
      <Header
        title={pageData.header?.title}
        orgTitle={pageData.header?.orgTitle}
        spanTag={pageData.header?.spanTag}
        spanIcon={pageData.header?.spanIcon}
        descrption={pageData.header?.descrption}
        applicationIcon={pageData.header?.applicationIcon}
        BotWidth={pageData.header?.BotWidth}
        BotHeight={pageData.header?.BotHeight}
        ProgramIcon={pageData.header?.ProgramIcon}
        trainingIcon={pageData.header?.trainingIcon}
        CloseDes={pageData.header?.CloseDes}
        CloseBotDate={pageData.header?.CloseBotDate}
        DurationBot={pageData.header?.DurationBot}
        DurationBotDate={pageData.header?.DurationBotDate}
        TrainingBot={pageData.header?.TrainingBot}
        TrainingBotFormat={pageData.header?.TrainingBotFormat}
        interstedInHide={true}
      />
      <ProgramSection programSectionData={pageData.ProgramSection} />
      <Practical />
      <AnimationNew />
      <JobReadySection />
      <SyllabusSection
        sections={pageData.sections}
        brochureLink={pageData.brochureLink}
        brochurePdf={pageData.brochurePdf}
        interstedInHide={true}
        radio={pageData.radio}
      />
      <CertificateSection />
      <FeeContent
        Fee={pageData.FeeSection?.Fee}
        hybridFee={pageData.FeeSection?.hybridFee}
        adsHide={pageData.FeeSection?.adsHide}
        dataScience={pageData.FeeSection?.dataScience}
        WeekdayDate={pageData.FeeSection?.WeekdayDate}
        WeekendDate={pageData.FeeSection?.WeekendDate}
        WeekdayTime={pageData.FeeSection?.WeekdayTime}
        WeekendTime={pageData.FeeSection?.WeekendTime}
        CutFee={pageData.FeeSection?.CutFee}
        FeeEmi={pageData.FeeSection?.FeeEmi}
        hybridEmi={pageData.FeeSection?.hybridEmi}
        weekday={pageData.FeeSection?.weekday}
        weekend={pageData.FeeSection?.weekend}
        weekdaybatch={pageData.FeeSection?.weekdaybatch}
        weekendbatch={pageData.FeeSection?.weekendbatch}
        setPopups={pageData.FeeSection?.setPopups}
        devopfee={pageData.FeeSection?.devopfee}
        emiPopupProps={pageData.FeeSection?.emiPopupProps}
        emiType={pageData.FeeSection?.emiType}
        duration1={pageData.FeeSection?.duration1}
        totalAmount1={pageData.FeeSection?.totalAmount1}
        monthlyPayment1={pageData.FeeSection?.monthlyPayment1}
        greenDown1={pageData.FeeSection?.greenDown1}
        duration2={pageData.FeeSection?.duration2}
        totalAmount2={pageData.FeeSection?.totalAmount2}
        monthlyPayment2={pageData.FeeSection?.monthlyPayment2}
        greenDown2={pageData.FeeSection?.greenDown2}
        interstedInHide={true}
      />
      {/* <ReviewSlider showVideoYt={false}/> */}
      <MentorsSection />
      {/* <ProjectSection interstedInHide={true} /> */}
      <NewSevenSection interstedInHide={true} radio={true} />
      {/* <Psummary summaryData={pageData.summary} /> */}

      {/* <OutComeSection /> */}
      {/* <UpskillingSection
        upskillingData1={pageData.upskillingData1}
        upskillingData2={pageData.upskillingData2}
      />
      <UpskillMbl upskillMbl={pageData.upskillMbl} /> */}

      {/* <ToolsSection /> */}

      {/* <StructuredSection /> */}
    </div>
  );
};

export { generateStaticParams };
export default Page;
