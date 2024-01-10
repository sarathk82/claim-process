import React, { useState } from 'react';
import './CreateProject.css';
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const [templateFile, setTemplateFile] = useState(null);

    const [uploadOption, setUploadOption] = useState(''); // State to track the selected upload option
    const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarExpanded(!isNavBarExpanded);
    };




    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            if (templateFile) {
                setUploadOption('imageAndFile'); // Both files are uploaded
            } else {
                setUploadOption('image');
            }
            console.log('Image uploaded:', file.name);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTemplateFile(file);
            if (imageFile) {
                setUploadOption('imageAndFile'); // Both files are uploaded
            } else {
                setUploadOption('file');
            }
            console.log('File uploaded:', file.name);
        }
    };


    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        projectDescription: '',
        category: '',
        geography: '',
        marketing: '',
        regulatory: '',
        rnd: '',
        legal: ''
    });

    const handleNext = () => {
        const form = document.querySelector('form');
        if (form.checkValidity()) {

            setStep(step + 1); // Proceed to the next step if the form is valid
        } else {
            form.reportValidity(); // Display native browser validation messages
        }
    };


    const handlePrev = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Move to the previous step only if the current step is not the first step
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectDetails({
            ...projectDetails,
            [name]: value
        });
    };

    const handleCancel = () => {
        const shouldCancel = window.confirm('Are you sure you want to cancel?');
        if (shouldCancel) {
            navigate(`${process.env.PUBLIC_URL}/`);
        }
    };

    // Consolidated data for review
    const consolidatedData = {
        projectName: projectDetails.projectName,
        projectDescription: projectDetails.projectDetails,
        category: projectDetails.category,
        geography: projectDetails.geography, // Data from Step 1: Project Details
        marketing: projectDetails.marketing, // Data from Step 2: Team Details
        regulatory: projectDetails.regulatory,
        rnd: projectDetails.rnd,
        legal: projectDetails.legal,
        imageFile: imageFile, // Data from Step 3: Upload Image or File
        templateFile: templateFile
    };

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isCheckboxChecked) {
            // Perform submission action (e.g., API call, form submission)
            // Add your logic here for handling the form submission
            console.log("Form submitted!");
        } else {
            alert('Please check the box to confirm before submitting.');
        }
    };



    return (
        <div>   <Header isNavBarExpanded={isNavBarExpanded} toggleNavBar={toggleNavBar} />

            <div className="wizard-form">
                <div className="stepper">
                    {/* Step 1 */}
                    <div className={`step ${step === 1 ? 'active' : step > 1 ? 'completed' : 'not-started'}`}>
                        <div className="chevron">1</div>
                        <div>Project Details</div>
                    </div>


                    <div className={`step ${step === 2 ? 'active' : step > 2 ? 'completed' : 'not-started'}`}>
                        <div className="chevron">2</div>
                        <div>Teams</div>
                    </div>

                    <div className={`step ${step === 3 ? 'active' : step > 3 ? 'completed' : 'not-started'}`}>
                        <div className="chevron">3</div>
                        <div>Build Claims</div>
                    </div>

                    <div className={`step ${step === 4 ? 'active' : step > 4 ? 'completed' : 'not-started'}`}>
                        <div className="chevron">4</div>
                        <div>Review Claims</div>
                    </div>

                </div>

                <form>
                    {/* Step 1: Project Details */}
                    {step === 1 && (
                        <div>
                            <h2>Step 1: Project Details</h2>
                            {/* Project Details Form */}
                            <div>
                                <label htmlFor="projectName">Project Name<span className="mandatory">*</span></label>
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
                                <label htmlFor="marketing">Marketing<span className="mandatory">*</span></label>
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

                    {/* Step 2 */}
                    {step === 3 && (
                        <div className="step">
                            {/* Step 3 content */}
                            <h2>Step 3: Upload Image or File</h2>
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="image"
                                        checked={uploadOption === 'image' || uploadOption === 'imageAndFile'}
                                        onChange={(e) =>
                                            setUploadOption(e.target.checked ? 'image' : '')

                                        } disabled
                                    />
                                    Upload Image
                                    <span className="mandatory">*</span>
                                </label>

                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    required

                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        value="file"
                                        checked={uploadOption === 'file' || uploadOption === 'imageAndFile'}
                                        onChange={(e) =>
                                            setUploadOption(e.target.checked ? 'file' : '')
                                        } disabled
                                    />
                                    Upload File
                                    <span className="mandatory">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileUpload"
                                    accept=".pdf"
                                    onChange={handleFileUpload}
                                    required
                                />
                            </div>

                            <div className="file-preview">
                                {imageFile && (
                                    <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
                                )}
                                {templateFile && (
                                    <p>Uploaded file: {templateFile.name}</p>
                                )}
                            </div>
                        </div>
                    )}





                    {/* Step 4 */}
                    {step === 4 && (
                        <div className="step">
                            <h2>Step 4: Review Claims</h2>
                            {/* Displaying consolidated data for review */}
                            <div className="review-section">
                                <h3>Project Details:</h3>
                                <p>Project Name: {consolidatedData.projectName}</p>
                                <p>Project Description: {consolidatedData.projectDescription}</p>
                                <p>Category: {consolidatedData.category}</p>
                                <p>Geography: {consolidatedData.geography}</p>

                                <h3>Team Details:</h3>
                                <p>Marketing: {consolidatedData.marketing}</p>
                                <p>Regulatory: {consolidatedData.regulatory}</p>
                                <p>R&D: {consolidatedData.rnd}</p>
                                <p>Legal: {consolidatedData.legal}</p>

                                <h3>Uploaded Files Preview:</h3>
                                <div className="file-preview">
                                    {consolidatedData.imageFile && (
                                        <img src={URL.createObjectURL(consolidatedData.imageFile)} alt="Uploaded" />
                                    )}
                                    {consolidatedData.templateFile && (
                                        <p>Uploaded claims template: {consolidatedData.templateFile.name}</p>
                                    )}
                                </div>
                                <div className="checkbox-container">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={isCheckboxChecked}
                                            onChange={handleCheckboxChange}
                                            required
                                        />
                                        I confirm that the information provided is accurate.
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Next and Back Buttons */}
                    <div className="button-container">
                        {step > 1 && <button type="button" onClick={handlePrev}>Back</button>}
                        {step < 5 && <button type="button" onClick={handleNext}>Next</button>}
                        <button type="button" onClick={handleCancel} >Cancel</button>
                        {step === 5 && <button type="button" onClick={handleSubmit}>Submit</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
