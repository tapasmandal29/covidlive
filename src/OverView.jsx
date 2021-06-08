import React from 'react';
import OverviewImages from './images/overviewImages.jpg';

function OverView(props) {
   return (
      <>
         <div className="oveview_container container-fluid">
            <div className="overview_content">
               <div className="text">
                  <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                  <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
                  <p>The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </p>
                  <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
                  <p>Stay informed:</p>
                  <ul>
                     <li>Protect yourself: advice for the public</li>
                     <li>Myth busters</li>
                     <li>Questions and answers</li>
                     <li>Situation reports</li>
                     <li>All information on the COVID-19 outbreak</li>
                  </ul>
               </div>
               <div className="overview_image">
                  <img src={OverviewImages} alt="overview" className="img-fluid"/>
               </div>
            </div>
         </div>
      </>
   );
}

export default OverView;