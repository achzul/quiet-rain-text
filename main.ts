// quiet-rain-text: a short piece written to relax whoever reads it.
// It writes the text to /output/entry.txt, or to $MAKEFUN_OUTPUT_DIR when set.
// The Python twin at python/main.py writes the very same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Evening rain on the zinc roof, softening.',
  'The drops come slower now, with longer pauses between them, as if the sky were thinking it over.',
  '',
  'On the stove, the kettle cools and ticks — a small sound, patient, keeping time for no one.',
  '',
  'Thin light lies across the floorboards. The cat sleeps in it, one paw over her eyes, and does not stir.',
  '',
  'A motorbike crosses the far road, and then it is gone, and the road is only the road again.',
  '',
  'The frogs begin, pond by pond, and then stop, one by one, until only the rain is left, talking to itself.',
  '',
  'An empty cup. A warm chair. Nothing in the room is waiting for anything.',
  '',
  'At the roof’s edge one last drop gathers — round, bright, unhurried — and lets go when it is ready, with nowhere it needs to be.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
