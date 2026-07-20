/* ============================================================
   character.js  ::  all the data. Chill, plain-language copy.
   Positioning: ML & Systems engineer who builds RL environments + the graders
   that score them. RPG frame kept; substance points at the острие.
   Style: no em dashes / en dashes anywhere (plain hyphens only).
   ============================================================ */
const CHARACTER = {
  name: "Aliaskar Bekishev",
  class: "Web Designer & Engineer",
  title: "the Worldbuilder",
  level: 23,
  tagline: "I design interfaces, build them in code, and read the numbers they produce.",
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
`Hi, I'm Aliaskar. I'm an engineer from Astana who likes making things you can actually open and touch: websites (climate.kz, this character sheet), simulations and little worlds in code, ML models, posters for two university clubs, the odd national climate forecast at work.

Two habits run through all of it. I like building the whole thing myself, from the first sketch to the shipped result. And I like checking it with numbers afterwards, whether it's a model, a landing page, or a game night poster.

This is just an easy way to show what I've been up to. Have a look around, no rush.`,

  // 6 stats, each note says in plain words what the stat means.
  stats: [
    { key: "STR", label: "Strength",     val: 8,  note: "raw power. I lift, and I cycle a lot" },
    { key: "DEX", label: "Dexterity",    val: 6,  note: "quick hands & sports" },
    { key: "INT", label: "Intelligence", val: 8,  note: "ML, systems, and figuring hard things out" },
    { key: "WIS", label: "Wisdom",       val: 9,  note: "reading data, models, and people" },
    { key: "CHA", label: "Charisma",     val: 7,  note: "vibing with people & getting them together" },
    { key: "LCK", label: "Luck",         val: 10, note: "good things keep finding me" },
  ],

  // skills as RPG abilities (a tool is not a skill; tools just power each ability). острие leads the wheel.
  perks: [
    { name: "Interface Smith",       icon: "❖", rank: 4, tier: "epic",      note: "I design interfaces and build them in code, typography to deploy.", tools: "Figma · HTML/CSS/JS · typography · grids", side: "hard" },
    { name: "Poster Forge",          icon: "✎", rank: 4, tier: "rare",      note: "Posters, banners, and event identities that had to fill rooms.", tools: "Figma · Canva · Lunacy · Blender", side: "hard" },
    { name: "Environment Architect", icon: "⊟", rank: 4, tier: "epic",      note: "I design the world an agent acts in, and the rules it plays by.", tools: "RL envs · gym/PettingZoo · self-play", side: "hard" },
    { name: "Grader Smith",          icon: "✓", rank: 4, tier: "epic",      note: "I write the graders that decide pass or fail, and catch the lucky wins.", tools: "eval harnesses · Monte-Carlo · reward design", side: "hard" },
    { name: "Model Trainer",         icon: "⚙", rank: 4, tier: "rare",      note: "I train and fine-tune models, and actually read the curves.", tools: "PyTorch · scikit-learn · YOLOv8", side: "hard" },
    { name: "Systems & Infra",       icon: "◫", rank: 4, tier: "rare",      note: "I make things run the same way on any machine, not just mine.", tools: "Docker · Compose · Linux · reproducible builds", side: "hard" },
    { name: "Simulation Architect",  icon: "◈", rank: 4, tier: "epic",      note: "I build simulations from scratch and keep them reproducible.", tools: "Python · physical sims · procgen", side: "hard" },
    { name: "Circuit Wright",        icon: "⏦", rank: 4, tier: "epic",      note: "I take a device from schematic and board layout through firmware to a working bench.", tools: "Altium · KiCad · LTspice · STM32/AVR · motor drives", side: "hard" },
    { name: "Signal Seer",           icon: "≈", rank: 3, tier: "rare",      note: "I pull clean signal out of genuinely noisy data.", tools: "DSP · adaptive filters · noisy data", side: "hard" },
    { name: "Dungeon Master",        icon: "⚄", rank: 5, tier: "legendary", note: "I run the table and design rules that stay balanced.", tools: "D&D · 150+ games · rules & balance design", side: "soft" },
    { name: "World Weaver",          icon: "✶", rank: 4, tier: "epic",      note: "I invent worlds: their lore, their maps, their history.", tools: "lore · procgen · maps", side: "soft" },
    { name: "Crowd Caller",          icon: "❂", rank: 4, tier: "rare",      note: "I rally people and run events at festival scale.", tools: "festivals 1000+ · PR", side: "soft" },
  ],

  // work experience = quests (острие-relevant first)
  quests: [
    { title: "Signals in the Noise", giver: "ASP-LAB, Nazarbayev University", dates: "2023 - present", status: "ACTIVE", diff: 4, exp: 900,
      log: [
        "Research on pulling clean signals out of noisy data, from wearables to genomic signals, and built the ML that does it (PyTorch, scikit-learn).",
        "Containerized the lab's ML workflows as multi-service Docker / Compose setups, so experiments reproduce identically on any machine.",
        "Built evaluation harnesses that score model outputs and flag the ones that look right but quietly fail held-out checks.",
      ], reward: "patience, a love for research, and a nose for results that are too good to be true",
      photos: ["assets/photos/asplab-conference.jpg", "assets/photos/asplab-setup.jpg"] },
    { title: "Keeper of the National Ledger", giver: "Climate Change Coordination Centre", dates: "2026 - present", status: "ACTIVE", diff: 4, exp: 1200,
      log: [
        "Designed and shipped the centre's official website, climate.kz: structure, layout, multilingual content, SEO.",
        "Built the first version of Kazakhstan's national greenhouse-gas forecast, a big multi-sector model (LEAP).",
        "Helped write part of the country's official climate report to the UN.",
        "Helped run a national expert workshop (guest lists, invites, all the logistics).",
      ], reward: "saw how big modeling decisions actually get made",
      photos: ["assets/photos/kcic-office.jpg", "assets/photos/kcic-conference.jpg"] },
    { title: "The Iron Knee", giver: "Robotics for Rehabilitation, Nazarbayev University", dates: "2026", status: "COMPLETE", diff: 4, exp: 800,
      log: [
        "Built a powered knee rehabilitation exoskeleton with four teammates. I took the drive side: picking the motor and writing the control that actually moves the joint.",
        "Sized the actuator from a torque budget. Gravity alone pulls on the knee with about 11 N·m for a 75 kg patient, and doubling that for safety set the requirement, which picked out a brushless CubeMars AK80-64.",
        "Commissioned the drive on an ODrive controller: a velocity loop with a position loop on top, following a clinical 0 to 90 degree flexion path, with the encoder logged to prove the joint really tracked it.",
        "Frame modelled in Fusion, printed in PLA, then assembled and wired up on the bench.",
      ], reward: "the feeling of a control loop moving something real and heavy",
      photos: ["assets/photos/exo-assembly.jpg", "assets/photos/exo-bench.jpg"] },
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
    { name: "climate.kz", species: "Ancient (production)", lvl: 9, sigil: "❂",
      tags: ["web design", "production", "SEO"],
      desc: "The official website of the Climate Change Coordination Centre, designed and built by me end to end: structure, layout, multilingual content, SEO. A real site for a real organization, live in production.",
      link: "https://climate.kz" },
    { name: "the Forge", species: "Proving Ground", lvl: 8, sigil: "⊟",
      tags: ["RL env", "self-play", "evals"],
      desc: "A reinforcement-learning environment I built end to end: a world behind a narrow interface, a self-play loop that learns to win it, and a Monte-Carlo grader that scores thousands of seeded runs. The learned policy found an exploit my hand-written bots never used, exactly the corner-cutting good environments exist to catch.",
      link: "https://github.com/Alyasska/seed-artifact" },
    { name: "chitin-coast", species: "World-Serpent", lvl: 9, sigil: "≈§≈",
      tags: ["Python", "simulation", "geospatial"],
      desc: "A whole made-up world I grew from scratch (land, weather, rivers, towns) as a reproducible pipeline (rasterio/GDAL, GeoTIFF/GeoJSON) with a deck.gl 3D viewer on top. My baby.",
      link: "https://github.com/Alyasska/chitin-coast" },
    { name: "protein-coding", species: "Helix-Wyrm", lvl: 6, sigil: "≀",
      tags: ["Python", "ML", "signals"],
      desc: "Code that finds the meaningful bits inside DNA using signal-processing tricks.",
      link: "https://github.com/Alyasska/protein-coding-analysis" },
    { name: "World Engine", species: "Golem", lvl: 5, sigil: "⛬",
      tags: ["JavaScript", "world-gen"],
      desc: "A little tool that builds worlds and maps on its own.",
      link: "https://github.com/Alyasska/World_Engine" },
    { name: "root app", species: "Guardian", lvl: 7, sigil: "❖",
      tags: ["app", "full-stack"],
      desc: "A full app I'm genuinely proud of, one of my best builds.",
      link: "https://alyasska.github.io/root_app/" },
    { name: "world_building", species: "Sprite", lvl: 3, sigil: "✦",
      tags: ["TypeScript", "world-gen"],
      desc: "A small toolkit for building worlds.",
      link: "https://github.com/Alyasska/world_building" },
    { name: "the board game", species: "Familiar (in training)", lvl: 3, sigil: "⚄",
      tags: ["tabletop", "systems design"],
      desc: "A board game I'm designing myself: rules, balance, the works. Still in the oven.",
      link: "" },
  ],

  // clubs = guilds
  guilds: [
    { name: "The Board Games Guild", org: "NU Board Games Club", rank: "Game Master · Treasurer · PR", years: "4+ yrs",
      logo: "assets/logos/boardgames.png",
      blurb: "My home base, honestly, the thing I'm proudest of. I've run game nights every week for 4+ years and been game master for 150+ board games. That's where I learned to design systems with clear win/lose conditions and to balance them so no single strategy quietly dominates, the same instinct I bring to building environments. Once a year we throw a 200+ person festival on campus (Minecraft, Adventure Time, Medieval) built entirely around playing board games.",
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
    { name: "Order of the Rising Sun", org: "Japanese Culture Club", rank: "Vice-President", years: "2024",
      logo: "assets/logos/japanese.png",
      blurb: "Vice-president. I ran “Japan Day”, one of the biggest festivals at our uni, with 50+ volunteers and hundreds of guests.",
      ig: "https://www.instagram.com/nu_japanese_club" },
    { name: "The Signal Workshop", org: "NU IEEE Student Branch", rank: "Vice Chair · Head of PR · Elections", years: "2023 - now",
      logo: "assets/logos/ieee.png",
      blurb: "Helped run talks, podcasts, the PR, and the club elections.",
      ig: "https://www.instagram.com/nuieee_sb" },
  ],

  achievements: [
    "Built a powered knee exoskeleton that follows a clinical rehab path: motor sizing, drive, and control",
    "Built a full RL environment from scratch: self-play + a Monte-Carlo grader (the Forge)",
    "Won a fully-funded master's at KAIST in Korea (the GKS scholarship)",
    "Top 10 at Higgsfield's hackathon (Kazakhstan's first AI unicorn)",
    "Helped write part of Kazakhstan's climate report to the UN",
    "Top 6 of 45 in my engineering class · GPA 3.5 / 4.0",
  ],
};
