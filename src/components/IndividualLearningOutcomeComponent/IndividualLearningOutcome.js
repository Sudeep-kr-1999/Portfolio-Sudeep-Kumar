import React from 'react'
import "./individuallearning.css";
function IndividualLearningOutcome({learningOutcome}) {
    return (
        <div className='individual-outcome'>
           <div className="outcome-text">
            {learningOutcome}
           </div>
        </div>
    )
}
export default IndividualLearningOutcome;
