let CHALLENGES = [];

async function loadChallenges() {
  const res = await fetch('challenges.json');
  if (!res.ok) throw new Error(`Failed to load challenges.json: ${res.status}`);
  CHALLENGES = await res.json();
}

function findChallenge(id) {
  return CHALLENGES.find(c => c.id === id) || null;
}
