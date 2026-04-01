// ============================================================
// n-gon Challenge List — Data & Logic
// ============================================================

// Difficulty Parameters (new system)
// Easy=10 (level 1), Normal=30 (level 3), Hard=50 (level 5), Why?=70 (level 7), Duke2pass=95 (level 7, extra constraints)

const CHALLENGES = [
  // ── EASY (Param 10, range 0–20) ─────────────────────────
  {
    id: 'soggy-love-songs',
    name: 'I love singing soppy love songs in the shower',
    tier: 'Easy',
    param: 10,
    description: 'Beat level 1 (Easy).',
    scoring: 'Time',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: 'Proto',
    records: [
      { name: 'GubsEnthusiast', score: '6:09',  control: 'Mouse',    video: null },
      { name: 'Proto',          score: '10:52', control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'crowdsource',
    name: 'Crowdsource',
    tier: 'Easy',
    param: 10,
    description: 'Beat level 1 (Easy) with community levels enabled.',
    scoring: 'Time',
    mouseVictor: 'cardvark61',
    trackpadVictor: null,
    records: [
      { name: 'cardvark61', score: '15:48', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'n00b',
    name: 'n00b',
    tier: 'Easy',
    param: 10,
    description: 'Beat Training Mode (level 1), no field.',
    scoring: 'Time',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: 'Proto',
    records: [
      { name: 'GubsEnthusiast', score: '3:17', control: 'Mouse',    video: null },
      { name: 'Proto',          score: '3:58', control: 'Trackpad', video: null },
      { name: '4erfswerd',      score: '5:51', control: 'Mouse',    video: null },
    ]
  },
  {
    id: 'spaceuk',
    name: 'SpaceUK',
    tier: 'Easy',
    param: 10,
    description: 'On level 7 (Why?), only deal damage with bots — 10 bots max + 2 tech + a field. You may not collect additional tech but may collect powerups.',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: null,
    records: [
      { name: 'GubsEnthusiast', score: '11', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'junkie',
    name: 'Junkie',
    tier: 'Easy',
    param: 10,
    description: 'Start with 5 Junk Tech. Beat level 3 (Normal).',
    scoring: 'Level Reached',
    mouseVictor: '4erfswerd',
    trackpadVictor: null,
    records: [
      { name: '4erfswerd', score: '6', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'queen-riz',
    name: 'Queen Rizzabeth refernece?????',
    tier: 'Easy',
    param: 10,
    description: 'Die by any means necessary.',
    scoring: 'Time',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: 'Alegogamer',
    records: [
      { name: 'GubsEnthusiast', score: '0:00.01', control: 'Mouse',    video: null },
      { name: 'cardvark61',     score: '0:00.01', control: 'Mouse',    video: null },
      { name: 'Alegogamer',     score: '0:00.03', control: 'Trackpad', video: null },
      { name: '4erfswerd',      score: '0:22',    control: 'Mouse',    video: null },
    ]
  },
  {
    id: 'literally-1984',
    name: 'Literally 1984',
    tier: 'Easy',
    param: 10,
    description: 'Every time you get a tech, have someone else choose it for you. Beat level 1 (Easy).',
    scoring: 'Time, 2-Player',
    mouseVictor: 'Squares',
    trackpadVictor: null,
    records: [
      { name: 'Squares', score: '11:39', control: 'Mouse', video: null },
    ]
  },

  // ── NORMAL (Param 30, range 21–40) ───────────────────────
  {
    id: 'average-joe',
    name: 'Average Joe',
    tier: 'Normal',
    param: 30,
    description: 'Beat level 3 (Normal), full RNG.',
    scoring: 'Time',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: 'Proto',
    records: [
      { name: 'GubsEnthusiast', score: '12:44', control: 'Mouse',    video: 'https://youtu.be/gsNsjxsK97k' },
      { name: 'Proto',          score: '12:05', control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'fard-mode',
    name: 'Fard Mode',
    tier: 'Normal',
    param: 30,
    description: 'Start with 5 boom-bots, missiles, grenades, and any explosion upgrades. Only use explosive damage. Beat level 5 (Hard).',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: 'Mr. A. K. #47',
    records: [
      { name: 'GubsEnthusiast', score: '12', control: 'Mouse',    video: null },
      { name: 'Mr. A. K. #47', score: '4',  control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'not-simple-sponge',
    name: 'Not A Simple Sponge',
    tier: 'Normal',
    param: 30,
    description: 'Start with Tungsten Carbide, Negative Entropy, and Quenching. Beat level 5 (Hard).',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: null,
    records: [
      { name: 'GubsEnthusiast', score: '11', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'heavy-weapons-guy',
    name: 'Heavy Weapons Guy',
    tier: 'Normal',
    param: 30,
    description: 'this',
    scoring: 'Level Reached',
    mouseVictor: '4erfswerd',
    trackpadVictor: null,
    records: [
      { name: '4erfswerd', score: '15', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'smoking-barrel',
    name: 'Smoking Barrel',
    tier: 'Normal',
    param: 30,
    description: 'On Experiment (any tier), once you pick up your gun you cannot stop firing it. Time starts when you start firing, ends when you stop.',
    scoring: 'Time',
    mouseVictor: 'cardvark61',
    trackpadVictor: 'Mr. A. K. #47',
    records: [
      { name: 'Mr. A. K. #47',  score: '0:43',   control: 'Trackpad', video: null },
      { name: 'cardvark61',      score: '180:00', control: 'Mouse',    video: null },
      { name: 'GubsEnthusiast',  score: '10:35',  control: 'Mouse',    video: null },
    ]
  },
  {
    id: 'bird',
    name: 'Bird',
    tier: 'Normal',
    param: 30,
    description: 'Beat level 3 (Normal) using -ship-.',
    scoring: 'Level Reached',
    mouseVictor: null,
    trackpadVictor: 'Mr. A. K. #47',
    records: [
      { name: 'Mr. A. K. #47', score: '2', control: 'Trackpad', video: 'https://youtu.be/loSf4GQJvt4' },
    ]
  },

  // ── HARD (Param 50, range 41–60) ─────────────────────────
  {
    id: 'should-i-be-pacifist',
    name: 'Should I be a pacifist?',
    tier: 'Hard',
    param: 50,
    description: 'Beat level 1 (Easy) without dealing damage to any mob, except on the final level.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: 'GubsEnthusiast',
    records: [
      { name: 'GubsEnthusiast', score: '14:07', control: 'Trackpad', video: 'https://youtu.be/W-q57YAFHyM' },
    ]
  },
  {
    id: 'skynet',
    name: 'Skynet',
    tier: 'Hard',
    param: 50,
    description: 'On level 7 (Why?) in Experiment, choose 9 bots of any type, their corresponding upgrade, drones, and molecular assembler. Only pick tech that directly relates to drones or bots.',
    scoring: 'Level Reached',
    mouseVictor: null,
    trackpadVictor: 'Mr. A. K. #47',
    records: [
      { name: 'Mr. A. K. #47', score: '5', control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'headshot',
    name: 'Headshot',
    tier: 'Hard',
    param: 50,
    description: 'Kill the final boss as fast as possible on level 1 (Easy). Start time once you enter the final level.',
    scoring: 'Time',
    mouseVictor: 'cardvark61',
    trackpadVictor: null,
    records: [
      { name: 'cardvark61',     score: '0:16', control: 'Mouse', video: null },
      { name: 'GubsEnthusiast', score: '0:30', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'bosnia',
    name: 'Bosnia',
    tier: 'Hard',
    param: 50,
    description: 'Beat level 3 (Normal) using only Mine damage.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: 'GubsEnthusiast',
    records: [
      { name: 'GubsEnthusiast', score: '—', control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'audio-jungle',
    name: 'Audio Jungle',
    tier: 'Hard',
    param: 50,
    description: 'Beat level 3 (Normal) with your microphone enabled in a public setting.',
    scoring: 'Time',
    mouseVictor: '4erfswerd',
    trackpadVictor: null,
    records: [
      { name: '4erfswerd', score: '16:40', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'senator-armstrong',
    name: 'Senator Armstrong',
    tier: 'Hard',
    param: 50,
    description: 'this',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: null,
    records: [
      { name: 'GubsEnthusiast', score: '12', control: 'Mouse', video: null },
    ]
  },

  // ── WHY? (Param 70, range 61–80) ─────────────────────────
  {
    id: 'hardly-working',
    name: 'Hardly Working',
    tier: 'Why?',
    param: 70,
    description: 'Beat level 5 (Hard).',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: 'Proto',
    records: [
      { name: 'Proto', score: '16:05', control: 'Trackpad', video: null },
    ]
  },
  {
    id: 'why',
    name: 'Why',
    tier: 'Why?',
    param: 70,
    description: 'Beat level 7 (Why?) with only: 1 field, 1 weapon, 1 bot, and 1 upgrade of your choice.',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: null,
    records: [
      { name: 'GubsEnthusiast', score: '9', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'planetsimals',
    name: 'Planetsimals',
    tier: 'Why?',
    param: 70,
    description: 'Play Planetsimals without dying.',
    scoring: 'Planetsimals level',
    mouseVictor: null,
    trackpadVictor: 'Proto',
    records: [
      { name: 'Proto', score: '7', control: 'Trackpad', video: null },
    ]
  },

  // ── DUKE2PASS (Param 95, range 81–100) ───────────────────
  {
    id: 'story-of-undertale',
    name: 'Story of Undertale',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) with the Growth Hacking junk tech equipped. No difficulty-reducing tech allowed.',
    scoring: 'Level Reached',
    mouseVictor: 'GubsEnthusiast',
    trackpadVictor: null,
    records: [
      { name: 'GubsEnthusiast', score: '2', control: 'Mouse', video: null },
    ]
  },
  {
    id: 'why-are-you-sad',
    name: 'Why are you so sad, kid?',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?).',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'endsieg',
    name: 'Endsieg',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) using the modified BlitzKrieg loadout with the same rules. You must pick up Growth Hacking.',
    scoring: 'Level Reached',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'acu-93',
    name: 'Acu 93%',
    tier: 'Duke2pass',
    param: 95,
    description: 'On level 7 (Why?), reach the final boss and die.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'unpossible',
    name: 'Unpossible',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) without equipping a gun.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'duke2pass-never-clear',
    name: 'Duke2pass Never Clear',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) without a field and without taking any damage.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'ultimate-pacifist',
    name: 'Ultimate Pacifist',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) without dealing damage to any mob except the final boss.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'true-ending',
    name: 'True Ending',
    tier: 'Duke2pass',
    param: 95,
    description: 'Beat level 7 (Why?) and unlock the secret ending.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'american-schools',
    name: 'American Schools',
    tier: 'Duke2pass',
    param: 95,
    description: 'Kill every mob on level 7 (Why?) and beat the game.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
  {
    id: 'duke2pass-eternal',
    name: 'Duke2pass Eternal',
    tier: 'Duke2pass',
    param: 95,
    description: 'In a row: beat level 1 (Easy), then level 3 (Normal), then level 5 (Hard), then level 7 (Why?) — all while listening to every Endertainment video on loop. Record desktop audio.',
    scoring: 'Time',
    mouseVictor: null,
    trackpadVictor: null,
    records: []
  },
];

// ──────────────────────────────────────────────────────────
// Utility: find challenge by id
// ──────────────────────────────────────────────────────────
function findChallenge(id) {
  return CHALLENGES.find(c => c.id === id) || null;
}
