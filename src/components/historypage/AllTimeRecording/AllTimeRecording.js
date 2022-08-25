import React from "react";


function AllTimeRecording ({allTimeRecording}) {
     return allTimeRecording ? 
        <div className="backing fields historyElems">
        <h3>Проведено в медитации:</h3>
        <h2> {allTimeRecording} секунд </h2>
        </div> 
        : 
        <div></div>
        }

    


export default AllTimeRecording