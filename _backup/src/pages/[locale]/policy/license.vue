<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "End-User License Agreement",
    },
})
</script>

<template>
<policy-card>
    <v-space
        size="large"
        vertical
    >
        <v-text>
            This User Agreement (hereinafter - Agreement) is a license agreement and regulates the relations on the use of
            computer programs - the website available on the Internet at <app-sitelink />
            (hereinafter - Site) on the terms of a simple non-exclusive license between the Limited Liability Company "BITS CONSULTING"
            (OGRN 1217700304458, INN 7751200542), hereinafter referred to as "Licensor" and the natural person,
            using the Site for the placement of ads for property and property rights in the virtual space.
        </v-text>

        <v-text>
            The Site is a service that allows the Seller and the Buyer (hereinafter referred to as the Users) to buy and sell Virtual
            Assets. All transactions are performed directly between Users. The Licensor itself is not a party to any transactions carried
            out by its Users, but only acts as an arbitrator in resolving disputes and as an agent on behalf of the Buyer to ensure
            secure transactions. The terms of the agency agreement can be found by the Buyer at <app-sitelink />
        </v-text>

        <v-text>
            This Agreement is an offer in accordance with Article 438 of the Civil Code of the Russian Federation. The Agreement is
            valid in electronic form and does not require signing in the form of a single paper document.
        </v-text>
    </v-space>

    <v-collapse ghost>
        <ol class="list-none">
            <li>
                <v-collapse-panel
                    title="1. TERMS AND DEFINITIONS"
                    expanded
                >
                    <v-o-l>
                        <li>
                            Licensor - Limited Liability Company BITS CONSULTING (OGRN 1217700304458, INN 7751200542).
                        </li>

                        <li>
                            Seller - an individual who has reached the age of 18 years old, using the Site for the purpose of
                            placing ads for the sale of property and property rights in the virtual environment of the Internet.
                        </li>

                        <li>
                            Buyer - an individual who has reached the age of 18 years old, using the Site to purchase property
                            and property rights in the virtual environment of the Internet.
                        </li>

                        <li>
                            Users - individuals over 18 years of age, acting as Sellers and/or Buyers when using the Site.
                        </li>

                        <li>
                            Virtual property - property, property rights in the virtual environment of
                            the Internet (game money, coins, accounts, game items, chests, etc.).
                        </li>

                        <li>
                            Website is an Internet service located on the Internet at: https:/game-values.com, which is a
                            set of software and hardware that allows Users to carry out between each other secure transactions
                            for the purchase and sale of Virtual property.
                        </li>

                        <li>
                            Registration - actions of Users to create a Personal account on the Site according to the
                            established procedure.
                        </li>

                        <li>
                            Personal profile - an individual web page of the User on the Website, which contains information
                            about the placed advertisements on sale and/or purchase of Virtual property, stores the history of
                            transactions on purchase and sale of Virtual property, displays personal data of the User, as well as
                            other information related to the use of the Website.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="2. GENERAL PROVISIONS">
                    <v-o-l>
                        <li>
                            The current version of the Agreement is always available on the Internet at: <app-sitelink />
                        </li>

                        <li>
                            User completes the registration procedure and puts the symbol «» in the field "I have read and
                            agree with the User Agreement" means his consent to enter into the Agreement (Acceptance of the
                            Agreement). In this case, the written form of the contract is considered to be complied with.
                            Acceptance of the Agreement means unconditional acceptance of all of its provisions by the User,
                            and the User understands the essence and content of the provisions of the Agreement, including
                            the obligations imposed on it, in accordance with the Agreement.
                        </li>

                        <li>
                            In case of disagreement with the Agreement in whole and/or in any part, as well as in case if the
                            User is not a person who has reached the age of 18 years old, the User shall immediately stop using
                            the Website on all devices.
                        </li>

                        <li>
                            The Licensor has the right to unilaterally change the provisions of the Agreement by publishing
                            the new version of the Agreement on the corresponding page of the Website. By continuing to use
                            the Site after a new edition of the Agreement is published, the User agrees to the changes made to
                            the Agreement, and the User undertakes to read the new editions of the Agreement independently.
                        </li>

                        <li>
                            The Licensor is not directly involved in transactions of purchase and sale of Virtual Property
                            between the Seller and the Buyer, but only acts as an arbitrator in resolving disputes and as an
                            agent on behalf of the Buyer to ensure secure transactions.
                        </li>

                        <li>
                            The legal representative of the minor is responsible for the use of the Site by the minor.
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The User understands and unconditionally agrees that he uses the Site under this Agreement
                                    solely at his own risk and that the license to use the Site as a computer program is provided to the
                                    User on an "as is" and "as available" basis, namely, the Licensor does not represent or warrant that:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            The site will meet the requirements of the User;
                                        </li>

                                        <li>
                                            The site will function continuously, in a timely, secure and error-free manner;
                                        </li>

                                        <li>
                                            Any information obtained by the User as a result of using the Site will be accurate and reliable;
                                        </li>

                                        <li>
                                            Defects in the operation or functionality of any software within the Site will be corrected within
                                            the time period expected by the User.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            Communication with the Licensor on the operation of the Site, as well as on any other issues
                            related to the performance of the obligations of the parties under the Agreement, is carried out by
                            e-mail <app-mailto />.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="3. SUBJECT MATTER">
                    <v-o-l>
                        <li>
                            The Licensor grants the User a simple (non-exclusive) license to use the Site to the extent
                            specified in the Agreement, and in accordance with the remuneration terms specified in Section 5
                            of this Agreement "LICENSE REMUNERATION".
                        </li>

                        <li>
                            The User agrees to pay the Licensor royalties in a timely manner in accordance with the terms of
                            this Agreement.
                        </li>

                        <li>
                            The User's right to use the Site includes the right to use (operate) the Site directly, and the
                            automatic temporary copying of visual representations of parts of the Site by the User's browser.
                            Obtaining any revenue from the use of such copies, either directly (payment) or indirectly (revenue
                            from advertising displayed when using copies) is not allowed.
                        </li>

                        <li>
                            The user is prohibited from entering into sublicense agreements.
                        </li>

                        <li>
                            The licensor reserves the right to use the Site and the intellectual property included in it, as well
                            as the right to grant non-exclusive licenses to others.
                        </li>

                        <li>
                            The Licensor guarantees that it is the sole owner of all exclusive rights to the Site and to the
                            objects of intellectual property included in it, and that its execution of this Agreement does not and
                            cannot violate copyrights or other rights of third parties to intellectual property, that they will
                            respect all rights of the right holders of computer programs and databases, that they have received
                            all the necessary permissions and consents, and that they have concluded license agreements for
                            the use of exclusive rights subject to protection, and that he independently collects and distributes
                            remuneration for authors and right holders of exclusive and other rights to all objects of intellectual
                            property used in the performance of this Agreement.
                        </li>

                        <li>
                            Licensor warrants that it has obtained all necessary prior consents, approvals and authorizations
                            to enter into and perform this Agreement. Conclusion and execution of this Agreement does not
                            and may not violate the requirements of the law, the terms and conditions of other transactions
                            entered into by Licensor, and the rights of third parties.
                        </li>

                        <li>
                            If there are technical problems on the User's equipment when using the Site, the User shall
                            notify the Licensor by email at hello@game-values.com. The message must contain a detailed
                            description of the problem, screenshots of the User's monitor displaying the problem, data about
                            the operating system, hardware and software versions (including type and version of Internet
                            browser) with which the User accesses the Site. Licensor within two (2) working days at the latest
                            examines the User's message, and sends him an email with recommendations for correcting the
                            problem. If the User does not comply with these recommendations, the Licensor is not responsible
                            for the correct operation of the Site.
                        </li>

                        <li>
                            In some cases, solving a technical problem may take more than two (2) business days. In such
                            cases, the Licensor sends the User a notice within two days.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="4. HOW TO GAIN ACCESS TO USE THE SITE">
                    <v-o-l>
                        <li>
                            Access to the use of all services of the Site is provided to the User after completing the
                            Registration procedure. During the Registration the User is obliged to enter a login,
                            an authentic e- mail address, to enter the password for access to the Site and to confirm the e-mail by clicking on
                            the hyperlink in the e-mail from the Licensor, which is sent automatically after entering the
                            necessary information. If the User wishes to use two-factor identification in order to protect access,
                            he may also specify his cell phone data in the appropriate field of the Registration form.
                        </li>

                        <li>
                            After completing the Registration procedure, the User gets access to their My Account, within
                            which the User can create advertisements for the sale and/or purchase of Virtual Property, negotiate
                            transactions with other Users, and perform other actions related to the use of the Site.
                        </li>

                        <li>
                            If the User specifies an invalid e-mail address (not existing, as well as the address in which there
                            are mistakes), the User will not be able to use the password recovery service, will not receive Site
                            notifications about promotions, drawings, etc. Also, the Licensor declines responsibility for failure to
                            deliver the electronic receipt on payment of the license fee.
                        </li>

                        <li>
                            The User undertakes to keep the confidentiality of his login and password for access to the
                            Personal Area. All actions on the Site performed using the User's login and password are considered
                            to be performed by the User, unless the User has notified the Licensor in advance about the loss of
                            access to the Personal profile.
                        </li>

                        <li>
                            For security reasons, the Licensor recommends that you log out from your Personal Area by
                            pressing the "Logout" button when you have finished using the Site.
                        </li>

                        <li>
                            The User must immediately notify Licensor of unauthorized access to the Site using the User's
                            login and password by email or phone number indicated on the Site.
                        </li>

                        <li>
                            The User is fully responsible for the security of their password, the safety of their data, and the
                            transfer of the username and password to third parties. The Licensor never asks Users to provide the
                            password from the Personal Office, name, bank card number, personal account number and other
                            personal data.
                        </li>

                        <li>
                            Any actions of the User with the login and password to the Personal profile or personal e-mail
                            address of the User specified on the Site (electronic signature key) confirms the fact of formation of
                            a simple electronic signature directly by the User.
                        </li>

                        <li>
                            Electronic documents signed with a simple electronic signature are considered equivalent to
                            documents on paper signed with a handwritten signature.
                        </li>

                        <li>
                            The user undertakes to maintain the confidentiality of his electronic signature (not to share his
                            login and password or provide access to his e-mail to third parties), and is fully responsible for its
                            safety and individual use, choosing the method of storage and restriction of access to them.
                        </li>

                        <li>
                            The Licensor collects, systematizes and stores personal data of Users in strict accordance with
                            the "Privacy Policy", which is an integral part of the Agreement.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="5. LICENSE FEE">
                    <v-o-l>
                        <li>
                            The license fee for the use of the Site is payable only if the User, who placed an ad on the Site for
                            the sale of Virtual Property, has completed the transaction and received payment from the Buyer
                            through the Site.
                        </li>

                        <li>
                            The license fee is 10 (ten) % of the amount of money received by the User from the sale of Virtual
                            Property, but no more than 20 (twenty) %.
                        </li>

                        <li>
                            The license fee is automatically withheld by the Licensor at the moment the funds are credited
                            to the User's balance in myAlpari.
                        </li>

                        <li>
                            When requesting a withdrawal of funds received by the User from the sale of Virtual Assets, a
                            commission is automatically calculated by the payment institution that transfers the funds. The
                            commission is paid at the User's expense.
                        </li>

                        <li>
                            Term of crediting funds to the User's bank account, e-wallet, etc. It shall not exceed 3 (three)
                            business days from the date of the withdrawal request.
                        </li>

                        <li>
                            Funds received by the User from the sale of Virtual Assets and credited to the balance in myAlpari
                            can be used by the User to purchase Virtual Assets from other Users not earlier than 2
                            (two) business days from the moment of crediting.
                        </li>

                        <li>
                            The Licensor never requests and does not store on its servers the data of bank cards/accounts
                            and other financial information of Users, all such information is processed directly by partners of the
                            Licensor, which have appropriate agreements and licenses for payment transactions with it.
                            5.8. When withholding the license fee, the User receives from the Licensor an electronic version of
                            the cash voucher, which is sent to the User's email specified when registering. The date and time in
                            the receipt may differ from the date and time of payment of the license fee due to technical
                            features of the fiscal operator's services.
                        </li>

                        <li>
                            Licensor reserves the right to change the amount of royalties at its discretion, at any time,
                            without giving a reason, and all amounts of royalties already paid by the User remain unchanged
                            and are not subject to revision.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="6. RIGHTS AND OBLIGATIONS OF THE PARTIES">
                    <v-o-l>
                        <li>
                            <dl>
                                <dt>
                                    The licensor undertakes to:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            provide the User with access to use the Site after completing the Registration procedure,
                                            if it is technically possible to operate the Site;
                                        </li>

                                        <li>
                                            Take all necessary measures for the User to be able to use the Site under the terms stipulated
                                            in this Agreement, including ensuring uninterrupted operation of the Site, with the exception of
                                            cases of scheduled/preventive maintenance of hardware or software of the Site;
                                        </li>

                                        <li>
                                            Publish official messages on the Site, as well as send official messages
                                            related to the operation of the Site, including those related to routine/preventive maintenance,
                                            to the e-mail address specified by the User during Registration;
                                        </li>

                                        <li>
                                            Take the necessary organizational and technical measures to protect the User's personal data,
                                            information and data stored on the Site from unauthorized and unlawful or accidental access,
                                            destruction, modification, blocking, copying, distribution. Also ensure the safety of confidential
                                            information received from the User in accordance with the requirements of Russian law and the
                                            terms of the Agreement;
                                        </li>

                                        <li>
                                            at the request of the User, delete all or some of the personal data without the possibility of
                                            recovery within the period defined in the Privacy Policy, unless in accordance with the laws of
                                            the Russian Federation the Licensor is obliged to store the data for a longer period of time.
                                            promptly provide the User with basic technical support regarding the use of the Site by e-mail
                                            at <app-mailto />;
                                        </li>

                                        <li>
                                            perform other duties stipulated by this Agreement.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The user undertakes to:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            make payment of the license fee in accordance with the procedure set forth in this
                                            Agreement;
                                        </li>

                                        <li>
                                            to comply with the requirements of the current legislation of the Russian Federation and the
                                            provisions of this Agreement when using the Site;
                                        </li>

                                        <li>
                                            not to violate in any way the intellectual rights of the Licensor with respect to the Site and any
                                            of its elements, namely;
                                        </li>

                                        <li>
                                            not to study, research or test the operation of the Site in order to determine the ideas and
                                            principles underlying the program, database or other components of the Site, not to
                                            disassemble, decompile (reproduce and translate the object code into source code) or otherwise
                                            attempt to obtain the source code of the program, databases and other components of the Site,
                                            except in cases where the possibility of such actions is directly provided by Russian law, and only
                                            to the extent;
                                        </li>

                                        <li>
                                            not to modify the Site, including not attempting to modify the source code of programs or
                                            databases for them;
                                        </li>

                                        <li>
                                            Not to distribute and process elements of the Site without obtaining the Licensor's written
                                            consent;
                                        </li>

                                        <li>
                                            not to reproduce elements of the design or user interface of the Site to create web sites or any
                                            commercial activities on or off the Internet;
                                        </li>

                                        <li>
                                            not to use the Site in order to develop the content of other software, similar in functionality or
                                            characteristics to the Site, without the written consent of the Licensor;
                                        </li>

                                        <li>
                                            inform the User about cases of violations of the Licensor's rights in relation to the Website and
                                            any of its elements, which have become known to the User;
                                        </li>

                                        <li>
                                            not to violate the information security of the Site;
                                        </li>

                                        <li>
                                            not to transfer the username and password for access to the Personal Area, including
                                            independently taking the necessary measures to ensure the security of access to the Personal
                                            Area, and to prevent the possibility of unauthorized access to it by third parties. The User is fully
                                            responsible for all damage to the Licensor or third parties caused by intentional or unintentional
                                            transfer by the User of the login and password to the myAlpari to another person. The Licensor
                                            shall not be liable for any damage caused to the User, if it was caused by the User's violation of
                                            the obligation stipulated by this clause of the Agreement;
                                        </li>

                                        <li>
                                            perform other duties stipulated by this Agreement.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The licensor has the right to:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            modify/update the Site at its own discretion,
                                            including changing a set of functionalities of the Site;
                                        </li>

                                        <li>
                                            in case the User violates the conditions specified in paragraph 6.2 of this Agreement, to send
                                            the User a written warning about the User's violation of the conditions with a list of violations;
                                        </li>

                                        <li>
                                            such warning can be sent to the User's email address specified when registering. If the User fails
                                            to eliminate violations within three (3) days of receiving a written warning or repeatedly violates
                                            the specified conditions, the Licensor has the right to unilaterally extrajudicially refuse to
                                            perform this Agreement (terminate the Agreement) by sending the appropriate written notice
                                            not later than three (3) days before the expected date of termination of the Agreement
                                            to the e-mail address of the User specified when registering. In case such violations caused damages to
                                            third parties, the User shall be fully liable for the actual damages caused;
                                        </li>

                                        <li>
                                            suspend access to the Site in connection with suspension of the Site for scheduled /
                                            preventive maintenance, if possible at night or on weekends, but not more than once a week, for
                                            not more than four (4) hours, except when the scheduled / preventive maintenance requires a
                                            longer period, with prior notice to the User by posting relevant information on the Site and (or)
                                            by sending to the e-mail address specified in the;
                                        </li>

                                        <li>
                                            Take actions permitted under the laws of the Russian Federation to protect and defend
                                            intellectual property rights to the Site;
                                        </li>

                                        <li>
                                            exercise other rights provided for in this Agreement.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The user has the right to:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            obtain the right of access to use the Site in the manner and within the time frame set forth in
                                            this Agreement;
                                        </li>

                                        <li>
                                            independently change the password from myAlpari without prior notice to the Licensor;
                                        </li>

                                        <li>
                                            use the Licensor's support services for the use of the Site;
                                        </li>

                                        <li>
                                            exercise other rights provided for in this Agreement.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="7. THE CONTENT OF THE AD FOR THE SALE/PURCHASE OF VIRTUAL PROPERTY">
                    <v-o-l>
                        <li>
                            The User determines the content of the ad for sale/purchase of Virtual Property and is solely
                            responsible for the content of such ads.
                        </li>

                        <li>
                            Users' ads are not subject to prior review by the Licensor, and their placement is performed
                            solely on the initiative of the User through the use of software tools on the Site.
                        </li>

                        <li>
                            The Licensor reserves the right to unilaterally remove or block (make inaccessible to third
                            parties) any material, suspend or limit the User's access to his Personal Office, to unilaterally
                            withdraw from the Agreement, which entails removing the User's Personal Office if the Licensor
                            becomes aware that the User's use of the Website violates or facilitates the violation of the
                            Licensor's rights, third party rights (including other users and/or visitors to the Website), legislation,
                            international standards.
                        </li>

                        <li>
                            The User agrees not to use the Site for advertising purposes (e.g., by constantly posting about
                            the same person, product or service of the same vendor, referring to the same site, etc.), except to
                            advertise the property that he sells through the Site and only using the functionality provided by
                            the Site.
                        </li>

                        <li>
                            The User agrees to refrain from using the Site for illegal and dishonest purposes (such as: inciting
                            conflicts that violate the rights of third parties, infringement or violation of the rights and legitimate
                            interests of third parties, profiteering, deception, misleading, fraud, insult, humiliation of human
                            dignity, SPAM, etc.).
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="8. THE PROCEDURE FOR TRANSACTIONS ON THE PURCHASE/SALE OF VIRTUAL PROPERTY">
                    <v-o-l>
                        <li>
                            The User undertakes to conduct transactions only through the Site in accordance with the
                            Agreement, the Trading Rules posted at <app-sitelink />, and within that technical
                            functionality and taking into account the technical limitations of the Site. Violation of any of the
                            terms of the Trading Rules is a violation of this Agreement.
                        </li>

                        <li>
                            The User undertakes to refrain from selling the same Virtual Property, as well as the same
                            categories of property and similar property that he offers for sale on the Site, on other sites and
                            directly to other users of the Site, including by exchanging contacts and discussing transactions
                            with other users bypassing the functionality of the Site.
                        </li>

                        <li>
                            Violation of paragraph 8.2. of this Agreement is grounds for blocking the User's myAlpari.
                        </li>

                        <li>
                            The Licensor, acting as the Buyer's agent for the transaction of purchase and sale of Virtual
                            Property, has access to all chats between the Buyer and the Seller provided for within the Site.
                        </li>

                        <li>
                            The buyer independently searches for advertisements for the sale of Virtual Property.
                        </li>

                        <li>
                            By agreeing with the terms and conditions set forth in the advertisement, the Buyer instructs
                            the Licensor to enter into a transaction on his behalf and at his expense with the author of the
                            relevant advertisement for the sale of Virtual Property in the manner and on the terms set forth in
                            the offer to conclude the Agency Agreement, available at: <app-sitelink />.
                        </li>

                        <li>
                            The User agrees that given that all the registered Users of the Website have accepted this
                            Agreement, as well as the Agency Agreement, issuing a power of attorney in the framework of the
                            Agency Agreement is not required, because the Licensor's authority is clear from the environment,
                            including the content of this Agreement.
                        </li>

                        <li>
                            The obligation to pay for the transaction between the Buyer and the Seller shall be deemed
                            performed by the Buyer at the moment of crediting the funds to the Seller's balance in myAlpari on
                            the Site.
                        </li>

                        <li>
                            The User understands and confirms that the Licensor is not a party to the transaction between
                            the Buyer and the Seller, that it acts under the Agency Agreement on behalf of the Buyer, on its
                            behalf and at its expense, and therefore the Licensor is not responsible for the possible actual and/or
                            legal consequences of the transaction between the Buyer and the Seller (for example, some rules of
                            online games may provide game penalties for certain actions; the Licensor does not study and/or
                            check the rules of games and does not check transactions.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="9. ENTRY INTO FORCE AND TERMINATION OF THE AGREEMENT">
                    <v-o-l>
                        <li>
                            The Agreement comes into force from the moment of acceptance of the offer in accordance
                            with paragraph 2.2. of this Agreement and is valid until its termination (cessation) in the manner
                            prescribed by this Agreement.
                        </li>

                        <li>
                            The Licensor may at any time unilaterally and extrajudicially withdraw from this Agreement
                            (terminate this Agreement), either in whole or in part, with notice to the User via myAlpari, by email
                            or otherwise, with advance payment to the User of the balance in myAlpari.
                        </li>

                        <li>
                            If the User violates the terms of this Agreement, the User's myAlpari may be blocked.
                        </li>

                        <li>
                            If the Agreement is terminated due to a breach of the terms of the Agreement by the User, the
                            Licensor may refuse to pay the balance of funds in myAlpari, withholding it as compensation for
                            damages caused by a breach of the terms of the Agreement by the User.
                        </li>

                        <li>
                            If necessary, at the request of the Licensor for a refund, the User must provide the documents
                            and information necessary for the Licensor to identify the User and make the refund.
                        </li>

                        <li>
                            In accordance with paragraph 1 of Article 317.1 of the Civil Code of the Russian Federation, the
                            parties have agreed that in respect of any monetary obligations of the parties under the Agreement,
                            legal interest (interest on the amount of debt for the period of the use of monetary funds) shall not
                            accrue.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="10. LIABILITY. LIMITATION OF LIABILITY">
                    <v-o-l>
                        <li>
                            For violation of the terms of the Agreement, the parties shall be liable as set forth in the
                            Agreement and/or the applicable laws of the Russian Federation.
                        </li>

                        <li>
                            The User agrees that the Site meets the requirements of the User at the time of acceptance of
                            the Agreement and will meet them subsequently, the results that can be obtained using the Site
                            will be accurate and reliable and can be used for any purpose or in any capacity (for example, to
                            establish and/or confirm any facts).
                        </li>

                        <li>
                            Organizing with the help of the Website the process of concluding the transaction of purchase
                            and sale of Virtual Property between the Buyer and the Seller, the User agrees that the Licensor is
                            not responsible for the result expected by the User from the conclusion of such transaction.
                        </li>

                        <li>
                            The Licensor is not responsible for damages caused to the User as a result of the inability to use
                            the Site due to errors, omissions, interruptions, deletion of files, defects, delays in operation or data
                            transmission and other causes of technological nature, as well as the improper quality of public
                            communication channels through which access to the Site is provided.
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    In no event shall the Licensor be liable under the Agreement for:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            any actions/inaction resulting directly or indirectly from the actions/inaction of the User and/or
                                            third parties;
                                        </li>

                                        <li>
                                            any losses and/or lost profits of the User and/or third parties, regardless of whether the
                                            Licensor could have foreseen the possibility of such losses or not.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            The User is informed and agrees that some operations, including but not limited to money
                            transfer operations under this Agreement, are not controlled and monitored by the Licensor
                            personally, and the Licensor is not responsible for the transfer and/or receipt of funds by the User
                            under this Agreement.
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The Licensor undertakes to make all reasonable efforts for proper access to the Site, but is not
                                    responsible for the inability to access in the event:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            technological malfunctions of public communication channels, through which the access to
                                            the Site, User's myAlpari, or loss of access to the Internet - until the malfunctions are eliminated
                                            or access is restored, respectively; signs of unauthorized access to the User's myAlpari - for the
                                            duration of such circumstances;
                                        </li>

                                        <li>
                                            in cases falling under the definition of force majeure - for the duration of such circumstances.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            In case of losses caused to the User through the fault of the Licensor, the Licensor shall be liable
                            to the User in the amount not exceeding the amount of money previously paid by the User as the
                            license fee.
                        </li>

                        <li>
                            The Licensor shall not be liable to the User for any other losses and/or expenses, including lost
                            profits and consequential losses, including those incurred by the User due to the User's violation of
                            this Agreement.
                        </li>

                        <li>
                            It is the User's responsibility to keep the password for access to the Personal Area secret.
                        </li>

                        <li>
                            The Licensor shall not be liable to the User for the actions of third parties resulting in the
                            theft/loss of the login or password to the User's Personal Office, as well as any expenses, damages
                            and/or lost profits incurred by the User due to unauthorized access of third parties to the management of the User's Personal Office.
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    The user is fully responsible for:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            the accuracy of the information he gave at Registration;
                                        </li>

                                        <li>
                                            any losses and/or lost profits of the User and/or third parties, regardless of whether the
                                            Licensor could have foreseen the possibility of such losses or not.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            To the extent not provided for in this Agreement, the liability of the Parties shall apply in the
                            amount and in the manner prescribed by the laws of the Russian Federation.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="11. DISPUTE RESOLUTION PROCEDURE">
                    <v-o-l>
                        <li>
                            Disputes and disagreements arising under this Agreement shall be resolved by the parties by means of negotiations.
                        </li>

                        <li>
                            When resolving disputes, compliance with the pre-trial claim procedure is mandatory. The claim
                            shall be considered within 15 (fifteen) calendar days of receipt of the pre-trial claim. If the Party fails
                            to collect the correspondence from the post office, the claim shall be deemed received after 5 (five)
                            business days from the date of arrival at the post office. If the claim sent by e-mail is ignored, it shall
                            be deemed received after 2 (two) business days from the date of sending.
                        </li>

                        <li>
                            If the parties fail to resolve by negotiation any disputes arising in the course of performance of
                            this Agreement, such disputes shall be subject to judicial review by a court of general jurisdiction at
                            the location of the Licensor.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="12. NOTICES">
                    <v-o-l>
                        <li>
                            <dl>
                                <dt>
                                    Any notices under the Agreement may be sent by one party to the other party:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            to the User's email address specified upon Registration, or to the User's email address
                                            specified later in myAlpari (in case the User's email address was subsequently changed by the
                                            User), from the Licensor's email address (from any mailbox with the domain name @game-values.com),
                                            if the recipient is the User;
                                        </li>

                                        <li>
                                            to the e-mail address of the Licensor (<app-mailto />) from the e-mail address of
                                            the User specified during Registration, if the recipient is the Licensor.;
                                        </li>

                                        <li>
                                            by mail with return receipt or by courier with delivery confirmation.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    Notice/request/letter is deemed to have been received by the addressee:
                                </dt>

                                <dd>
                                    <v-u-l>
                                        <li>
                                            by e-mail after 2 business days from the date of sending;
                                        </li>

                                        <li>
                                            at the postal address after 5 working days from the date of arrival at the post office.
                                        </li>
                                    </v-u-l>
                                </dd>
                            </dl>
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="13. OTHER CONDITIONS">
                    <v-o-l>
                        <li>
                            The Agreement, its conclusion and execution shall be governed by the applicable laws of the
                            Russian Federation.
                        </li>

                        <li>
                            All matters not regulated by the Agreement or not regulated in full shall be governed in
                            accordance with the laws of the Russian Federation.
                        </li>

                        <li>
                            In the event that one or more provisions of this Agreement are for any reason invalid or
                            unenforceable, such invalidity shall not affect the validity of any other provision of this Agreement,
                            which shall remain in effect.
                        </li>

                        <li>
                            Licensor has the right to fully or partially transfer the rights and obligations under this
                            Agreement to a third party. The transfer of the User's rights and obligations under this Agreement is
                            possible only with the prior consent of the Licensor.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="14. INFORMATION SECURITY POLICY">
                    <v-o-l>
                        <li>
                            You can pay for your order by Visa, Master Card, "Mir" or through the payment system Apple Pay.
                            (You can specify additional methods of payment on your site optimally). To pay for your purchase,
                            you will be redirected to the Unitpay payment system server, where you must enter the necessary
                            data. When paying by bank card, the security of the payment is guaranteed by the Unitpay
                            processing center. The Unitpay payment system has a verified certificate of compliance with the PCI
                            DSS standard for the storage, processing, and transmission of cardholder data. Bank cards security
                            standard PCI DSS is supported by international payment systems, including MasterCard and Visa,
                            Inc. The Unitpay system is also a member of the PCI DSS Continuous Compliance Control
                            Compliance Process (P.D.C.P.). Your confidential data required for payment (card details, registration
                            data, etc.) does not go to the online store - it is processed by the Unitpay processing center and is
                            fully protected.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>

            <li>
                <v-collapse-panel title="15. REFUND POLICY">
                    <v-o-l>
                        <li>
                            There are no refunds when We terminate Your use of and registration with the Website or freeze
                            any transactions if You violate these Terms or any other game-values policies.
                        </li>

                        <li>
                            Game Values does not assume any liability and does not refund with regard to any transactions
                            on purchase, sale or exchange of In-game items on the Website.
                        </li>

                        <li>
                            Before making any transaction on deposit or withdrawal You should review the Payment
                            processor’s refund policy which shall apply to all payments through such Payment processor.
                        </li>

                        <li>
                            Any fees and transaction commissions paid by the Users are non-refundable and nonreturnable.
                            Due to the commission being non-refundable and non-returnable, a User is not entitled
                            to claim any compensation from Game Values.
                        </li>

                        <li>
                            If a User’s Account is terminated or suspended by game-values, any balance on said Account may be forfeited.
                        </li>
                    </v-o-l>
                </v-collapse-panel>
            </li>
        </ol>

        <v-collapse-panel title="16. ADDRESS AND BANK DETAILS OF THE LICENSOR">
            <v-space
                size="large"
                vertical
            >
                <v-text>
                    BITS CONSULTING LTD.
                </v-text>

                <v-text>
                    INN 7751200542
                </v-text>

                <v-text>
                    OGRN 1217700304458
                </v-text>

                <address>
                    Legal address: 124 sq. 2 Chechersky proezd, bld. 77, Moscow, 117042.
                </address>

                <app-sitelink />

                <app-mailto />
            </v-space>
        </v-collapse-panel>
    </v-collapse>
</policy-card>
</template>
