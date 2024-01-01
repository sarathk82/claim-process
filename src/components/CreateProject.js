import React, { useState } from 'react';
import './CreateProject.css';
import Header from './Header.js';

const CreateProject = () => {
    const [step, setStep] = useState(1);
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        projectDescription: '',
        category: '',
        geography: ''
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectDetails({
            ...projectDetails,
            [name]: value
        });
    };

    const handleCancel = () => {

    };

    return (
        <div><Header />

            <div className="wizard-form">
                <div className="stepper">
                    {/* Step 1 */}
                    <div className={`step ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                        <div className="chevron">1</div>
                        <div>Project Details</div>
                    </div>


                    <div className={`step ${step === 2 ? 'active' : step > 1 ? 'completed' : ''}`}>
                        <div className="chevron">2</div>
                        <div>Teams</div>
                    </div>
                </div>

                <form>
                    {/* Step 1: Project Details */}
                    {step === 1 && (
                        <div>
                            <h2>Step 1: Project Details</h2>
                            {/* Project Details Form */}
                            <div>
                                <label htmlFor="projectName">Project Name(Mandatory)</label>
                                <input
                                    type="text"
                                    id="projectName"
                                    name="projectName"
                                    value={projectDetails.projectName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="projectDescription">Project Description</label>
                                <textarea
                                    id="projectDescription"
                                    name="projectDescription"
                                    value={projectDetails.projectDescription}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={projectDetails.category}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="geography">Geography</label>
                                <input
                                    type="text"
                                    id="geography"
                                    name="geography"
                                    value={projectDetails.geography}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </div>
                    )}
                    {/* Step 2 */}
                    {step === 2 && (
                        <div>
                            <h2>Step 2: Team Details</h2>
                            {/* Project Details Form */}
                            <div>
                                <label htmlFor="marketing">Marketing</label>
                                <input
                                    type="text"
                                    id="marketing"
                                    name="marketing"
                                    value={projectDetails.marketing}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="regulatory">Regulatory</label>
                                <input
                                    type="text"
                                    id="regulatory"
                                    name="regulatory"
                                    value={projectDetails.regulatory}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="rnd">R&D</label>
                                <input
                                    type="text"
                                    id="rnd"
                                    name="rnd"
                                    value={projectDetails.rnd}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="legal">Legal</label>
                                <input
                                    type="text"
                                    id="legal"
                                    name="legal"
                                    value={projectDetails.legal}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </div>
                    )}

                    {/* Next and Back Buttons */}
                    <div class="button-container">
                        {step > 1 && <button onClick={handlePrev}>Back</button>}
                        {step < 5 && <button onClick={handleNext}>Next</button>}
                        <button onClick={handleCancel} >Cancel</button>
                        {step === 5 && <button type="submit">Submit</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
