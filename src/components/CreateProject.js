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
        const shouldCancel = window.confirm('Are you sure you want to cancel?');
        if (shouldCancel) {
            navigate('/');
        }
    };



    return (
        <div><Header />

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
                            {/* Step 3 content */}
                            <h2>Step 4: Uploaded Files Preview</h2>
                            <div className="upload-buttons">
                                <div className="file-preview">
                                    {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />}
                                    {templateFile && <p>Uploaded claims template: {templateFile.name}</p>}
                                </div>
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
