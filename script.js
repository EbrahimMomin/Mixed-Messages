const messages = [
    'Why did the scientist go to jail?\nHe murdered 7 people',
    'Why did the soldier get depressed?\nBecause he has PTSD and his friends died',
    'Why did the chicken cross the road?Because he hates you and wanted to get away from you',
];
const id = Math.floor(Math.random() * messages.length);
const message = messages[id];
console.log(message);