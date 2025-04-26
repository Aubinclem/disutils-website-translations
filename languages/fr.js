/**
 * English Translation File for Disutils Team Website
 *
 * This file contains all the English translations for the Disutils Team website.
 * It includes text for navigation, footer, pages, and other UI elements.
 *
 * Language Code: en
 * Author: RejectModders
 * Discord: rejectmodders
 * Last Updated: 4/21/2025
 *
 * Usage:
 * - This file is automatically loaded by the language middleware.
 * - Ensure all keys match the structure defined in the base language file (e.g., `en.js`).
 * - Do not remove or rename keys, as this may break functionality.
 *
 * Guidelines:
 * - Placeholders (e.g., {seconds}, {minutes}) must remain intact.
 * - Team names, usernames, and specific terms (e.g., "RejectModders", "Disutils Team") must not be translated.
 * - Use consistent formatting and indentation for readability.
 *
 * Note: If adding new keys, ensure they are added to all other language files for consistency.
 */

module.exports = {
    config: {
        description: "A dedicated group of individuals committed to enhancing and simplifying the Discord experience for all users.",
        footer: "Copyright © Disutils Team 24-25. All rights reserved."
    },

    nav: {
        home: "Home",
        news: "News",
        faq: "FAQ",
        team: "Our Team",
        partners: "Our Partners",
        bots: "Our Bots",
        contact: "Contact Us",
        more: "More",
        login: "Login",
    },

    navsub: {
        mainpages: "Main Pages",
        statuspages: "Status Pages",
        support: "Support",
        community: "Community",
        voting: "Voting",
        otherpages: "Other Pages",

        // Main Pages
        changelogs: "Changelogs",
        documentation: "Documentation",
        prices: "Prices",

        // Status Pages
        botstatus: "Bot Status",
        overallstatus: "Overall Status",

        // Support
        supportserver: "Support Server",
        emailus: "Email Us",

        // Community
        discordserver: "Discord Server",
        applyforstaff: "Apply for Staff",
        applyforpartner: "Apply for Partner",

        // Voting
        topgg: "Top.gg", // keep English
        discollaborg: "Discollab.org", // keep English

        // Other Pages
        blacklistappeal: "Blacklist Appeal",
        terms: "Terms of Service",
        privacy: "Privacy Policy",

        // Languages
        languages: "Languages"
    },

    footer: {
        brief: "Enhancing your server experience with top-notch bots and utilities.",
        topgg: "Vote on Top.gg",
        discollaborg: "Vote on Discollab.org"
    },

    home: {
        meet: "Meet",
        supportserver: "Support Server",
        custombots: "Custom Bots",
        showcase: "Showcased Bots",
        ourselection: "Our Selection of Showcased Bots",
        ourselectionbrief: "Our selection of showcased bots, handpicked for their exceptional performance and reliability.",
        learnmore: "Learn more",

        harmodifybrief: "Harmodify is a powerful music bot with seamless playback and high-quality sound. Ideal for gaming sessions or hangouts.",
        playdisbrief: "Playdis is a fun-packed game bot with engaging games and a built-in economy system. Ideal for friendly competition and rewards.",
        utilicorebrief: "UtiliCore is an all-in-one utility bot with features like stunning embeds and real-time notifications. Ideal for optimizing server management.",
        privateeyesbrief: "PrivateEyes is a versatile NSFW bot with features for mature communities and SFW content. Ideal for fun and relaxed servers."
    },

    news: {
        pagetitle: "News",
        pagedescription: "Get important information about our services and our team, including our website!",

        title1: "New UI Update",
        description1: "Website UI has been updated to a new design. We hope you like it!<br><br>We are also working on a Dashboard for the Disutils Team, which will be released soon. Stay tuned for more updates!",
        author1: "RejectModders Owner/Developer @Disutils Team",
        date1: "4/1/2025",

        title2: "Translation Team Recruitment",
        description2: "We are looking for dedicated individuals to join our Translation Team. A personal page for the Translation Team will be created on the Disutils website to showcase your contributions.<br><br>If you are proficient in a language and interested in helping with translations, please contact RejectModders.",
        author2: "RejectModders Owner/Developer @Disutils Team",
        date2: "11/13/2024",

        title3: "Website Released!",
        description3: "Hello everyone! We have worked really hard on this website to make it look really good, hopefully you like it and if you see any issues, please report it to us!",
        author3: "RejectModders Owner/Developer @Disutils Team",
        date3: "10/31/2024"
    },

    faq: {
        title: "Frequently Asked Questions",

        question1: "What is Disutils Team?",
        answer1: "A dedicated group of individuals committed to enhancing and simplifying the Discord experience for all users.",

        question2: "How can I join the Disutils Team?",
        answer2: "You can apply to join the Disutils Team by visiting our <a href=\"/apply-staff\" class=\"text-blue-500 underline\">application page</a>.",

        question3: "Are the bots free to use?",
        answer3: "Yes, all our bots are free to use. However, we offer premium features for those who want to support us.",

        question4: "How do I invite a bot to my server?",
        answer4: "Click the <a href=\"/bots\" class=\"text-blue-500 underline\">Invite Our Bots</a> link and follow the instructions.",

        question5: "Where can I find the documentation for the bots?",
        answer5: "You can find the documentation on the <a href=\"/docs\" class=\"text-blue-500 underline\">Documentation</a> page or the <a href=\"/bots\" class=\"text-blue-500 underline\">Bots</a> page.",

        question6: "How can I get support?",
        answer6: "Join our <a href=\"/support\" class=\"text-blue-500 underline\">Discord server</a> or email us at <a href=\"mailto:support@disutils.com\" class=\"text-blue-500 underline\">support@disutils.com</a>.",

        question7: "What should I do if I find a bug?",
        answer7: "Use the bot’s bug report command, report it on our Discord, or email us.",

        question8: "Can I contribute to the development of the bots?",
        answer8: "Yes! See our <a href=\"https://github.com/disutils/disutils\" class=\"text-blue-500 underline\">GitHub page</a>.",

        question9: "Do you offer custom bot development?",
        answer9: "Yes. Contact us through our <a href=\"/contact\" class=\"text-blue-500 underline\">contact page</a>.",

        question10: "How can I stay updated with the latest news?",
        answer10: "Follow our <a href=\"/news\" class=\"text-blue-500 underline\">news page</a> or join our Discord server."
    },

    team: {
        title: "Our Team",

        leaddev: "Lead Developers",
        backenddev: "Backend Developers",
        webdev: "Web Developers",
        juniordev: "Junior Developers",
        sysadmin: "System Administrators",
        operationsmanager: "Operations Managers",
        hrmanager: "HR Managers",
        manager: "Managers",
        administrator: "Administrators",
        leadmoderator: "Lead Moderators",
        moderator: "Moderators",

        hiring: "Hiring!",

        hiringdev: "No Lead Developers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringbackenddev: "No Backend Developers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringwebdev: "No Web Developers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringjuniordev: "No Junior Developers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringsysadmin: "No System Administrators currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringoperationsmanager: "No Operations Managers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringhrmanager: "No HR Managers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringmanager: "No Managers currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringadministrators: "No Administrators currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringleadmoderators: "No Lead Moderators currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
        hiringmoderators: "No Moderators currently. <a href=\"/apply-staff\" target=\"_blank\" style=\"text-decoration: underline; color: inherit;\">Apply here!</a>",
    },

    partners: {
        title: "Our Partners",
        readmore: "Read More",
        close: "Close",
        examplepartner: "This could be you!",
        joinus: "Join us and become a partner to enjoy exclusive benefits. ",
        applyhere: "Apply here!"
    },

    bots: {
        title: "Our Bots",
        corebots: "Core Bots",
        acquiredbots: "Acquired Bots",
        internalbots: "Internal Bots",
        comingsoon: "Coming Soon"
    },

    status: {
        title: "Bot Status",
        description: "Check the status of our bots!",
        corebots: "Core Bots",
        acquiredbots: "Acquired Bots",
        internalbots: "Internal Bots",
        fetching: "Fetching...",
        online: "En-Ligne",
        offline: "Hors-Ligne",
        secondsago: "Il y a {seconds} secondes",
        minutesago: "Il y a {minutes} minutes",
        refreshtime: "Rafraichit toutes les {time} minutes",
        latency: "Latence de Discord (ms)",
        dblatency: "Latence de la DB (ms)"
    },

    contact: {
        title: "Contactez-Nous",
        description: "Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.",
        questionfeed: "Vous avez une question ou une suggestion? Fill out the form below.",
        submit: "Envoyer",
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Votre message...",
        emailmessage: 'Ou envoyez nous un message par <a class="uc-link" href="mailto:support@disutils.com">email</a>.',
        othersupport: "Other ways to reach us",
        prioritysupport: "Ayez la priorité au support.",
        sendform: "Envoyer Formulaire",
        community: "Notre communauté",
        connect: "Connectez-vous avec les utilisateurs.",
        discord: "Rejoignez-nous!",
        emailsent: "Email envoyé avec succès!",
        emailfailed: "Envoi d'email échoué.",
        sending: "Envoi..."
    },

    appeal: {
        title: "Appeal Form",
        description: "If you believe you have been wrongly blacklisted, please fill out the form below to appeal your case.",
        submit: "Submit Appeal",
        username: "Enter your username",
        displayname: "Enter your display name",
        userid: "Enter your user ID",
        email: "Enter your email",
        reason: "Explain the reason for your appeal..",
        sendform: "Send Form",
        emailsent: "Email sent successfully!",
        emailfailed: "Failed to send email.",
        sending: "Sending...",
        emailmessage: 'Or drop us a message via <a class="uc-link" href="mailto:support@disutils.com">email</a>.'
    },

    prices: {
        title: "Custom Bot Pricing",
        description: "Explore our services and pricing options. All prices are in <strong>USD</strong>, starting at <strong>$8</strong>.",
        categories: {
            title: "💰 Categories & Pricing",
            items: [
                { name: "Economy", price: "+$7" },
                { name: "Moderation", price: "+$5" },
                { name: "Ticket", price: "+$4" },
                { name: "NSFW", price: "+$4" }
            ]
        },
        features: {
            title: "🚀 Features",
            groups: [
                {
                    title: "Economy Features",
                    items: [
                        "Leveling system",
                        "Profile",
                        "Work (with mini-games)",
                        "Jobs",
                        "Leaderboard",
                        "Steal",
                        "Rock Paper Scissors",
                        "Tic Tac Toe"
                    ]
                },
                {
                    title: "Moderation Features",
                    items: [
                        "Kick",
                        "Ban",
                        "Timeout",
                        "Set channel cooldown",
                        "Invite tracker"
                    ]
                }
            ]
        },
        custom: {
            title: "🛠️ Custom Features",
            description: "Pricing starts at <strong>$4</strong>, depending on complexity. <strong><u>Note: We do not accept music bot requests.</u></strong>"
        },
        hosting: {
            title: "☁️ Hosting Addons",
            items: [
                { name: "VPS Hosting", price: "+$5" },
                { name: "Cloud DB", price: "+$5" },
                { name: "Ongoing Hosting", price: "$6/mo (both) or $3/mo (single service)" }
            ]
        },
        afterServices: {
            title: "🔧 After Services",
            items: [
                { name: "Bug Fixes", description: "Free (void if third-party modifications are made)" },
                { name: "Modifications", description: "Negotiable" }
            ]
        },
        discounts: {
            title: "🎉 Discounts & Referral Program",
            items: [
                { name: "First-Time Full Package", discount: "20% off" },
                { name: "Repeat Full Package Orders", discount: "10% off" },
                { name: "Refer a friend", discount: "5% off your next purchase" },
                { name: "Your friend gets", discount: "10% off on their first purchase" }
            ]
        },
        contact: {
            title: "📩 Contact Us",
            description: "To place an order or ask questions, direct message our ModMail bot."
        }
    },

    privacy: {
        title: "Privacy Policy",
        description: "At Disutils Team, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information. Throughout this document, \"Our Bots\" refers to the bots developed by the Disutils Team.",
        generalprov: "General Provisions",
        general: {
            acceptance: "<strong>Acceptance of Terms:</strong> By using Our Bots, you agree to this Privacy Policy. If you do not agree with any part of this policy, please refrain from using Our Bots.",
            modifications: "<strong>Modifications to the Policy:</strong> We may update this Privacy Policy periodically. It is your responsibility to review this policy regularly. Continued use of Our Bots after any changes indicates your acceptance of the revised policy.",
            scope: "<strong>Scope of the Policy:</strong> This Privacy Policy applies to all interactions with Our Bots and does not cover any third-party services or websites that may be linked from Our Bots."
        },
        datacollection: "Data Collection",
        collection: {
            userdata: "<strong>User Data:</strong> Our Bots collect and store user IDs and relevant messages solely for the purpose of executing their functions effectively.",
            feedbackdata: "<strong>Feedback Data:</strong> If you provide feedback regarding Our Bots, we may collect and utilize that feedback for their ongoing improvement and development. This data may include suggestions and comments."
        },
        datausage: "Data Usage",
        usage: {
            commandexecution: "<strong>Command Execution:</strong> User data collected by Our Bots is used exclusively for executing their commands. We do not use this data for any other purpose.",
            feedbackusage: "<strong>Feedback Usage:</strong> Feedback provided may be utilized to enhance the features and user experience of Our Bots. However, we do not disclose your personal information without your explicit consent."
        },
        datasecurity: "Data Security",
        security: {
            dataprotection: "<strong>Data Protection:</strong> We implement reasonable measures to safeguard the data collected by Our Bots, but we cannot guarantee absolute security. We are not liable for any data breaches."
        },
        datadeletion: "Data Deletion",
        deletion: {
            datarequest: "<strong>Data Request:</strong> You may request to view the data stored by Our Bots at any time by reaching out to our support team. <strong><u>Note: Data requests can only be made once every 30 days.</u></strong>",
            datadeletion: "<strong>Data Deletion:</strong> You may request the deletion of any data stored by Our Bots at any time by contacting our support team. <strong><u>Note: Data deletion requests can only be made once every 30 days.</u></strong>"
        },
        datadisclosure: "Disclosure of Data",
        disclosure: {
            thirdparty: "<strong>Third-Party Services:</strong> Our Bots do not sell, share, or disclose user data to third parties. The source code of Our Bots is also kept private and is not disclosed to anyone. We may use third-party services for hosting, storage, or support, but they are bound by their own privacy policies and security measures."
        },
        nsfwcontent: "NSFW Content",
        nsfw: {
            explicitcontent: "<strong>Explicit Content:</strong> Our Bots may provide access to explicit content intended solely for users of legal age in their jurisdiction who consent to view adult material.",
            useracknowledgment: "<strong>User Acknowledgment:</strong> By utilizing Our Bots' NSFW features, you acknowledge and agree that you are accessing explicit content at your own discretion. If you are underage or uncomfortable with explicit material, please refrain from using these features."
        },
        contact: "For any inquiries regarding our Privacy Policy, please contact us at <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Last updated: April 1st, 2025"
    },

    terms: {
        title: "Terms of Service",
        description: "At Disutils Team, we are committed to providing quality services. These Terms of Service outline the rules and regulations for using Our Bots. Throughout this document, \"Our Bots\" refers to the bots developed by the Disutils Team.",
        generalprov: "General Provisions",
        general: {
            acceptance: "<strong>Acceptance of Terms:</strong> By integrating Our Bots into your server, you acknowledge and accept these Terms of Service. If you do not agree with any part of these Terms, please refrain from adding Our Bots.",
            modifications: "<strong>Modifications to the Terms:</strong> We reserve the right to amend these Terms at any time. It is your responsibility to periodically review these Terms. Your continued use of Our Bots following any changes constitutes your acceptance of the updated Terms."
        },
        userresponsibilities: "User Responsibilities",
        responsibilities: {
            compliance: "<strong>Compliance:</strong> Users are required to comply with all applicable laws and regulations while using Our Bots.",
            conduct: "<strong>Conduct:</strong> You agree not to use Our Bots for any unlawful or prohibited activities, including but not limited to harassment, spamming, or any form of abuse."
        },
        supportfeedback: "Support and Feedback",
        support: {
            feedback: "<strong>Feedback:</strong> We welcome your feedback and suggestions for enhancing Our Bots. By providing your insights, you grant us permission to incorporate them into ongoing improvements.",
            support: "<strong>Support:</strong> We will make reasonable efforts to provide technical support for Our Bots. However, we do not guarantee uninterrupted service and reserve the right to terminate Our Bots' services at any time without prior notice."
        },
        termination: "Termination",
        terminationdetails: {
            user: "<strong>Termination by User:</strong> You may remove Our Bots from your server at any time, at your discretion.",
            us: "<strong>Termination by Us:</strong> We reserve the right to terminate Our Bots' services at our discretion, without notice or explanation."
        },
        disclaimer: "Disclaimer of Warranty",
        warranty: {
            nowarranty: "<strong>No Warranty:</strong> Our Bots are provided on an \"as is\" basis, without warranties or guarantees of any kind, either express or implied. We do not warrant the accuracy, reliability, or availability of Our Bots' services."
        },
        liability: "Limitation of Liability",
        liabilitydetails: {
            liability: "<strong>Liability:</strong> In no event shall the creators or affiliates of Our Bots be liable for any direct, indirect, special, or consequential damages arising from the use or inability to use Our Bots."
        },
        contact: "For any inquiries regarding our Terms of Service, please contact us at <a href=\"mailto:support@disutilsteam.com\" class=\"text-blue-400 underline hover:text-blue-600\">support@disutilsteam.com</a>.",
        lastupdated: "Last updated: April 1st, 2025"
    },

    song: {
        clickme: "^^ Cliquez moi ^^"
    },

    maintenance: {
        title: "Nous revenons bientôt!",
        globalmaintenance: "Notre site complet est actuellement sous maintenance pour améliorer votre experience. Nous apprécions votre patience et vous invitons à revenir bientôt.",
        pagemaintenance: "Cette page est temporairement indisponible dû à une maintenance. Nous travaillons d'arrache-pied pour réstorer votre accès le plus rapidement possible. Merci de votre compréhension.",
    },

    errors: {
        badrequest: "Mauvaise Requête!",
        unauthorized: "Accès Non Autorisé!",
        forbidden: "Zone Interdite!",
        notfound: "Perdu Dans L'Espace!",
        internalservererror: "Serveur En Fusion!",
        unknownerror: "Erreur inconnue!",

        badrequesttext: "Mauvaise Requête! Ceci était encore plus déroutant qu'un chat qui fait des calculs.. Essaye-encore, mais peut-être avec moins de fautes et plus de café..",
        unauthorizedtext: "Non autorisé ! Qui va içi?! Seulement ceux avec les identifiants sacrés ne passent. Parlez 'ami' et entrez... ou jouste connectez vous correctement.",
        forbiddentext: "Interdit! Vous avez atteri dans la zone interdite. La légende raconte que seulements les élus ne peuvent entrer. Spoiler: c'est pas toi.",
        notfoundtext: "Non trouvé! Cette page est partie en vacances, n'a laissé aucune adresse pour la contacter, et ne répond pas aux SMS. Essaye de chercher à un autre endroit avant que nous signalons un enlèvement de page.",
        internalservererrortext: "Erreur de serveur! Le serveur vient de rage-quit. On lui demande de revenir avec des snacks et des compliments. Patientez svp.",
        unknownerrortext: "Unknown Error! Something broke in a mysterious, dramatic way. Even our tech wizard is scratching his beard. Try again, or summon a goat for sacrifice. (Just kidding... mostly.)",

        home: "Retourner au menu",
        searchnow: "Pourquoi ne pas re-chercher? <a class=\"uc-link\" href=\"#uc-search-modal\" data-uc-toggle>Chercher Maintenant</a>",
        searchtext: "Que cherches-tu?",
        searchkeyword: "Entre ton mot-clé..."
    }
};
