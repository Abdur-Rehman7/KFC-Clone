// TermsAndCondition.jsx
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const TermsAndCondition = () => {
  return (
    <>
      <section className="text-center mx-[32px]">
        <div className="relative flex items-center justify-center mb-[35px]">
          <div className="absolute left-0 top-2">
            <Link
              to="/"
              className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary"
            >
              <IoIosArrowBack size={20} />
            </Link>
          </div>
          <span className="text-4xl font-bold text-text">
            Terms and Conditions
          </span>
        </div>
        <p className="text-[20px] font-semibold">USER AGREEMENT</p>
        <p className="text-[20px] font-semibold">
          FOR USE OF KFC WEBSITE, MOBILE AND KIOSK APPLICATION
        </p>
        <p className="text-[16px]">Revised on 04.09.2025</p>
        <div className="text-left">
          <ol className="numbered-list">
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] pl-[15px] font-semibold">DEFINED TERMS</p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Agreement’</b> means this user agreement.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Application’</b> means KFC-branded application developed by
                the Company for iOS and Android mobile operating systems, the
                website, and for the Self- Service Kiosk to enable ordering and
                purchasing meals in KFC restaurants, delivering meals, and
                informing the User about news and promotions of the Company. The
                provisions of the Agreement also apply to chat bots to the
                extent that they duplicate the functionality of the Application.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Self-Service Kiosk’</b> means a machine that allows
                customers to choose and pay for orders themselves, without
                involving the restaurant staff in the process.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘User’</b> means a capable individual who has gone through
                the authorization process or started using the Self-Service
                Kiosk applications, given his or her consent to personal data
                processing, and installed the Application on his or her mobile
                device.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Company’</b> means Gray Mackenzie Restaurants International
                Limited(GMRIL) registered in the Companies Ordinance, 1984
                (XLVII of 1984) (now the Companies Act, 2017) in Pakistan under
                the State Registration Number K-06243 at Securities & Exchange
                Commission of Pakistan (SECP), Government of Pakistan.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Restaurant’</b> means any of the KFC restaurants included in
                the list of restaurants in the relevant section of the
                Application.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Order’</b> means a set of products (meals) of the KFC
                restaurants formed using the Application, which the User intends
                to collect at the selected Restaurant.
              </p>
              <p className="my-[15px] pl-[15px]">
                <b>‘Order Collection Time’</b> means time (hours/minutes)
                chosen/determined by the User to receive/collect the Order at
                the Restaurant.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">GENERAL PROVISIONS</p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                This Agreement governs the relationship between the Company and
                the User who has joined the Agreement to use the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Using the Application, a User can receive the Order service by
                forming the Order in the Application from the meals/products
                offered in the KFC restaurant selected by the User and pay for
                it using one of the payment methods available.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The terms of the Agreement are a public offer in accordance with
                article 14 (1) of the Constitution of the Islamic Republic of
                Pakistan. The Application may only be used on the terms of the
                Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The use of the Application constitutes the acceptance of a
                public offer and confirmation of the User’s consent to the terms
                of the Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Agreement shall come into force for the User upon
                installation of the Application/start of using the Kiosk and
                continue for an indefinite period. The effective version of the
                Agreement is an open document, published on the Internet and
                available to any User at: www.kfcpakistan.com.The Company may
                amend the Agreement. When amendments are made to the Agreement,
                the Company shall publish a new effective version of the
                Agreement, and the publication date is the date when a new
                version of the Agreement comes into force. The User shall be
                solely responsible for checking if the Agreement, which content
                can be changed/supplemented, is up-to-date. The User shall bear
                the risk of delay in getting familiar with the terms of the
                Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By continuing to use the Application after amendments have been
                made to the Agreement the User agrees to such amendments. The
                Agreement is drafted in accordance with the laws of Islamic
                Republic of Pakistan. Any dispute between the parties relating
                to or arising out of this Agreement or in connection therewith,
                shall be attempted to be settled amicably within 30 (thirty)
                days (or such extended period which the parties may mutually
                agree to in writing) after receipt by one party of the other
                party’s request for such amicable settlement. Any matters not
                covered by the Agreement shall be resolved in accordance with
                the laws of Islamic Republic of Pakistan.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                If the User disagrees with the terms of the Agreement, the use
                of the Application shall be terminated immediately.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By agreeing to the terms of the Agreement the User confirms his
                or her legal capacity, accuracy of the data entered by the User
                during registration, and assumes full liability for accuracy,
                completeness and reliability of such data.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Inquiries, proposals or claims from individuals or legal
                entities against the Company relating to the content or
                operation of the Application, infringement of rights and
                interests of third parties, failure to comply with requirements
                of laws of Islamic Republic of Pakistan, as well as inquiries
                from persons authorized by laws can be sent using a feedback
                form at{" "}
                <span className="text-primary">
                  customercare@kfcpakistan.com
                </span>
                .
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">PAYMENT</p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Application User can pay for the Order with a bank card
                online or any of the payment providers or cash as indicated in
                the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                When confirming the Order, the User makes a payment in the
                Application using a bank card. Settlements are carried out by
                Habib Bank Limited. The Order can be paid for using bank cards
                of the following payment systems: - Visa Card, Master Card,
                Union pay Card.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                In order to make a payment in the mobile application the User
                has to enter bank card details. Bank card details are
                transferred in compliance with all necessary security measures.
                Bank card details will only be transferred via a secure channel
                (SSL protocol). Bank card details are impersonal; they are
                transferred in encrypted form and stored only on the specialist
                equipment of Habib Bank Limited. Bank card details are not
                communicated to the Company; the Company does not store/process
                the details of the Users’ bank cards.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                In order to make a payment at the Self-Service Kiosk the User
                has to put a bank card into a payment terminal. Bank card
                details are transferred in compliance with all necessary
                security measures. Bank card details will only be transferred
                via a secure channel (SSL protocol). Bank card details are
                impersonal; they are transferred in encrypted form and stored
                only on the specialist equipment of Habib Bank Limited. Bank
                card details are not communicated to the Company; the Company
                does not store/process the details of the Users’ bank cards.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Payment can be made using a linked bank card a payment
                transaction carried out through website or Mobile Application
                using the linked Card without re-entering the details. These
                payments are made only if the User is authenticated/registered
                according to the Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By using the Application, User agrees to provide accurate and
                complete payment information. User authorizes Company to store
                User’s card details securely for future transactions. This
                storage is compliant with industry standards and regulations to
                ensure the protection of User’s financial information. User may
                update or remove his/her card details at any time through the
                application's settings. By agreeing to these terms, User
                acknowledges and accepts the responsibility for maintaining the
                confidentiality of User’s payment information.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Upon return to the Application after making payment, the User is
                notified of the results: if debit of the requested amount is
                confirmed, the User's Order is assigned with a number and a code
                for collecting the Order, after which the User can receive
                delivery or collect the Order at the selected Restaurant and at
                the selected time; if debit of the requested amount is rejected,
                the User can repeat the payment procedure.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The paid Order can be collected at the Order collection area of
                the Restaurant after presenting the code obtained when placing
                and paying for the Order via the Application or using the
                technology of identification by digital model (code) of the User
                identifier (by face geometry).
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The paid Order can be delivered in accordance to the delivery
                company terms and conditions.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                When placing, paying for and collecting the Order, the User
                needs to make sure that he or she has a stable connection to the
                Internet as the operation of the Application may be suspended
                without such connection.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">
                RIGHTS AND OBLIGATIONS OF THE USER
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall use the Application solely for personal
                non-commercial purposes. The User may use the Application solely
                in accordance with the Agreement. When registering, the User is
                obliged to use only the phone number allocated to him by the
                telecom operator and registered in accordance with the procedure
                established by the legislative acts of the Islamic Republic of
                Pakistan for the User.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall not disseminate false or confidential information
                about the Application or the Company.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall not use third-party software and other technical
                means affecting the operation of the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User is not allowed with or without the assistance of third
                parties to decompile, distribute the Application, to make the
                Application public or provide other access to the Application,
                reverse-engineer the Application or its individual elements.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall take appropriate measures to ensure the safety of
                his or her mobile device and shall be personally responsible for
                safety of personal data contained in the Application if third
                parties access the User’s mobile device.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User guarantees that the User will not take any actions
                aimed at causing damage to the Company.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                If the User fails to comply with the obligations set out in
                section 4 and 8 of the Agreement, the User shall compensate the
                Company for damage caused by such actions, namely direct and
                indirect losses incurred by the Company.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall be liable for using the Application and its
                services in any way not expressly permitted by the Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The paid Order can be delivered in accordance to the delivery
                company terms and conditions.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The User shall be entitled at any time unilaterally and out of
                court to repudiate the Agreement by deleting the Application
                from the User’s mobile device. In this case, the processing of
                the User information including the User personal data is ongoing
                and may be terminated in accordance with the terms set out in
                section 8 of this Agreement.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">
                RIGHTS AND OBLIGATIONS OF THE COMPANY
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company shall be entitled to control and correct the content
                of the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                If the Company detects unfair use of the Application by the
                User, the Company shall be entitled at any time to restrict or
                block the User’s access to the Application without notifying the
                User.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company may at any time terminate the Agreement unilaterally
                by blocking the possibility of using the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company may transfer its rights and obligations under the
                Agreement to third parties for the purpose of performing the
                Agreement without additional consent of the User.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">
                CANCELLATION OF THE ORDER
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Order paid for earlier online by card can be cancelled no
                later than 7 (seven) minutes before the Order Collection Time in
                the respective section of the Application. When an Order
                cancellation request has been sent, the amount debited earlier
                will be returned to the bank card wherefrom the funds were
                debited pursuant to the terms and procedures of the User’s card
                issuing bank.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">LIMITATION OF LIABILITY</p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company makes no warranties in particular regarding
                operability of the Application, its functionality, information
                content, and availability, reliability of operation or
                compliance with the needs and expectations of the User.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Under no circumstances the Company shall be liable for
                performance of the User’s mobile device.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company shall not be liable for any possible damage or loss
                caused by using the Application.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company shall not be liable for adverse effects and losses
                caused by the events and circumstances beyond influence and
                competence of the Company, as well as for actions (omissions) of
                third parties, including actions or omissions of the User.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company shall not be liable for taste of meals if the Order
                is collected by the User with delay.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">
                PERSONAL DATA PROCESSING POLICY
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company will process Users’ personal data in order to
                organize and perform interaction between the Company and the
                User, including when such personal data is required to properly
                provide the services under this Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The purpose of processing of Users’ personal data is to organize
                and perform interaction between the Company and the User; it
                implies: registration/authorization of the User in the systems
                (including on the website, in the mobile application, at
                self-service kiosks, in chat bots), placing, collecting or
                delivering orders, providing the User with services in the food
                service sector, running promotional, marketing and information
                campaigns, taking polls and conducting marketing researches,
                administering loyalty programs, User data enrichment and
                segmentation, informing the User about promotions, discounts and
                special offers via bulk messaging and bulk e-mailing, improving
                the quality of the service and goods provided and their
                promotion, informational support of the User, administering
                complaints and organization of interaction with the User,
                including with assistance of third parties.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The processed personal data of the User includes last name,
                first name, patronymic, date of birth, age, gender, delivery
                address, contact information (including phone numbers, email
                address, etc.), information about preferences and orders of the
                User (date and time, order contents, delivery address,
                restaurant, etc.), bank card identifier, about visiting the
                Self-Service Kiosks (including date and time, application,
                actions performed, geolocation, etc.) information about use of
                mobile applications.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Personal data processing implies any actions (operations) or
                combination of actions (operations) of personal data processing
                using any processing methods. Possible actions performed by the
                Company with personal data include collection, recording,
                systematization, accumulation, storage, specification (update,
                change), extraction, use, transfer (distribution, provision,
                access), depersonalization, blocking, deletion, destruction;
                cross-border transfer, including in foreign countries that do
                not provide adequate protection of rights of personal data
                subjects (including in the UAE and the USA). The Company may
                engage third parties in User personal data processing, transfer
                User personal data to Company’s franchisor, KFC MENAPAKT FZ LLC
                (the UAE legal entity) and to third parties or delegate User
                personal data processing to third parties, or delegate right to
                transfer User personal data and delegate User personal data
                processing to KFC MENAPAKT FZ LLC and third parties, if it is
                necessary in order to achieve personal data processing goals
                under this Agreement.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Users provide the Company with their personal data of their
                own free will and in their own interest.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By filling out forms provided in the Application (including by
                registering in the Application or performing other actions) the
                User gives consent to processing of the User personal data on
                the terms set out in this Agreement. In addition, the User
                agrees to receive promotional and informational messages from
                the Company in the form of emails (including to the email
                address specified by the User), text messages, push messages,
                messages in messengers and social networks, and other types of
                messages via telecommunication networks, including by use of
                telephone, facsimile, mobile radiotelephone communication, data
                transmission networks (including to the mobile phone number
                specified by the User), as well as using social networks and
                other websites on the Internet for any promotions, news,
                discounts, activities, or other possible information from the
                Company, and to participate in promotional, marketing or other
                events aimed to promote the services of the Company and its
                partners.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By accepting the terms of this Agreement, the User confirms that
                consent is given indefinitely, until its withdrawal, the User is
                aware of his or her rights and obligations provided in the Law
                of Constitution of the Islamic Republic of Pakistan, in
                particular the right to access his or her personal data, to
                withdraw his or her consent. The User may withdraw his or her
                consent to personal data processing by the Company using the
                feedback form on the website where the User’s phone number,
                email or social network identifier specified during sign-up,
                must be specified. The User is aware that the User in the
                Company’s system is identified by a phone number, email or
                social network identifier specified during sign-up, and
                acknowledges that if the phone number, email or social network
                identifier are not specified in the request, the Company will
                have the right to continue processing the User personal data.
                User’s personal data will be deleted or anonymized once it is no
                longer required for processing, in accordance with applicable
                data protection laws and internal retention policies.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By accepting the terms of this Agreement, the User hereby
                confirms that the personal data provided by the User is
                accurate, including that the phone number provided by the User
                to the Company is the phone number assigned to the User by a
                mobile operator and registered in accordance with the procedure
                established by the legislative acts for the User. The Company
                does not verify the accuracy of the personal data provided by
                the Users and cannot assess the legal capacity of the Users.
                However, the Company assumes that the User provides accurate and
                adequate personal data and keeps it updated. The User shall
                compensate for the documented damage to the Company that may
                result from providing inaccurate or incomplete data.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                When processing personal data, the Company shall take necessary
                and adequate organizational and technical measures to ensure
                protection of personal data against accidental and unauthorized
                access, destruction, modification, access lock or other
                unauthorized actions.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Taking into account the specific nature of the Internet, the
                Company cannot guarantee that unauthorized third parties will
                not be able to circumvent the protection measures taken by the
                Company or use the Users’ data for inappropriate purposes as
                such actions do not depend on the measures taken by the Company.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                The Company shall not be liable for receipt by third parties of
                the User personal data by gaining access to the User’s mobile
                device. The User shall be solely liable for safety of the data
                on the User’s mobile device.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                By using the Application, the User agrees to the abovementioned
                personal data processing procedure and terms.
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                When User uses our Application and access or use our Service, or
                otherwise engage with us through a computer or mobile device, we
                and our third-party partners, automatically collect information
                about how you access and use the Service and information about
                the device you use to access the Service (cookies). By using our
                Application, the User gives consent to processing of the
                cookies.
              </p>
            </li>
            <li className="mb-[50px] numbered-item">
              <p className="my-[15px] font-semibold">FINAL PROVISIONS</p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                If any disputes or disagreements arise from or in connection
                with performance of the Agreement, the User and the Company
                shall make every effort to resolve them by means of negotiation
                via email. Inquiries, proposals or claims from individuals or
                legal entities against the Company relating to the content or
                operation of the Application, infringement of rights and
                interests of third parties, failure to comply with requirements
                of laws, be sent using a feedback form at
                <span className="text-primary">
                  {" "}
                  customercare@kfcpakistan.com
                </span>
                .
              </p>
              <p className="my-[15px] pl-[15px] numbered-paragraph">
                Invalidity of any provision of the Agreement shall not affect
                the validity or applicability of the remaining provisions of the
                Agreement.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default TermsAndCondition;
