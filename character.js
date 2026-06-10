/* ============================================================
   character.js — all the data. Chill, plain-language copy.
   TODO(you): add personal achievements; say what you built at Higgsfield.
   ============================================================ */
const CHARACTER = {
  name: "Aliaskar Bekishev",
  class: "System Engineer",
  title: "the Worldbuilder",
  level: 23,
  tagline: "Different worlds, one instinct — I build the systems that make them work.",
  origin: "Astana, Kazakhstan",
  avatar: "assets/avatar.png",
  languages: ["Kazakh — native", "Russian — native", "English — C1", "Japanese — learning"],
  contact: {
    email: "lyasskar@gmail.com",
    github: "https://github.com/Alyasska",
    location: "Astana, Kazakhstan",
  },

  codex:
`Hi, I'm Aliaskar. I like building things — games, little worlds in code, events, the odd climate model at work — and figuring out how the systems behind them fit together. It's usually the same itch: take something messy and try to make it work.

This is just an easy way to show what I've been up to. Have a look around — no rush.`,

  // 6 stats — each note just says, in plain words, what the stat means.
  stats: [
    { key: "STR", label: "Strength",     val: 8,  note: "raw power — I lift, and I cycle a lot" },
    { key: "DEX", label: "Dexterity",    val: 6,  note: "quick hands & sports" },
    { key: "INT", label: "Intelligence", val: 8,  note: "learning new things & figuring stuff out" },
    { key: "WIS", label: "Wisdom",       val: 9,  note: "making sense of data and people" },
    { key: "CHA", label: "Charisma",     val: 7,  note: "vibing with people & getting them together" },
    { key: "LCK", label: "Luck",         val: 10, note: "good things keep finding me" },
  ],

  // skills as RPG perks — flank the stat hexagon (hard = tech, soft = people)
  perks: {
    hard: ["Python", "React", "Machine Learning", "Signal Processing", "Data & Modeling", "Simulation / Procgen"],
    soft: ["Game Mastering", "Worldbuilding", "Event Production", "Teaching", "Leadership", "Storytelling"],
  },

  // work experience = quests
  quests: [
    { title: "Keeper of the National Ledger", giver: "Climate Change Coordination Centre", dates: "2026 – present", status: "ACTIVE", diff: 4, exp: 1200,
      log: [
        "Helped write part of Kazakhstan's official climate report to the UN.",
        "Built the first version of the country's greenhouse-gas forecast (a model called LEAP).",
        "Helped run a big expert meeting — guest lists, invites, all the logistics.",
      ], reward: "saw how big climate decisions actually get made",
      photos: ["assets/photos/kcic-office.jpg", "assets/photos/kcic-conference.jpg"] },
    { title: "The Simulation Contract", giver: "WSE LLP", dates: "2024", status: "COMPLETE", diff: 3, exp: 600,
      log: [
        "Modeled how electronic systems behave (control & signal stuff).",
        "Dug into tricky problems and pitched fixes, with the trade-offs spelled out.",
      ], reward: "an engineer's brain for messy problems",
      photos: ["assets/photos/wse-filter.jpg", "assets/photos/wse-electronics.jpg"] },
    { title: "Signals in the Noise", giver: "ASP-LAB, Nazarbayev University", dates: "2024", status: "COMPLETE", diff: 4, exp: 900,
      log: [
        "Research on pulling clean signals out of noisy data — from wearables to DNA.",
        "Used machine learning to clean up the messy stuff.",
      ], reward: "patience, and a love for research",
      photos: ["assets/photos/asplab-conference.jpg", "assets/photos/asplab-setup.jpg"] },
    { title: "Skyward Maintenance", giver: "SCAT Airlines", dates: "2024 (summer)", status: "COMPLETE", diff: 2, exp: 350,
      log: ["Helped fix and check real aircraft electronics and systems (with supervision)."],
      reward: "hands-on time with actual planes",
      photos: ["assets/photos/scat-1.jpg", "assets/photos/scat-2.jpg"] },
    { title: "The Mentor's Path", giver: "Tutoring (on my own)", dates: "2022–2024", status: "COMPLETE", diff: 2, exp: 400,
      log: ["Taught math to small groups — and their grades actually went up.", "Made my own lesson plans and progress trackers."],
      reward: "I learned how to explain hard things simply" },
  ],

  // hackathons = trials
  trials: [
    { title: "Higgsfield × AIESEC — Top 10", dates: "2025", diff: 3, exp: 500,
      log: ["Made the top 10 (Higgsfield is Kazakhstan's first AI unicorn).", "Real talk — we built another ChatGPT wrapper, a little prompt-engineering tool 😄"] },
    { title: "Bundesliga Data Shootout", dates: "2025", diff: 3, exp: 300,
      log: ["Looked at football player data and ran computer vision on match footage to find insights."] },
    { title: "IEEE ML Hackathon — fintech", dates: "2025", diff: 3, exp: 300,
      log: ["Predicted market trends and grouped investors by how they behave."] },
  ],

  // pet projects = pets (the pun)
  pets: [
    { name: "chitin-coast", species: "World-Serpent", lvl: 9, sigil: "≈§≈",
      tags: ["Python", "maps", "simulation"],
      desc: "A whole made-up world I grew from scratch — land, weather, rivers, towns. My baby.",
      link: "https://github.com/Alyasska/chitin-coast" },
    { name: "root app", species: "Guardian", lvl: 7, sigil: "❖",
      tags: ["app", "full-stack"],
      desc: "A full app I'm genuinely proud of — one of my best builds.",
      link: "https://alyasska.github.io/root_app/" },
    { name: "World Engine", species: "Golem", lvl: 5, sigil: "⛬",
      tags: ["JavaScript", "world-gen"],
      desc: "A little tool that builds worlds and maps on its own.",
      link: "https://github.com/Alyasska/World_Engine" },
    { name: "protein-coding", species: "Helix-Wyrm", lvl: 6, sigil: "≀",
      tags: ["Python", "biology", "signals"],
      desc: "Code that finds the meaningful bits inside DNA using signal tricks.",
      link: "https://github.com/Alyasska/protein-coding-analysis" },
    { name: "the board game", species: "Familiar (in training)", lvl: 3, sigil: "⚄",
      tags: ["tabletop", "design"],
      desc: "A board game I'm making myself. Still in the oven.",
      link: "" },
    { name: "world_building", species: "Sprite", lvl: 3, sigil: "✦",
      tags: ["TypeScript", "world-gen"],
      desc: "A small toolkit for building worlds.",
      link: "https://github.com/Alyasska/world_building" },
    { name: "222.com", species: "Gift", lvl: 2, sigil: "♥",
      tags: ["web", "for someone special"],
      desc: "A little web gift I made for someone I care about.",
      link: "https://alyasska.github.io/222.com/" },
    { name: "climate.kz", species: "Familiar", lvl: 5, sigil: "❂",
      tags: ["web", "climate"],
      desc: "A climate web project — making climate data easier to read.",
      link: "https://alyasska.github.io/climate.kz/" },
  ],

  // clubs = guilds
  guilds: [
    { name: "The Board Games Guild", org: "NU Board Games Club", rank: "Game Master · Treasurer · PR", years: "4+ yrs",
      logo: "assets/logos/boardgames.png",
      blurb: "My home base, honestly — the thing I'm proudest of. I've run game nights every week for 4+ years and been game master for 150+ games. Once a year we throw a huge 200+ person festival on campus (Minecraft, Adventure Time, Medieval) where the whole event is built around playing board games.",
      ig: "https://www.instagram.com/nu.boardgames",
      photos: ["assets/photos/bg-minecraft.jpg", "assets/photos/bg-technoblade.jpg", "assets/photos/bg-adventuretime.jpg", "assets/photos/bg-medieval.jpg"],
      // games I can teach — English titles, de-duplicated, base games only (no expansions/DLC)
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
      blurb: "Vice-president. I ran “Japan Day” — one of the biggest festivals at our uni — with 50+ volunteers and hundreds of guests.",
      ig: "https://www.instagram.com/nu_japanese_club" },
    { name: "The Signal Workshop", org: "NU IEEE Student Branch", rank: "Vice Chair · Head of PR · Elections", years: "2023 – now",
      logo: "assets/logos/ieee.png",
      blurb: "Helped run talks, podcasts, the PR, and the club elections.",
      ig: "https://www.instagram.com/nuieee_sb" },
  ],

  achievements: [
    "Won a fully-funded master's at KAIST (Korea) — the GKS scholarship",
    "Helped write part of Kazakhstan's climate report to the UN",
    "Top 6 of 45 in my engineering class",
    "GPA 3.5 / 4.0",
    // ↓ your PERSONAL achievements go here — tell me and I'll add
  ],
};
