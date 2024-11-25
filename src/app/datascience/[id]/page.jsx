// src/app/datascience/[id]/page.jsx
import React from "react";
import { getPageData, generateStaticParams } from "@/utils/getDSPageData";
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
import MentorsSection from "@/app/components/course/mentor/Mentor";
import UpskillingSection from "@/app/components/course/upskill/UpskillSection";
import SyllabusSection from "@/app/components/course/syllabus/Syllabus";
import ToolsSection from "@/app/components/course/toolsSection/ToolsSection";
import FeeContent from "@/app/components/course/feeSection/FeeSection";
import UpskillMbl from "@/app/components/course/upskill/UpskillMbl";
import ProjectSection from "@/app/components/course/projectSection/ProjectSection";
import CertificateSection from "@/app/components/course/certificateSection/CertificateSection";

const Page = async ({ params }) => {
  const { id } = params;
  const pageData = await getPageData(id);
  

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
      />
      <Psummary summaryData={pageData.summary} />

      {/* Conditional Rendering for Practical Component */}

      <Practical />

      <ProgramSection programSectionData={pageData} />

      <OutComeSection />
      <AnimationNew />
      <ReviewSlider />
      <MentorsSection />
      <UpskillingSection upskillingData={pageData.upskillingData} />
      <UpskillMbl upskillMbl={pageData.upskillMbl} />
<ProjectSection/>
      <SyllabusSection
        sections={pageData.sections} // Assuming 'syllabusSections' is part of your page data
        brochureLink={pageData.brochureLink} // Assuming this exists
        brochurePdf={pageData.brochurePdf} // Assuming this exists
        interstedInHide={pageData.interstedInHide} // Assuming this exists
        radio={pageData.radio} // Assuming this exists
      />
      <ToolsSection/>
      <CertificateSection/>
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
      />
  
      <StructuredSection />
      <JobReadySection />
      <NewSevenSection />
    </div>
  );
};

export { generateStaticParams };
export default Page;
