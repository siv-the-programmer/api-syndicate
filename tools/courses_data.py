"""Course catalogue for API Syndicate.

Edit this file, then run `python tools/build.py` to regenerate:
  - courses.html                (course list)
  - courses/<slug>.html         (one full page per course)
  - the courses section on index.html (between the COURSES markers)
"""

WHATSAPP = "27792686620"

COMMON_INCLUDED = [
    "Weekly live session with a BuildsByBuchanan developer",
    "Recordings of every session to watch back",
    "Code reviews on your weekly work",
    "Private API Syndicate student group on WhatsApp",
    "Certificate of completion",
]

COURSES = [
    {
        "slug": "web-foundations",
        "title": "Web Foundations: Zero to Deployed",
        "short": "Web Foundations",
        "level": "Beginner",
        "length": "4 weeks",
        "format": "Online + Cape Town sessions",
        "price": 2499,
        "tagline": "Never written code before? In four weeks you'll build and launch your own website on your own domain.",
        "build": "Your personal portfolio site, live on a custom domain",
        "outcomes": [
            "Understand how websites actually work, from domain to browser",
            "Write clean HTML and CSS that looks right on phones first",
            "Add interactivity with JavaScript",
            "Use Git and GitHub like a working developer",
            "Deploy a real site and connect it to your own domain",
        ],
        "for": [
            "Complete beginners who want to start coding properly",
            "Business owners who want to understand and edit their own site",
            "Designers who want to build what they design",
        ],
        "prereqs": "A laptop (Windows, Mac or Linux) and an internet connection. No coding experience needed.",
        "weeks": [
            {
                "title": "How the web works and your first page",
                "goal": "Understand what happens when someone opens a website, and write your first HTML page.",
                "lessons": [
                    ("How the web works", "Domains, DNS, servers and browsers explained simply. What actually happens between typing a URL and seeing a page."),
                    ("Setting up your tools", "Install VS Code, a browser with DevTools and the extensions we use every day. Create your project folder."),
                    ("HTML structure", "Headings, paragraphs, links, images and lists. How to structure a page so browsers, screen readers and Google understand it."),
                    ("Pages and links", "Build a multi-page site: home, about and contact pages linked together with a shared layout."),
                ],
                "exercise": "Recreate a simple business card page from a screenshot using only HTML.",
                "deliverable": "A three-page HTML site with navigation between the pages.",
            },
            {
                "title": "Styling with CSS, mobile first",
                "goal": "Make your pages look professional on every screen size.",
                "lessons": [
                    ("CSS basics", "Selectors, colours, fonts and spacing. How the cascade works and why your styles sometimes don't apply."),
                    ("The box model", "Margin, border, padding and content. The single idea that explains most layout problems."),
                    ("Flexbox and Grid", "Modern layout tools for navbars, card grids and page structure, with no floats or hacks."),
                    ("Mobile-first design", "Design for phones first, then scale up with media queries. Test on real devices with DevTools."),
                ],
                "exercise": "Style your three-page site with a colour palette, Google Fonts and a responsive card grid.",
                "deliverable": "A fully styled, responsive version of your site that looks good on a phone and a laptop.",
            },
            {
                "title": "JavaScript: making pages interactive",
                "goal": "Learn enough JavaScript to add real interactivity to your site.",
                "lessons": [
                    ("JavaScript fundamentals", "Variables, types, functions and conditions, written and tested in the browser console."),
                    ("The DOM", "Select elements on the page, change text and styles, and react to clicks."),
                    ("Events and forms", "Build a mobile menu, an image gallery and a contact form that checks input before sending."),
                    ("Working with data", "Arrays and objects. Render a list of projects from data instead of hard-coding them."),
                ],
                "exercise": "Add a working mobile menu and a filterable projects section to your site.",
                "deliverable": "Your site with at least two interactive features built from scratch.",
            },
            {
                "title": "Git, GitHub and going live",
                "goal": "Put your site on the internet the way professional teams do.",
                "lessons": [
                    ("Git basics", "Commits, history and undoing mistakes. Why every developer uses version control."),
                    ("GitHub", "Push your code to GitHub, write a README and keep your work backed up and shareable."),
                    ("Deploying on Vercel", "Connect your repo and deploy. Every push goes live automatically."),
                    ("Custom domains and launch checklist", "Connect a .co.za or .com domain, add a favicon and meta tags, and run a final check for speed and SEO."),
                ],
                "exercise": "Make a change, push it, and watch it deploy automatically.",
                "deliverable": "Your portfolio site live on your own domain, with the code on GitHub.",
            },
        ],
        "final": "Build and launch your personal portfolio site: at least three pages, fully responsive, with interactive features, deployed on Vercel with a custom domain. You present it in the final live session.",
        "faq": [
            ("Do I need a powerful laptop?", "No. Any laptop from the last 7 or so years will do. Everything we use is free and lightweight."),
            ("Is the domain included?", "The domain isn't included. A .co.za domain costs roughly R 100 a year, and we'll show you where to buy one."),
            ("What if I fall behind?", "Every session is recorded, and you can ask questions in the student group at any time."),
        ],
    },
    {
        "slug": "full-stack-web-apps",
        "title": "Full-Stack Web Apps",
        "short": "Full-Stack Web Apps",
        "level": "Intermediate",
        "length": "8 weeks",
        "format": "Online + Cape Town sessions",
        "price": 5999,
        "tagline": "Go from websites to real applications with users, data and payments, using the stack BuildsByBuchanan uses on client work.",
        "build": "A booking app with user logins and online payments",
        "outcomes": [
            "Build interfaces with React and Next.js",
            "Design a database and work with it using Postgres and Supabase",
            "Add sign-up, login and user permissions",
            "Write your own API routes",
            "Take real payments with PayFast or Yoco",
            "Deploy and monitor a production app",
        ],
        "for": [
            "People who've finished Web Foundations or can already build basic websites",
            "Junior developers who want real full-stack experience",
            "Founders who want to build their own MVP",
        ],
        "prereqs": "Comfortable with HTML, CSS and basic JavaScript. If you're not sure, message us and we'll send a short self-check.",
        "weeks": [
            {
                "title": "React fundamentals",
                "goal": "Think in components and build interactive UIs with React.",
                "lessons": [
                    ("Modern JavaScript refresher", "Arrow functions, destructuring, modules, promises and async/await: everything React code relies on."),
                    ("Components and props", "Break a page into reusable components and pass data between them."),
                    ("State and events", "Make components interactive with useState and handle user input."),
                ],
                "exercise": "Build a service menu component where users can pick services and see a running total.",
                "deliverable": "A React front end for the booking app's service selection screen.",
            },
            {
                "title": "Next.js and routing",
                "goal": "Structure a real application with pages, layouts and server rendering.",
                "lessons": [
                    ("The App Router", "Folders become routes. Build layouts, nested pages and dynamic routes."),
                    ("Server and client components", "What runs on the server and what runs in the browser, and why it matters for speed."),
                    ("Loading data", "Fetch data on the server and handle loading and error states properly."),
                ],
                "exercise": "Add a services page, a service detail page and a shared layout with navigation.",
                "deliverable": "A multi-page Next.js app deployed as a preview on Vercel.",
            },
            {
                "title": "Databases with Postgres and Supabase",
                "goal": "Store and query real data.",
                "lessons": [
                    ("Designing tables", "Plan tables for services, bookings and customers. Primary keys, relationships and data types."),
                    ("SQL essentials", "SELECT, INSERT, UPDATE, DELETE and JOIN. Enough SQL to answer real questions about your data."),
                    ("Supabase in Next.js", "Connect your app to Supabase and read and write data safely."),
                ],
                "exercise": "Create the database schema and seed it with sample services and time slots.",
                "deliverable": "The app showing real services and available time slots from the database.",
            },
            {
                "title": "Users, logins and permissions",
                "goal": "Let people sign up and make sure they only see their own data.",
                "lessons": [
                    ("Authentication", "Email and password sign-up, magic links and Google login with Supabase Auth."),
                    ("Protected pages", "Redirect logged-out users and show each user their own dashboard."),
                    ("Row Level Security", "Database rules that stop users reading other people's bookings, even if the front end has a bug."),
                ],
                "exercise": "Add sign-up and login, plus a 'My bookings' page.",
                "deliverable": "Working accounts where each user sees only their own bookings.",
            },
            {
                "title": "Building your own API",
                "goal": "Write back-end logic that the front end and other services can call.",
                "lessons": [
                    ("Route handlers", "Create API endpoints in Next.js for creating, updating and cancelling bookings."),
                    ("Validation", "Never trust input. Validate requests with Zod and return clear error messages."),
                    ("Server actions", "Handle forms without writing a separate API, and know when to use which approach."),
                ],
                "exercise": "Build the booking flow: choose a service, pick a time, confirm.",
                "deliverable": "End-to-end booking that stops two people booking the same slot.",
            },
            {
                "title": "Payments with PayFast and Yoco",
                "goal": "Take real money in rands.",
                "lessons": [
                    ("How online payments work", "Checkout flows, sandbox vs live mode, fees and what South African payment providers need from you."),
                    ("Integrating PayFast or Yoco", "Send customers to checkout and bring them back to the right page afterwards."),
                    ("Payment webhooks", "Confirm payments server-side so a booking is only confirmed once the money has actually arrived."),
                ],
                "exercise": "Require a deposit before a booking is confirmed.",
                "deliverable": "Paid bookings working end to end in sandbox mode.",
            },
            {
                "title": "Quality, speed and security",
                "goal": "Make your app reliable enough for real customers.",
                "lessons": [
                    ("Testing what matters", "Test the booking and payment logic that would cost money if it broke."),
                    ("Performance", "Image optimisation, caching and Lighthouse scores. Make it fast on a mid-range phone on mobile data."),
                    ("Security basics", "Environment variables, secrets, rate limiting and the common mistakes that leak data."),
                ],
                "exercise": "Get a Lighthouse score of 90+ on mobile and fix every issue a code review finds.",
                "deliverable": "A tested, optimised app with a clean security checklist.",
            },
            {
                "title": "Launch",
                "goal": "Ship it and show it.",
                "lessons": [
                    ("Production deployment", "Environment set-up, a custom domain and switching payments to live mode."),
                    ("Monitoring", "Error tracking, logs and analytics so you find out about problems before your users do."),
                    ("Demo day prep", "Present your app like you're pitching it to a client."),
                ],
                "exercise": "Run a full test booking on the live site.",
                "deliverable": "Your booking app live in production.",
            },
        ],
        "final": "A complete booking app for a real or imagined Cape Town business, such as a barber, gym, studio or tour operator. It needs user accounts, a booking calendar, deposits via PayFast or Yoco, an admin view, and a production deployment. You demo it live on demo day.",
        "faq": [
            ("Which payment provider do we use?", "You choose PayFast or Yoco. Both are covered, and both are commonly used in South Africa."),
            ("Can I build my own idea instead?", "Yes, as long as it has users, data and payments. We'll check the scope with you in week 1."),
            ("Are there any extra costs?", "No. Every tool we use has a free tier that's enough for the course."),
        ],
    },
    {
        "slug": "apis-and-automation",
        "title": "APIs & Automation",
        "short": "APIs & Automation",
        "level": "Intermediate",
        "length": "6 weeks",
        "format": "Online",
        "price": 3999,
        "tagline": "Make software do the boring work. Connect services together, build bots and automate the repetitive parts of a business.",
        "build": "A WhatsApp or Telegram bot that automates a real business task",
        "outcomes": [
            "Understand and use any REST API",
            "Build your own API with Node.js",
            "React to events in real time with webhooks",
            "Build chat bots on Telegram and WhatsApp",
            "Schedule jobs and send automated emails and notifications",
        ],
        "for": [
            "Developers who can write basic JavaScript",
            "People who automate work in spreadsheets and want to go further",
            "Freelancers who want to sell automation to businesses",
        ],
        "prereqs": "Basic JavaScript: variables, functions and loops. Web Foundations covers everything you need.",
        "weeks": [
            {
                "title": "What an API is",
                "goal": "Read API documentation and make requests with confidence.",
                "lessons": [
                    ("Requests and responses", "HTTP methods, status codes, headers and JSON, explained with real examples."),
                    ("Calling APIs", "Use fetch and an API client to get live data from public APIs."),
                    ("Authentication", "API keys, tokens and OAuth. How to keep keys secret."),
                ],
                "exercise": "Build a script that pulls the load-shedding schedule or the weather for Cape Town and prints a summary.",
                "deliverable": "A small Node.js script that calls two different APIs and combines the results.",
            },
            {
                "title": "Building your own API",
                "goal": "Create an API other software can use.",
                "lessons": [
                    ("Node.js and Express", "Set up a server with routes, handle requests and send JSON responses."),
                    ("Data and validation", "Store data in a database, validate input and return helpful errors."),
                    ("Deploying an API", "Put your API online and test it from anywhere."),
                ],
                "exercise": "Build an API for a small shop: products, stock and orders.",
                "deliverable": "A deployed API with at least four endpoints and a short README showing how to use it.",
            },
            {
                "title": "Webhooks",
                "goal": "Run code the moment something happens elsewhere.",
                "lessons": [
                    ("How webhooks work", "The difference between asking for updates and being told about them."),
                    ("Receiving webhooks safely", "Verify signatures, handle retries and avoid processing the same event twice."),
                    ("Real integrations", "Payment, form and GitHub webhooks triggering your own code."),
                ],
                "exercise": "When a form is submitted, save it and send yourself an instant notification.",
                "deliverable": "A webhook receiver connected to a real service.",
            },
            {
                "title": "Chat bots",
                "goal": "Build bots people can talk to.",
                "lessons": [
                    ("Telegram bots", "Create a bot, handle commands and reply with buttons and menus."),
                    ("WhatsApp Business API", "How WhatsApp automation works, message templates, and the rules you need to follow."),
                    ("Conversation design", "Keep bots short, useful and clear about what they can't do."),
                ],
                "exercise": "Build a bot that answers FAQs and takes simple bookings or orders.",
                "deliverable": "A working bot that stores what users send it.",
            },
            {
                "title": "Scheduling and notifications",
                "goal": "Automate work that happens on a timetable.",
                "lessons": [
                    ("Cron jobs", "Run code every hour, every morning or every Friday, reliably."),
                    ("Email and messaging", "Send transactional emails and messages without landing in spam."),
                    ("Error handling and logs", "Know when an automation fails, and make it retry safely."),
                ],
                "exercise": "Send an automatic daily summary of yesterday's orders.",
                "deliverable": "A scheduled job running in production with alerts when it fails.",
            },
            {
                "title": "Automate a real workflow",
                "goal": "Put everything together for a real business.",
                "lessons": [
                    ("Finding what to automate", "Spot repetitive tasks worth automating and estimate the time saved."),
                    ("Planning the flow", "Map triggers, steps and failure points before writing code."),
                    ("Handover", "Document your automation so a business owner can trust it."),
                ],
                "exercise": "Interview a business owner and choose one workflow to automate.",
                "deliverable": "Your final project, live and documented.",
            },
        ],
        "final": "Automate a real workflow for a real business, using a bot, an API and at least one scheduled job or webhook. Examples: booking reminders for a salon, stock alerts for a shop, or lead capture for a contractor. You present the before-and-after time saved.",
        "faq": [
            ("Do I need a WhatsApp Business account?", "No. You can do the whole course on Telegram. We cover WhatsApp so you know how to set it up for clients."),
            ("Which language is used?", "JavaScript with Node.js throughout."),
            ("Can I sell what I build?", "Yes. Many students turn their final project into their first paid automation client."),
        ],
    },
    {
        "slug": "freelance-developer-blueprint",
        "title": "Freelance Developer Blueprint",
        "short": "Freelance Blueprint",
        "level": "All levels",
        "length": "4 weeks",
        "format": "Online",
        "price": 1499,
        "tagline": "The business side nobody teaches: how to find clients, price your work in rands, and deliver projects that lead to more work.",
        "build": "Your offer, pricing sheet, proposal, contract and client pipeline",
        "outcomes": [
            "Define a clear offer that clients understand",
            "Scope and price projects in ZAR with confidence",
            "Write proposals and contracts that protect you",
            "Get paid on time with deposits and milestones",
            "Turn one-off projects into monthly retainers",
        ],
        "for": [
            "Developers and designers starting to freelance",
            "Freelancers who feel they're undercharging",
            "Anyone doing side projects who wants to go full time",
        ],
        "prereqs": "None. You don't need to be an expert developer. This course is about the business.",
        "weeks": [
            {
                "title": "Your offer and your clients",
                "goal": "Decide what you sell and who you sell it to.",
                "lessons": [
                    ("Choosing a niche", "Why 'I build websites' is hard to sell and 'I build booking sites for salons' isn't."),
                    ("Packaging your offer", "Turn skills into clear packages with fixed deliverables."),
                    ("Your portfolio", "Show three strong projects, even if they're personal or mock projects, the right way."),
                ],
                "exercise": "Write your one-sentence offer and test it on five people.",
                "deliverable": "A one-page offer with two or three packages.",
            },
            {
                "title": "Scoping and pricing in rands",
                "goal": "Price projects so you're paid properly and clients still say yes.",
                "lessons": [
                    ("Scoping a project", "Discovery questions, spotting hidden work and writing a clear scope."),
                    ("Pricing models", "Hourly, fixed price and value-based pricing, and when to use each in the South African market."),
                    ("Quoting", "Build a quote with line items, timelines and options."),
                ],
                "exercise": "Scope and quote a sample project from a real brief.",
                "deliverable": "Your pricing sheet and a reusable quote template.",
            },
            {
                "title": "Proposals, contracts and getting paid",
                "goal": "Protect yourself and get paid on time.",
                "lessons": [
                    ("Proposals that win", "Structure a proposal around the client's problem, not your tech stack."),
                    ("Contracts", "Scope, revisions, ownership, deposits and what happens if a project stalls."),
                    ("Invoicing and payment terms", "Deposits, milestones, EFT vs card, and chasing late payments professionally."),
                ],
                "exercise": "Turn your sample quote into a full proposal and contract.",
                "deliverable": "Proposal and contract templates ready to send.",
            },
            {
                "title": "Delivery, clients and retainers",
                "goal": "Deliver well and turn clients into ongoing income.",
                "lessons": [
                    ("Running a project", "Kick-off, weekly updates and handling feedback without endless revisions."),
                    ("Handover", "Training, documentation and a clean launch that makes clients refer you."),
                    ("Retainers", "Hosting, maintenance and support packages that bring in monthly income."),
                ],
                "exercise": "Design a maintenance retainer and write the pitch email for it.",
                "deliverable": "Your full freelance toolkit, ready to use.",
            },
        ],
        "final": "Put together your complete freelance toolkit: offer, portfolio page, pricing sheet, quote, proposal, contract and retainer package. Then send three real proposals during the course and get feedback on them.",
        "faq": [
            ("Is this legal advice?", "No. We give you working templates and explain the key clauses, but have a lawyer check your contract for big projects."),
            ("I'm not a developer. Is it still useful?", "Yes. It works for designers, video editors and any creative freelancer."),
            ("Do I get the templates?", "Yes, all templates are yours to keep and edit."),
        ],
    },
]
