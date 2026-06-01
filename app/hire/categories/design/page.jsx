import React from 'react'
import Main from "./Main.jsx";
import DesignTalent from "./DesignTalent.jsx"
import TailoredResults from "./TailoredResults.jsx"
import StepToGrowth from "./StepToGrowth.jsx";
import ComparisonTable from "./ComparisonTable.jsx"
export default function page() {
  return (<>
    <Main textColor="#fe00c7" />
    <DesignTalent textColor="#fe00c7" bgColor="#3a002b" />
    <TailoredResults textColor="#fe00c7"/>
    <StepToGrowth textColor="#fe00c7" borderColor="#3a002b"/>
    <ComparisonTable textColor="#fe00c7" bgColor="#3a002b"/>

  </>
  )
}
