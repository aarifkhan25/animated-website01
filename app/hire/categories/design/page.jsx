import React from 'react'
import Main from "./Main.jsx";
import DesignTalent from "./DesignTalent.jsx"
import TailoredResults from "./TailoredResults.jsx"
import StepToGrowth from "./StepToGrowth.jsx";
import ComparisonTable from "./ComparisonTable.jsx";
import TrackRecords from "./TrackRecords.jsx";
import DesignProjects from "./DesignProjects.jsx";
import BestCandidate from "./BestCandidate.jsx";
import FAQ from "./FAQ.jsx";
import OurClient from "./OurClient.jsx";
import FractionalHiringSection from './FractionalHiringSection.jsx'
import {designData} from "@/data/hire/design.js"
export default function page() {
  const {talentData,stepstoGrowth,comparisonData,tag,statsData,blog,skillsData}=designData
  return (<>
    <Main textColor="#fe00c7" />
    <DesignTalent textColor="#fe00c7" bgColor="#3a002b" talentData={talentData} />
    <TailoredResults textColor="#fe00c7"/>
    <StepToGrowth textColor="#fe00c7" borderColor="#3a002b" stepstoGrowth={stepstoGrowth}/>
        <FractionalHiringSection textColor="#fe00c7" bgColor="#3a002b" />
    <ComparisonTable textColor="#fe00c7" bgColor="#3a002b" comparisonData={comparisonData}/>
    <TrackRecords textColor="#fe00c7" borderColor="#3a002b" tag={tag} statsData={statsData}/>
<OurClient textColor="#fe00c7"/>
    <FractionalHiringSection textColor="#fe00c7" bgColor="#3a002b" />
    <BestCandidate textColor="#fe00c7" />
    <FAQ textColor="#fe00c7" />
    <DesignProjects textColor="#fe00c7" borderColor="#3a002b" title="From Our blog" role="blog" blog={blog} />
    <DesignProjects textColor="#fe00c7" borderColor="#3a002b" title="Design Projects" role="design" />
    <DesignProjects textColor="#fe00c7" borderColor="#3a002b" title="Realated Skills" role="skills" skillsData={skillsData} />
    <FractionalHiringSection textColor="#fe00c7" bgColor="#3a002b" />
  </>
  )
}
