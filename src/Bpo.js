import React from "react";
import bpo1 from './assets/bpo1.jpg'
import bpo2 from './assets/bpo2.jpg'
import bpo3 from './assets/bpo3.jpg'

const Bpo = () => {
    return(
        <div className="bpo my-3 container-fluid">
            <div className="row row1">
                <div className="col-lg-6 m-auto">
                    <img src={bpo1} alt="voice process" />
                </div>
                <div className="col-lg-6">
                    <h1>Voice Process</h1>
                    <p>
                    Our BPO firm provides a variety of speech process solutions to assist businesses in a variety of industries. We have a staff of highly qualified and experienced individuals who work hard to deliver exceptional customer service, sales support, and other services to our clients. We are your go-to service provider for inbound and outbound call center services. Our cutting-edge technologies and personalized solutions enable us to exceed expectations and assist you in improving the image of your company.
                    </p>
                    <p>
                    BPO operations include voice process services as a crucial component. They entail handling incoming and outgoing calls to deliver top-notch customer service, sales support, and other services. BPO firms provide various services, including answering consumer questions, resolving complaints, making sales calls, conducting surveys, and providing technical assistance. Utilizing cutting-edge communication technology ensures effective call management and enables businesses to offer 24/7 service to their international clients. By outsourcing their voice activities, businesses can drastically lower operational expenses, increase customer satisfaction, and concentrate on their core skills.
                    </p>
                </div>
            </div>

            <div className="row row2 d-md-flex flex-row-reverse">
                <div className="col-lg-6 m-auto">
                    <img src={bpo2} alt="non-voice process" />
                </div>
                <div className="col-lg-6">
                    <h1>Non-Voice Process</h1>
                    <p>
                    Our non-voice process solutions are intended to help you streamline and digitize your business processes. We provide a range of back-office and front-office support services to assist you in reducing costs and optimizing operations. Email support, chat support, social media management, and other non-voice process services are available. We use cutting-edge technology and software to provide high-quality, effective services.
                    </p>
                    <p>
                    Non-voice process services, provided by BPO firms, cover a broad range of tasks that don't directly involve speaking with consumers over the phone. These services include back-office assistance, email support, chat support, social media management, data processing, and content moderation. BPO businesses work with competent personnel who complete these activities precisely and effectively. Companies can save time and money by outsourcing non-voice tasks while also gaining access to the knowledge and scalability of BPO service providers. This enables firms to refocus their resources on meaningful projects and essential operations, eventually leading to higher productivity and growth


                    </p>
                </div>
            </div>

            <div className="row row3">
                <div className="col-lg-6 m-auto">
                    <img src={bpo3} alt="data entry" />
                </div>
                <div className="col-lg-6">
                    <h1>Data Entry</h1>
                    <p>
                    We understand the significance of data quality and reliability at our BPO firm. Our data entry services are intended to assist you in managing and streamlining your data-related chores. Our data entry experts are capable of performing a wide range of data entry tasks, including online data input, image data entry, and more. We provide cost-effective solutions while ensuring quick and precise data input services. Please contact us if you have any unique requirements or inquiries. Our staff is dedicated to offering the best BPO services for your company
                    </p>
                    <p>
                    Data management that is accurate and dependable is critical for firms in every industry. BPO businesses' data entry services assist organizations streamline their data-related duties while also ensuring data correctness and integrity. Online data entry, image data entry, data capture, data purification, and database migration are all handled by skilled data entry experts. Businesses can free up key resources, cut operating expenses, and focus on using data to make educated decisions by outsourcing these duties. To ensure confidentiality and compliance with data protection rules, BPO service providers use advanced technology and data security procedures.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bpo;