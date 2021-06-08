import React from 'react';



function CovidGraph() {

   

    return (
        <>
            <div>
                <div className="graph_container">
                    <div className="death_graph">
                        <div className="flourish-embed flourish-chart" data-src="story/230110"></div>
                    </div>
                </div>
                <div className="graph_container">
                    <div className="vactination">
                        <div className="flourish-embed flourish-chart" data-src="story/767666"></div>
                    </div>
                </div>
                <div className="graph_container">
                    <div className="death_graph">
                        <div className="flourish-embed flourish-chart" data-src="story/230085"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CovidGraph;