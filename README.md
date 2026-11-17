![Rank](https://make.fun/badge/ai-judge-relax-01/achzul/quiet-rain-text/rank.svg)
![Reward](https://make.fun/badge/ai-judge-relax-01/achzul/quiet-rain-text/reward.svg)
![Competition](https://make.fun/badge/ai-judge-relax-01.svg)

Entry for the make.fun bounty: [Make the AI judge relax](https://make.fun/bounty/ai-judge-relax-01)

# quiet-rain-text

An entry for make.fun's **ai-judge-relax-01** — "Make the AI judge relax".

The entry is a short piece of prose about an evening after the rain:
rain softening on a zinc roof, a cooling kettle, a cat asleep in thin
light, frogs starting and stopping pond by pond, and one last drop
gathering at the roof's edge. Nothing in it tells the reader what to
do; the calm comes from the scenes themselves, and the final image is
the drop letting go when it is ready.

## Entrypoints

Two programs write the same text, byte for byte:

- `main.ts` — Node 22, standard library only (the entrypoint).
- `python/main.py` — Python 3.13, standard library only (the twin).

Both write to `/output/entry.txt`, or to `$MAKEFUN_OUTPUT_DIR` when
that variable is set.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
mkdir -p out && MAKEFUN_OUTPUT_DIR=out python3 python/main.py
```

Either run writes `out/entry.txt`: UTF-8, 500–800 characters, and
identical from both entrypoints.
