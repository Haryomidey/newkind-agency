import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroContainer from '../../components/HeroContainer'

const PrivacyPolicy = () => {
    return (
        <main>
            <Header />
            <HeroContainer
                title={'Legal'}
                name={'Privacy Policy'}
            />
            <div className='w-full px-5 sm:px-20 pt-20 pb-10'>
                <h1 className='text-2xl font-semibold'>Introduction</h1>
                <p className='text-xs'>
                    We take our brand seriously and extend the same courtesy to all users of www.newkindred.com.
                    <br /><br />
                    We have a commitment to protect the privacy of users of our Site and this informs how we use your personal information. We understand the trust and expectation that influences you to provide your personal information on our website and we treat it as such to ensure a safe online experience for you.
                    <br /><br />
                    We have through this Privacy Policy, explained our approach to any personal data that we might collect from you or which we have obtained about you from a third party and the purposes for which we process your personal data.
                    <br /><br />                    
                    When we talk about “personal data”, we mean any information which relates to an identified or identifiable living individual. Individuals might be identified by reference to a name, an identification number, location data, an online identifier (such as an IP address) or to other factors that are specific to them, such as their physical appearance.
                    <br /><br />                    
                    This Privacy Notice informs you of the nature of the personal data about you that is processed by us and how you can request that we delete it, update it, transfer it and/or provide you with access to it.
                    <br /><br />                  
                    This Privacy Notice sets out your rights in respect of our processing of your personal data. It is intended to assist you in making informed decisions when using the Site and our Services.
                    <br /><br />                   
                    Kindly peruse the rest of this Privacy Policy as we explain how your personal information is used. By using and continuing on our Site, it is deemed that you agree with all the terms of this policy, including our use of cookies.
                </p>
                <h1 className='text-2xl font-semibold mt-10'>What we refer to as Personal information</h1>
                <ol className='list-decimal pl-5 flex flex-col gap-3 mt-5 text-xs'>
                    <li>Information that you provide to us when making enquiries, including name, email address, location, age, gender, date of birth, details about your organization or employer, etc.</li>
                    <li>Information about your computer and about your visits to and use of our Site (including your IP address, geographical location, browser type and version, operating system, referral source, length of visit and page views).</li>
                    <li>Information that you provide to us when browsing through our Site, or that is generated in the course of the use of our Site (including the timing, frequency and pattern of navigation on our Site).</li>
                    <li>Information about you that you provide when submitting a job application on our Site.</li>
                    <li>Any other personal information that you send to us.</li>
                </ol>

                <h1 className='text-2xl font-semibold mt-10'>We gather information about you if you are:</h1>

                <div className='text-xs mt-5'>
                    <b>Our Customer</b> - We may collect and process your personal data if you buy products or services from us online. This is primarily in connection with the supply of goods or services to you.
                    <br /><br />
                    <b>An Applicant</b> - If you fill a form on our Site to apply for a job with us, whether through the Site or otherwise, we will collect and process your personal data in connection with your application.
                    <br /><br />
                    <b>On our mailing list</b> - If you browse our Site, register for updates on our Site, contact us with an enquiry through our Site, submit a complaint through our Site or use any Services available on our Site, we will collect and process your personal data in connection with your interaction with us and our Site.
                    <br /><br />
                    <b>Our employees or personnel</b> - If you (or your organization) supply products or services to us or otherwise partner with us, we may collect and process your personal data in connection with our receipt of those products and services and/or partnership. This may include personal data included in any email or telephone communications or recorded on any document relating to an order for the products or services.

                </div>
                

                <h1 className='text-2xl font-semibold mt-10'>KINDLY NOTE:-</h1>
                <ul className='list-disc pl-5 flex flex-col gap-5 text-xs mt-5'>
                    <li>That when you disclose to us the personal information of another person, it is assumed that you have that person's consent to both the disclosure and the processing of that personal information in accordance with this policy.</li>

                    <li>That this Policy only applies to our use of personal information obtained by us, whether from you directly or from a third party. It does not apply to personal data collected by third parties during your communications with those third parties or your use of their products or services.</li>
                </ul>
                <h1 className='text-2xl font-semibold mt-10'>Purposes for which we'll use your personal data</h1>
                <div className='text-xs mt-5'>
                    We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
                    <br /><br />
                    Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>Purpose/activity</p>
                    <p>Type of data</p>
                    <p>Lawful basis for processing including basis of legitimate interest</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To register you as a new customer</p>
                    <p>(a) Identity <br />(b) Contact</p>
                    <p>Performance of a contract with you</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To process and deliver your order including:
                        <br />
                        (a) Manage payments, fees and charges.
                        <br />
                        (b) Collect and recover money owed to us.
                    </p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Financial <br /> (d) Transaction <br /> (e) Marketing and Communications</p>
                    <p>
                        (a) Performance of a contract with you <br />
                        (b) Necessary for our legitimate interests (to recover debts due to us) <br />
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To manage our relationship with you which will include:
                        <br />
                        (a) Notifying you about changes to our terms or privacy policy.
                        <br />
                        (b) Asking you to leave a review or take a survey.
                    </p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Profile <br /> (e) Marketing and Communications</p>
                    <p>
                        (a) Performance of a contract with you <br />
                        (b) Necessary to comply with a legal obligation <br />
                        (c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services) <br />
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To enable you to partake in a prize draw, competition or complete a survey.</p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Profile <br /> (d) Usage <br /> (e) Marketing and Communications</p>
                    <p>
                        (a) Performance of a contract with you <br />
                        (b) Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business) <br />
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Technical <br /></p>
                    <p>
                        (a)  Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise) <br />
                        (b) Necessary to comply with a legal obligation <br />
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Profile <br /> (d) Usage <br /> (e) Marketing and Communications <br /> (f) Technical</p>
                    <p>
                        Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</p>
                    <p>(a) Technical <br />(b) Usage <br /></p>
                    <p>
                        Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-8 pb-6 border-b-4 sm:border-b-[8px] mt-10 text-xs gap-4'>
                    <p>To make suggestions and recommendations to you about goods or services that may be of interest to you.</p>
                    <p>(a) Identity <br />(b) Contact <br /> (c) Technical <br /> (d) Usage <br /> (e) Profile <br /> (f) Marketing and Communications</p>
                    <p>
                        Necessary for our legitimate interests (to develop our products/services and grow our business)
                    </p>
                </div>
                
                <h1 className='text-2xl font-semibold mt-10'>Using Your Personal Information</h1>
                <div className='text-xs mt-5'>
                    <p>Personal information submitted to us through our Site will be used for the purposes specified in this policy or on the relevant pages of our Site.</p>
                    <ul className='flex flex-col gap-4 list-disc pl-5 my-4'>
                        <li>We may use your personal information to deal with enquiries and complaints made by or about you relating to our Site</li>

                        <li>Enable your use of the services available on our Site;</li>

                        <li>Keep our Site secure and prevent fraud</li>

                        <li>Consider your job application</li>

                        <li>Discharge our regulatory responsibility</li>

                        <li>Send statements, invoices, newsletters, updates and payment information to you</li>

                        <li>Send you email notifications that you have specifically requested</li>

                        <li>Meet other purposes which we may inform you about from time-to-time.</li>

                        <li>We will not, without your express consent, supply your personal information to any third party for the purpose of their or any other third party's direct marketing.</li>
                    </ul>
                    <p>We will not, without your express consent, supply your personal information to any third party for the purpose of their or any other third party's direct marketing.</p>
                </div>

                <h1 className='text-2xl font-semibold mt-10'>Filing Complaints</h1>
                <p className='text-xs mt-5'>If you have a concern about any aspect of our privacy practices, including the way we have handled your personal data, please contact us using the contact details provided in the “How to reach us” section below.</p>

                <h1 className='text-2xl font-semibold mt-10'>Erasing Your Data</h1>
                <div className='text-xs mt-5'>
                    You can ask us to delete or remove your personal data in some circumstances, such as where we no longer need it or where you withdraw your consent (where applicable). If we have shared your personal data with others, we will let them know about the erasure where possible. If you ask us, where it is possible and lawful for us to do so, we will also tell you who we have shared your personal data with so that you can contact them directly.
                    <br /><br />
                    <b>Access:</b> If you ask us, we will confirm whether we are processing your personal data and, if so, provide you with a copy of that personal data (along with certain other details). If you require additional copies, we may charge a reasonable fee for producing those additional copies.
                    <br /><br />
                    <b>Data portability:</b> You have the right, in certain circumstances, to obtain personal data you have provided to us (in a structured, commonly used and machine readable format) and to reuse it elsewhere or to ask us to transfer it to a third party of your choice.
                    <br /><br />
                    <b>Rectification:</b> If the personal data we hold about you is inaccurate or incomplete, you are entitled to have it rectified. If we have shared your personal data with others, we'll let them know about the rectification where possible. If you ask us, where possible and lawful to do so, we will also tell you who we've shared your personal data with so that you can contact them directly.
                    <br /><br />
                    <b>Restrictions on processing:</b> You can ask us to 'block' or suppress the processing of your personal data in certain circumstances such as where you contest the accuracy of that personal data or you object to us processing it for a particular purpose. This may not mean that we will stop storing your personal data but, where we do keep it, we will tell you if we remove any restriction that we have placed on your personal data to stop us processing it further. If we've shared your personal data with others, we'll let them know about the restriction where it is possible for us to do so. If you ask us, where it is possible and lawful for us to do so, we'll also tell you who we've shared your personal data with so that you can contact them directly.
                    <br /><br />
                    <b>Objection:</b> You can ask us to stop processing your personal data, and we will do so, if we are:
                    <ul className='list-disc pl-5 pt-4 flex flex-col gap-4'>
                        <li>relying on our own or someone else's legitimate interest to process your personal data, except if we can demonstrate compelling legal grounds for the processing; or</li>
                        <li>processing your personal data for the purposes direct marketing.</li>
                    </ul>
                    <br /><br />
                    <b>Automated decision-making and profiling:</b> You have the right not to be subject to a decision when it is based on automatic processing, including profiling, if it produces a legal effect or similarly significantly affects you, unless such profiling is necessary for the entering into, or the performance of, a contract between you and us.
                    <br /><br />
                    <b>Withdrawal of consent:</b> If we rely on your consent (or explicit consent) as our legal basis for processing your personal data, you have the right to withdraw that consent at any time. You can exercise your right of withdrawal by contacting us using our contact details in the “How to reach us” section below or by using any other opt-out mechanism we may provide, such as an unsubscribe link in an email.

                </div>
                <h1 className='text-2xl font-semibold mt-10'>Disclosing Personal Information</h1>
                <div className='mt-5 text-xs'>
                   <p>
                        We may disclose your personal information to [any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors] insofar as reasonably necessary for the purposes set out in this policy.
                    </p>
                    <br /><br />
                    We may disclose your personal information to any authorized agency for investigation purposes.
                    <br /><br />
                    <p>We may disclose your personal information:</p>
                    <ul className='py-4 flex flex-col gap-4 list-disc pl-5'>
                        <li>to the extent that we are required to do so by law;</li>
                        <li>in connection with any ongoing or prospective legal proceedings;</li>
                        <li>in order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);</li>
                        <li>to any person who we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information.</li>
                        <li></li>
                    </ul>
                    <p>Except as provided in this policy, we will not provide your personal information to third parties.</p>
                </div>
                <h1 className='text-2xl font-semibold mt-10'>Information Protection</h1>
                <div className='text-xs mt-5'>
                    We may use cookies to collect your personal information. Cookies are unique identifiers which are used to customize your website, mobile application or social media site experience. Most web browsers automatically accept cookies, but you can usually change your browser to prevent or notify you whenever you are sent a cookie. This gives you the chance to decide whether or not to accept the cookie. A cookie does not tell us who you are, your email address, or any other personal information. We use the information it provides to help us improve our website, mobile application, social media site and our services, and to provide our visitors with a better visit. Even without accepting a cookie you can still access many of the features on the site. There may, however, be limitations on your use of some site functions.
                </div>
                <h1 className='text-2xl font-semibold mt-10'>How To Reach Us</h1>
                <p className='text-xs mt-5'>Should you have any enquiries or questions about this Privacy Notice or want to exercise your rights set out in this Privacy Notice, you can contact us by sending an email to legal@newkindred.com.</p>
            </div>
            <Footer />
        </main>
    )
}

export default PrivacyPolicy
