/* ============================================================
   character.js  ::  all the data. Chill, plain-language copy.
   Positioning (2026-09-30): PRODUCT & MARKETING ANALYST. Leads with the JobEscape
   work (paid acquisition, A/B tests, churn, revenue monitoring), then Polymath
   (LLM evals), then research. Games and worldbuilding stay as the personality.
   Rules: no study years, no GPA, no "student" wording (he tells employers in person).
   Style: no em dashes / en dashes anywhere (plain hyphens only).
   ============================================================ */
const CHARACTER = {
  name: "Aliaskar Bekishev",
  class: "Product & Marketing Analyst",
  title: "the Worldbuilder",
  level: 23,
  tagline: "I find the reason behind the number - paid acquisition, A/B tests, churn and revenue for a global subscription app.",
  origin: "Astana, Kazakhstan",
  avatar: "assets/avatar.png",
  languages: ["Kazakh: native", "Russian: native", "English: C1", "Japanese: learning"],
  contact: {
    email: "lyasskar@gmail.com",
    github: "https://github.com/Alyasska",
    linkedin: "https://www.linkedin.com/in/aliaskar-bekishev/",
    location: "Astana, Kazakhstan",
  },

  codex:
`Hi, I'm Aliaskar. I'm a product and marketing analyst from Astana. Right now I work on JobEscape, a subscription app sold worldwide, mostly in Tier-1 countries: paid acquisition, A/B tests, churn, and keeping an eye on revenue.

My favourite part of the job is the moment a number stops making sense. Usually it's a broken metric, a failed payment, or a test that ended too early, and finding out which one it is feels a lot like solving a mystery.

Outside of work I run tabletop games, design a board game of my own, and build little worlds in code. This page is just an easy way to show what I've been up to. Have a look around, no rush.`,

  // 6 stats, each note says in plain words what the stat means.
  stats: [
    { key: "STR", label: "Strength",     val: 8,  note: "raw power. I lift, and I cycle a lot" },
    { key: "DEX", label: "Dexterity",    val: 6,  note: "quick hands & sports" },
    { key: "INT", label: "Intelligence", val: 8,  note: "statistics, ML, and figuring hard things out" },
    { key: "WIS", label: "Wisdom",       val: 9,  note: "reading data, and the people behind it" },
    { key: "CHA", label: "Charisma",     val: 7,  note: "vibing with people & getting them together" },
    { key: "LCK", label: "Luck",         val: 10, note: "good things keep finding me" },
  ],

  // skills as RPG abilities (a tool is not a skill; tools just power each ability). острие leads the wheel.
  perks: [
    { name: "Metric Hunter",        icon: "⌖", rank: 4, tier: "epic",      note: "I find out why a number moved, and whether the move is real.", tools: "A/B tests · cohorts · funnels · statistics", side: "hard" },
    { name: "Revenue Sentinel",     icon: "◉", rank: 4, tier: "epic",      note: "I watch the money and catch the drops nobody reported.", tools: "SQL · ClickHouse · anomaly detection", side: "hard" },
    { name: "Creative Auditor",     icon: "◎", rank: 4, tier: "epic",      note: "I check which ads really pay back, and whether the report is telling the truth.", tools: "ROI · ROAS · paid acquisition", side: "hard" },
    { name: "Churn Reader",         icon: "↯", rank: 4, tier: "rare",      note: "I split churn into its real causes, not the obvious one.", tools: "churn drivers · retention · LTV", side: "hard" },
    { name: "Grader Smith",         icon: "✓", rank: 4, tier: "epic",      note: "I write the graders that decide pass or fail, and catch the lucky wins.", tools: "LLM evals · reward hacking · Monte-Carlo", side: "hard" },
    { name: "Automaton Wright",     icon: "⇉", rank: 4, tier: "rare",      note: "I turn piles of messy text into topics and summaries with LLMs.", tools: "LLM pipelines · HuggingFace · agents", side: "hard" },
    { name: "Model Trainer",        icon: "⚙", rank: 4, tier: "rare",      note: "I train models and actually read the curves.", tools: "PyTorch · scikit-learn · Python", side: "hard" },
    { name: "Simulation Architect", icon: "◈", rank: 4, tier: "rare",      note: "I build simulations from scratch and keep them reproducible.", tools: "Python · procgen · geospatial", side: "hard" },
    { name: "Interface Smith",      icon: "❖", rank: 4, tier: "rare",      note: "I design interfaces and build them in code, typography to deploy.", tools: "Figma · HTML/CSS/JS · typography", side: "hard" },
    { name: "Dungeon Master",       icon: "⚄", rank: 5, tier: "legendary", note: "I run the table and design rules that stay balanced.", tools: "D&D · 150+ games · rules & balance design", side: "soft" },
    { name: "World Weaver",         icon: "✶", rank: 4, tier: "epic",      note: "I invent worlds: their lore, their maps, their history.", tools: "lore · procgen · maps", side: "soft" },
    { name: "Crowd Caller",         icon: "❂", rank: 4, tier: "rare",      note: "I rally people and run events at festival scale.", tools: "festivals 1000+ · PR", side: "soft" },
  ],

  // work experience = quests (острие-relevant first)
  quests: [
    { title: "The Growth Ledger", giver: "Nomad Venture Studio · JobEscape, global subscription app", dates: "Jun 2026 - present", status: "ACTIVE", diff: 5, exp: 1500,
      log: [
        "Audited the ROI reports behind 3,500+ ad creatives and found a metric error that made ROI look up to 19 pp better than it was.",
        "Run A/B tests on the web funnel and paywall end to end: the hypothesis, the PRD, the sample size, and the analysis at the end.",
        "Broke churn down into its real causes: 36% of it was failed payments, not people choosing to leave.",
        "Built revenue anomaly monitoring on production data (SQL, ClickHouse). It caught a 24.7% drop that nobody had reported.",
        "Built an LLM pipeline that turns App Store and Trustpilot reviews into topics and short summaries.",
      ], reward: "a habit of asking whether a scary number is real before anyone panics" },
    { title: "Judge of Machines", giver: "Polymath Labs (remote contract)", dates: "Jul - Sep 2026", status: "COMPLETE", diff: 4, exp: 1000,
      log: [
        "Designed graders that decide whether a frontier LLM really solved a software task, plus checks that catch it gaming the test (reward hacking).",
        "Automated building and checking the task environments with Docker, Kubernetes and Bash.",
      ], reward: "a sharp eye for results that pass the test but miss the point" },
    { title: "Keeper of the National Ledger", giver: "Climate Change Coordination Centre", dates: "Mar - Jun 2026", status: "COMPLETE", diff: 4, exp: 1200,
      log: [
        "Designed and shipped the centre's official website, climate.kz: structure, layout, multilingual content, SEO.",
        "Built the first version of Kazakhstan's national greenhouse-gas forecast, a big multi-sector model (LEAP).",
        "Helped write part of the country's official climate report to the UN.",
        "Helped run a national expert workshop (guest lists, invites, all the logistics).",
      ], reward: "saw how big modeling decisions actually get made",
      photos: ["assets/photos/kcic-office.jpg", "assets/photos/kcic-conference.jpg"] },
    { title: "Signals in the Noise", giver: "ASP-LAB, Nazarbayev University", dates: "Sep 2024 - May 2026", status: "COMPLETE", diff: 4, exp: 900,
      log: [
        "Research on pulling clean signals out of noisy data, from wearables to genomic signals, and built the ML that does it (PyTorch, scikit-learn).",
        "Containerized the lab's ML workflows as multi-service Docker / Compose setups, so experiments reproduce identically on any machine.",
        "Built evaluation harnesses that score model outputs and flag the ones that look right but quietly fail held-out checks.",
      ], reward: "patience, a love for research, and a nose for results that are too good to be true",
      photos: ["assets/photos/asplab-conference.jpg", "assets/photos/asplab-setup.jpg"] },
    { title: "The Simulation Contract", giver: "WSE LLP", dates: "2024 - 2025", status: "COMPLETE", diff: 3, exp: 600,
      log: [
        "Modeled how electronic systems behave (control & signal), and simulated their failure modes.",
        "Dug into tricky problems and pitched fixes, with the trade-offs spelled out.",
      ], reward: "an engineer's brain for messy problems",
      photos: ["assets/photos/wse-filter.jpg", "assets/photos/wse-electronics.jpg"] },
    { title: "Skyward Maintenance", giver: "SCAT Airlines", dates: "2024 (summer)", status: "COMPLETE", diff: 2, exp: 350,
      log: ["Helped fix and check real aircraft electronics and systems (with supervision)."],
      reward: "hands-on time with actual planes",
      photos: ["assets/photos/scat-1.jpg", "assets/photos/scat-2.jpg"] },
    { title: "The Mentor's Path", giver: "Tutoring (on my own)", dates: "2022-2024", status: "COMPLETE", diff: 2, exp: 400,
      log: ["Taught math to small groups, and their grades actually went up.", "Made my own lesson plans and progress trackers."],
      reward: "I learned how to explain hard things simply" },
  ],

  // hackathons = trials
  trials: [
    { title: "Higgsfield × AIESEC, Top 10", dates: "2025", diff: 3, exp: 500,
      log: ["Top 10 at the hackathon of Higgsfield, Kazakhstan's first AI unicorn.", "We built an LLM tool (a prompt-engineering app), and I came away with a real feel for where these models break: they'll hand you a confident wrong answer that looks completely right."] },
    { title: "Bundesliga Data Shootout", dates: "2025", diff: 3, exp: 300,
      log: ["Ran computer vision on match footage and modeled player data to surface insights."] },
    { title: "IEEE ML Hackathon (fintech)", dates: "2025", diff: 3, exp: 300,
      log: ["Predicted market trends and clustered investors by how they behave."] },
  ],

  // pet projects = pets (the pun). острие flagships first.
  pets: [
    { name: "chitin-coast", species: "World-Serpent", lvl: 9, sigil: "≈§≈",
      tags: ["Python", "simulation", "geospatial"],
      desc: "A whole made-up world I grew from scratch (land, weather, rivers, towns) as a reproducible pipeline (rasterio/GDAL, GeoTIFF/GeoJSON) with a deck.gl 3D viewer on top. My baby.",
      link: "https://github.com/Alyasska/chitin-coast" },
    { name: "the Forge", species: "Proving Ground", lvl: 8, sigil: "⊟",
      tags: ["RL env", "self-play", "evals"],
      desc: "A reinforcement-learning environment I built end to end: a world behind a narrow interface, a self-play loop that learns to win it, and a Monte-Carlo grader that scores thousands of seeded runs. The learned policy found an exploit my hand-written bots never used, exactly the corner-cutting good environments exist to catch.",
      link: "https://github.com/Alyasska/seed-artifact" },
    { name: "the board game", species: "Familiar (in training)", lvl: 3, sigil: "⚄",
      tags: ["tabletop", "systems design"],
      desc: "A board game I'm designing myself: rules, balance, the works. Still in the oven.",
      link: "" },
    { name: "climate.kz", species: "Ancient (production)", lvl: 9, sigil: "❂",
      tags: ["web design", "production", "SEO"],
      desc: "The official website of the Climate Change Coordination Centre, designed and built by me end to end: structure, layout, multilingual content, SEO. A real site for a real organization, live in production.",
      link: "https://climate.kz" },
    { name: "the Iron Knee", species: "Iron Golem", lvl: 7, sigil: "⏦",
      tags: ["robotics", "control", "team build"],
      desc: "A powered knee rehabilitation exoskeleton built with four teammates. I took the drive: sized the brushless motor from a torque budget and tuned the control so the joint follows a clinical 0 to 90 degree path.",
      link: "" },
    { name: "root app", species: "Guardian", lvl: 7, sigil: "❖",
      tags: ["app", "full-stack"],
      desc: "A full app I'm genuinely proud of, one of my best builds.",
      link: "https://alyasska.github.io/root_app/" },
    { name: "protein-coding", species: "Helix-Wyrm", lvl: 6, sigil: "≀",
      tags: ["Python", "ML", "signals"],
      desc: "Code that finds the meaningful bits inside DNA using signal-processing tricks.",
      link: "https://github.com/Alyasska/protein-coding-analysis" },
    { name: "World Engine", species: "Golem", lvl: 5, sigil: "⛬",
      tags: ["JavaScript", "world-gen"],
      desc: "A little tool that builds worlds and maps on its own.",
      link: "https://github.com/Alyasska/World_Engine" },
    { name: "world_building", species: "Sprite", lvl: 3, sigil: "✦",
      tags: ["TypeScript", "world-gen"],
      desc: "A small toolkit for building worlds.",
      link: "https://github.com/Alyasska/world_building" },
  ],

  // clubs = guilds
  guilds: [
    { name: "The Board Games Guild", org: "Board Games Club", rank: "Game Master · Treasurer · PR", years: "4+ years",
      logo: "assets/logos/boardgames.png",
      blurb: "My home base, honestly, the thing I'm proudest of. I've run game nights every week for 4+ years and been game master for 150+ board games. That's where I learned to balance systems so no single strategy quietly dominates, the same instinct I bring to reading player data and game economies. Once a year we throw a 200+ person festival (Minecraft, Adventure Time, Medieval) built entirely around playing board games.",
      ig: "https://www.instagram.com/nu.boardgames",
      photos: ["assets/photos/bg-minecraft.jpg", "assets/photos/bg-technoblade.jpg", "assets/photos/bg-adventuretime.jpg", "assets/photos/bg-medieval.jpg"],
      // games I can teach. English titles, de-duplicated, base games only (no expansions/DLC).
      games: [
        "Century: Spice Road", "Century: Eastern Wonders", "Century: A New World",
        "Secret Hitler", "A Game of Thrones: The Board Game", "Codenames: Pictures",
        "Monikers", "Set", "Blink", "Alien Planet", "Monopoly", "Soobrazhariy",
        "Tenno", "Ghost Blitz", "Mansions of Madness", "Root", "Muffin Time", "Munchkin",
        "Mastermind", "Unstable Unicorns", "500 Evil Cards", "Joking Hazard", "Abalone",
        "Adventure Time: Card Wars", "Samurai Sword", "Oriflamme", "Spyfall", "Dominion",
        "Battle Mages", "Battle Mages: Armageddon", "Cluedo", "Rokugan", "Hansa Teutonica",
        "Rick and Morty: Total Rickall", "Saboteur", "Pixel Tactics", "F*** My Brain",
        "Azul", "Yokai", "Breaking Bad", "Cartographers", "Overboard", "Risk",
        "Dead of Winter", "Gotham", "Evolution", "Noir", "Unmatched", "Star Realms",
        "The Red Dragon Inn", "Industria", "BANG!", "Doomsday", "Machi Koro", "Carcassonne",
        "Alias", "Alias: Party", "Bunker", "Catan", "Exploding Kittens", "Coup", "Scrabble",
        "Cow 006", "Sleeping Queens", "The Resistance", "The Thing", "Fluxx", "7 Wonders",
        "Colt Express", "Qazaq Handyghy", "Ekivoki", "Red7", "Citadels", "Ticket to Ride",
        "Cragmorta", "Ghost Writer", "Just One", "My Island", "Trajan", "Middle Ages",
        "Aurum", "Courtiers", "Extinction", "Level 8", "High Society", "Core", "Jenga",
      ] },
    { name: "Order of the Rising Sun", org: "Japanese Culture Club", rank: "Vice-President", years: "festival lead",
      logo: "assets/logos/japanese.png",
      blurb: "Vice-president. I ran “Japan Day”, a festival with 50+ volunteers and hundreds of guests.",
      ig: "https://www.instagram.com/nu_japanese_club" },
    { name: "The Signal Workshop", org: "IEEE Signal Processing Society", rank: "Vice Chair · Head of PR · Elections", years: "talks & podcasts",
      logo: "assets/logos/ieee.png",
      blurb: "Helped run talks, podcasts, the PR, and the elections." },
  ],

  achievements: [
    "Caught an unreported 24.7% revenue drop with monitoring I built",
    "Found a metric error that inflated ad ROI by up to 19 pp across 3,500+ creatives",
    "Showed that 36% of churn was failed payments, not people leaving",
    "Built graders that catch frontier LLMs gaming the test (Polymath Labs)",
    "Built a full RL environment from scratch: self-play + a Monte-Carlo grader (the Forge)",
    "Top 10 at Higgsfield's hackathon (Kazakhstan's first AI unicorn)",
    "Helped write part of Kazakhstan's climate report to the UN",
  ],
};
