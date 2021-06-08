import React from 'react';
import PreventImage from './images/prevention.png';

function Prevention(props) {
    return (
        <>
            <div className="prevention_container container-fluid">
                <div className="prevention_content">
                    <div className="text">
                        <p>To prevent infection and to slow transmission of COVID-19, do the following:</p>
                        <ul>
                            <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
                            <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
                            <li>Avoid touching your face.</li>
                            <li>Cover your mouth and nose when coughing or sneezing.</li>
                            <li>Stay home if you feel unwell.</li>
                            <li>Refrain from smoking and other activities that weaken the lungs.</li>
                            <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
                        </ul>
                        <p>With respect to moral theory, numerous grounds have been offered for the view that doctors have a duty to treat or an obligation to provide care to patients. With regards to pandemics, claims about the duties of doctors are most often grounded in so-called ‘special duties’ or ‘role related’ duties. In other words, by virtue of their profession, doctors have more stringent obligations of beneficence than most, and they have obligations to a specified group of persons (their patients) that non-medical personnel have no obligation to help. Clark5 argues that the duty can be justified with reference to:</p>
                         <p>special skills possessed by healthcare professionals, which mean that they are uniquely placed to provide aid, thereby increasing their obligation</p>
                         <p>the individual’s freely made decision to enter the profession with the knowledge of what the job entails and the nature of the associated risks</p>
                          <p>the social contract between healthcare professionals and the society in which they work. However, it seems clear that the duty to treat cannot be ‘absolute’—that doctors have a duty to work regardless of the circumstance. Doctors have rights to protection and to care during an infectious disease outbreak, as do other members of society.</p>
                    </div>
                    <div className="prevent_image">
                        <img src={PreventImage} alt="prevent" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prevention;