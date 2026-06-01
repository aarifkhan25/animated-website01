import React from 'react'
import Main from "./Main.jsx";
import DesignTalent from "./DesignTalent.jsx"
import TailoredResults from "./TailoredResults.jsx"
import StepToGrowth from "./StepToGrowth.jsx";
import ComparisonTable from "./ComparisonTable.jsx";
import TrackRecords from "./TrackRecords.jsx";
import DesignProjects from "./DesignProjects.jsx";
export default function page() {
  return (<>
    <Main textColor="#fe00c7" />
    <DesignTalent textColor="#fe00c7" bgColor="#3a002b" />
    <TailoredResults textColor="#fe00c7"/>
    <StepToGrowth textColor="#fe00c7" borderColor="#3a002b"/>
    <ComparisonTable textColor="#fe00c7" bgColor="#3a002b"/>
    <TrackRecords textColor="#fe00c7" borderColor="#3a002b"/>

    <DesignProjects textColor="#fe00c7" borderColor="#3a002b" title="From Our blog" role="blog"/>
    <DesignProjects textColor="#fe00c7" borderColor="#3a002b" title="Design Projects" role="design" />
   
  </>
  )
}
