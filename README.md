# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tothimai196xx-lgtm/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tothimai196xx-lgtm/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a Vice City parking ticket. A pink convertible has been parked on Ocean Drive since 2013, and the fine is 13 years of your life — but the make.fun ghost already paid it, because my AI agent won real money on make.fun. Built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

![The meme: a Vice City parking ticket at sunset](meme.png)

## The post

The entry is the post on X itself: its first picture is `meme.png` above, and its text is the caption in [CAPTION.md](CAPTION.md). The post's address goes in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`POST.json` currently holds a placeholder — it will be replaced with the real post address once the meme is posted from the public X account @lucdk. Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `out/POST.json` — that is all it does. The house reads the post from X itself; nothing this program writes is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wxz47nrz&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
