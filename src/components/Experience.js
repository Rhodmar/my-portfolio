import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience">
            <div className="content">
                <div className="text">
                    <h1>Where I've Worked</h1>
                </div>
                <div className="jobs">
                    <div className="job">
                        <div className="job-header">
                            <div>
                                <h2>Project and Flow Manager</h2>
                                <h3>Chadwick Digital &middot; Remote</h3>
                            </div>
                            <span className="dates">2024 &ndash; Present</span>
                        </div>
                        <ul>
                            <li>Manage end-to-end project delivery, overseeing timelines, resources, and cross-functional workflows to ensure on-time completion.</li>
                            <li>Design and optimize operational flows and automations using tools such as Zapier, Make, and Power Automate to streamline internal processes.</li>
                            <li>Administer and maintain CRM systems (GoHighLevel, HubSpot, Notion CRM, Flowlu), ensuring data integrity and pipeline visibility.</li>
                            <li>Run Chadwick Digital's social media presence, including <a href="https://www.instagram.com/chadwickdigital/" target="_blank" rel="noopener noreferrer">Instagram</a>, alongside SEO strategy to drive engagement and improve organic reach.</li>
                            <li>Serve as primary liaison between clients and development teams, translating business requirements into actionable tasks tracked via Trello and ClickUp.</li>
                            <li>Leverage AI tools (ChatGPT, Claude, Gemini, GitHub Copilot) to accelerate content creation, code reviews, and workflow automation.</li>
                        </ul>
                        <div className="tags">
                            <span className="tag">Project Management</span>
                            <span className="tag">Automation</span>
                            <span className="tag">CRM</span>
                            <span className="tag">Social Media</span>
                            <span className="tag">SEO</span>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-header">
                            <div>
                                <h2>Software Engineering Intern</h2>
                                <h3>Accenture, Inc. &middot; Mandaluyong, Metro Manila</h3>
                            </div>
                            <span className="dates">2024</span>
                        </div>
                        <ul>
                            <li>Built automation workflows using Power Automate, Logic Apps, and SSMS that improved daily team processes.</li>
                            <li>Produced Power BI visualizations of business-critical data to support ongoing software development decisions.</li>
                        </ul>
                        <div className="tags">
                            <span className="tag">Power Automate</span>
                            <span className="tag">Logic Apps</span>
                            <span className="tag">Power BI</span>
                            <span className="tag">SSMS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
