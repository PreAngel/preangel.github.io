---
title: "How a Non-Technical CEO Rebuilt a Video AI Platform in 30 Days"
description: "A case study on how Q, Founder of LeyLine, used AI to completely rebuild their video AI platform in just one month."
author: qiushi-powers
tags:
  - vibe-coding
  - solo-founder
  - ai-native
  - case-study
image: assets/2025/10-company-of-one-rebuilt-video-ai-platform/q.webp
---

> Hi, I’m Q, the **Founding Human** behind [LeyLine](https://leyline.me), an AI-native video production platform that empowers creators to produce cinematic content with ease.

## 1) Timeline & Thesis

From September 24 to October 24, 2025, using Firebase Studio and Claude, I rebuilt through AI an entire year’s worth of work that had previously taken a team of more than a dozen engineers and product staff. I even implemented the advanced editing feature plans for the next version two days later. By the end of October, I notified the entire product and engineering team that we were dissolving the team, keeping only one full-stack engineer who understood our AI workflow to move the product into full AI-driven development. This is the story of who I am, how I did it, why it had to be done, and had to be done now.

---

## 2) Prologue — I Wanted to Be a Filmmaker, Not an Engineer

I’m a non-technical founder who optimized my entire career to avoid actual work. Finance, corporate strategy, marketing, film writing. I radiated the B-school sellout and creative dreamer energy that tech founders and VCs absolutely despised. And I didn’t even love hard work. I built a career on getting other smart people excited and doing it for me.

And yet, the irony: I founded a tech company.

Why? Because I truly loved telling stories. I wrote scripts in Hollywood. I got meetings, representation, the whole thing. I nearly got my first projects produced. Then COVID hit like a divine “nope.” Three years of nothing. When the lockdown finally lifted, Hollywood wanted to crawl back to 2019, pretending AI wasn’t knocking. But GPT and Midjourney were already there, and I saw the writing on the wall. With AI, I thought we’d hit a 95% reduction in production cost pretty fast.

That meant no more greenlight gatekeepers! Creators like me could finally make the stories we wanted!

Like a real creative idiot with the econ-student delusion that work product magically appears if you assemble “the right” team, I founded LeyLine to build the AI-native filmmaking pipeline—a tool that would let creators produce stunning videos without asking anyone for permission.

We raised real money. Our team had a famous researcher and an award-winning film veteran. We became 18 people across three continents. It was thrilling.

Until speed, complexity, and old-world process collided—and everything broke.

---

## 3) The Engineering Disaster Nobody Warns You About

We designed a spaceship and staffed to build … a planetary empire.

What we got:

- Burned through two-thirds of the money half a year after funding.
- 400+ unmanaged Azure resources and cloud bills no one could explain—before we even launched
- A prototype slower and more fragile than tools built ten years ago. The launchpad for the promised spaceship burnt all resources and still wasn't usable.
- Constant rewrites, nothing ever shipping; the client pipeline we sold on dream talks walked out the door
- Market and tech evolving faster than our product docs
- Co-founder meltdown → engineering vacuum

By February 2025, with six months of runway left, I realized the agonizing truth: I pulled this together. If anyone was going to dig us out, it had to be me.

From February to April 2025, I replaced the entire engineering team with senior engineers. Our first team worked hard, but we ran out of time. The new team gave us a real MVP—real users, real feedback.

... Users could make impressive videos, but only after three hours of onboarding. The UI was too complex, the workflow too rigid, and generation too slow for real production.

Our users weren’t pipeline engineers—they were storytellers and marketers who needed cinematic results fast. Agencies wanted to ship dozens of assets in parallel on bulk.

We had to:

- Redesign the UI and flow to cut creation time from hours to minutes.
- Plug in new models as soon as they come out. (Sora 2, Veo 3.1, and Nano Banana all dropped within weeks of one another.
- Enable parallel rendering for bulk, consistent output at scale.

It was clear that traditional product cycles couldn’t keep up. That realization led to the weekend I did the math—when I finally understood that human speed itself had become the bottleneck.

---

## 4) The Weekend I Did the Math

### Speed We Need

- User feedback → Ship: 1 week max
- New AI model drops → Integrate: same week
- Competor ships a feature → Match or exceed: days
- Market changes → Pivot: immediately

### Speed Humanly Possible (with traditional dev)

- Feedback → Sprint planning → Spec → Dev → QA → Ship: 3–4 weeks
- New AI model → Research → Spike → Architecture → Implement → Test: 2–3 weeks
- Competitor feature → Product meeting → Estimation → Schedule → Build: 4–6 weeks

Three spinning plates. Always. All breaking each other.

The math was brutal: by the time we shipped a stable release, the models we built around were already outdated. If we kept shipping at human speed while AI advanced at AI speed, we were dead on arrival.

Slowness wasn’t a risk — slowness was death. And I didn’t know what to do.

---

## 5) The Prompt That Changed Everything

Peak chaos. The week I begged my burnt-out team to prioritize critical fixes after user feedback as we started our next production sprint… they accidentally broke the web client before a major launch.

I paid a visit to our advisor, Huan, when this happened. I asked him to help me find the best way out. He looked at our product for a while and delivered the killshot:

> “Build it yourself with vibe coding.”

I stared. Was he joking? Was this hazing? Was he trying to bury me with one more shovel of dirt?

Me: “Seriously?”  
My brain: “I can’t code. I can’t even read code. My engineering friends did all my CS homework in college.” I thought it so hard I said it out loud.

Huan, perfectly calm:  
> “Then learn to ship. Not code. Ship.”

Maybe he was setting me up. I didn’t care anymore. Nothing to lose.

So this is my Kung Fu training story—but with software—over 30 days.

---

## 6) Week 1 — Removing the Friction to Start

**Tool:** Firebase Studio.

I tried to learn Cursor a couple of months ago and got frustrated staring at a blank web page.

Firebase Studio was the right choice for me because I knew nothing about building software. Firebase has:

- Pre-configured auth, storage, Firestore
- Auto-deployment
- No DevOps cognitive tax
- Just build features, not servers

So infrastructure stopped being my excuse.

Removing that starting friction is like removing the blank page from writing. In about one week, I had the basic product structure built from a simple one-page description in Prototyper. I knew so damn well what I wanted—after being frustrated for so long—that I abused my AI coding agent with a vengeance.

The ability to point at a page and say “give me this,” “give me that,” without sprint planning or arguing for weeks over a simple term, was liberating—like a paralyzed person taking their first steps.

**Lesson 1:** There’s no single “right” tool. Just the tool you can use to build.

---

## 7) Week 2 — Building Navigation

After the initial dopamine hit from rolling the dice and seeing what AI gives me, fast-forward a week and I hit the infamous wall: vibe coding becomes a clunky, unmanageable pile of sh\*t—a week of technical debt that would’ve taken humans a year to write.

My `page.tsx` had over 2,000 lines. The AI was confused. I was confused. Progress stopped. Every fix broke five other things.

I was also physically exhausted after staying up till 3 a.m. every day. The withdrawal symptoms showed as AI stopped giving me the dopamine hits that kept me going. I curled up in bed and cried for an entire weekend. Not poetic crying—physical, mind-throbbing, heart-aching crying. I didn’t know why I was doing this. I felt like a fraud. I wanted to quit.

And then—like every cliché origin story—the mentor returned. Huan forced me back to product documentation. We generated 50+ pages of PRD from the codebase to accurately describe what the product had evolved into.  ([https://github.com/ShipFail/fireprd](https://github.com/ShipFail/fireprd))

I wasn’t guessing what creators needed. I have lived the pain for years. I know why breakdowns collapse under versioning, why every asset change causes twenty continuity bugs, and why different framing conveys different moods. Visual storytelling is not just pixels and timelines. It is a thousand invisible rules that Hollywood has managed using spreadsheets, yelling, and traumatizing PAs for 100 years. If AI is going to replace that chaos, someone has to encode the workflow into clear, structured logic. But pulling all the bits and pieces out was hard. Painfully so.

It sounds ridiculous that I got lost in something I made just two weeks prior—but when one person suddenly has the power of ten engineers with AI, that same person can also f*ck up what used to take ten engineers to f*ck up. I didn’t even recognize my product anymore. For an entire week, I stopped building anything. I implemented the BMAD method. I studied and broke down the documentation into user stories and epics until I'm familiar with it again and can look at it in a structured, systematic manner.

**Lesson 2:** AI can only be as clear as I am. The only fix is discipline.

---

## 8) Week 3 — Refactor, So You Can Restart

I began using Claude with Gemini. First step: reduce all files below 500 lines so agents could reason without crawling a novel every time. The user stories and updated documentation made it work.

Two breakthroughs:

1) Claude understood enough so it doesn't break major flows during the refactor.  
2) I finally understood enough not to be afraid of breaking things in the refactor. I was ready to do it again.

**Lesson 3:** With real understanding comes real confidence.

---

## 9) Week 4 — The New Reality: I Became Claude’s Assistant

**At first:**  
Claude = engineer  
Me = CEO  
Me: “Do A-B-C-D-E.”  
Claude: “Brilliant, doing…”

**Now:**  
Claude = architect + dev team  
Me = QA + the innocent student  
Me: “Explain to me in plain English what this means, and how I can give you better debugging info.”  
Claude: “Excellent debug! Now can you do one more thing…”

**Workflow:**  
I ask Claude to make a plan based on refreshed documentation → it gives me a plan → we discuss → Claude builds → it gives me a list of tests to verify the build.

I adopted this workflow partly because the Prototyper (where I check functions) takes a while to load when I switch from the “backside” coding agents to the “front side.” To save time, I batched requests into build phases so each “turn” to the front gives me a comprehensive test list. Accidentally, I discovered this is the best way to work with AI: be clear, make it think, respect its logic, and work with it—not against it, or even try to control it too much.

**Claude + Gemini:** The workflow ended up like a sculptor’s process—Firebase Prototyper builds the key shapes (what each button does, where everything is on the page); Claude handles the structure and the finishes that make the sculpture stand. I discovered how to manage AI like humans: review each other, rotate tasks, preserve context, protect truth. Document everything. Record consistent bugs. It became smooth. Fast. Productive.

I started this in mid-September. The first commit for this working version was on September 24—exactly one month before my birthday. I rolled out a working version on my birthday. By month-end, I kept only one full-stack engineer who understood how to work with AI.

---

## 10) Why It Had to Be Done—And Done Now

This had to be done because the world changed overnight. When models evolve weekly, shipping monthly is professional suicide. Communication overhead becomes the real silent killer. Coordination becomes a tax that only legacy companies pay. And the market does not wait for anyone’s Jira board to finish its sprint.

When one extraordinary person + AI can out-ship 30 average people + meetings, the structure of business must change. This is Econ 101 finally coming true in the real world: technology drastically increases the marginal contribution of labor.

Average talent is no longer talent. Extraordinary talent becomes impossible to hire—so they become founders of Me.Myself.Empire. Fewer people + the right AI is much faster, much easier. “Cheaper” itself becomes less important because the one thing no one can buy is time.

And if a 37-year-old non-technical woman who was too lazy to do her own homework can rebuild an AI production platform in a month… what happens when all the tortured 20-year-old technical kids figure it out three months later?

I simply marked to market.

---

## 11) The Death of the Studio Era

Now, back to why and how I’m continuing to build LeyLine.

Production teams—like dev teams—were built for a world where labor was slow and expensive.

Now: **AI is the team.**

- The assistant director? An AI agent who studied Dutch angles.
- The compositor? Instant vision-to-video.
- The pipeline? Script → Breakdowns → Design → Keyframes → Render → Assembly—**handled**.

Mirroring the Vibe Coding workflows, I built around 30 specialized agents across the entire creative pipeline. They are any creator’s AI crew — friends I wish I had when I wanted my script to turn to screen. With LeyLine, creators make a publishable trailer in hours instead of 3–12 weeks. That is the economic transformation.

The future of creative work is not “AI replacing humans.” The future is one director-brain paired with a precise AI crew that understands story. A human making calls only humans can make. An AI instantly executing everything humans hate doing. Ten percent human genius, ninety percent machine throughput. That is what LeyLine builds into muscle memory.

Overnight, creativity is entering the era of DTC:

- Direct-to-Camera
- Direct-to-Consumer
- Direct-to-Culture

The need for gatekeepers is dying. And, in a way we have never seen before, talent is being liberated.

---

## 12) Epilogue and Trailer for Season 2

I never worked this hard in my life. I felt like a pet husky who did cuteness his entire life for a living, suddenly thrown into Antarctica and told to pull a rescue sled. (*Call of the Wild* is a great book to revisit for anyone who has to learn new skills. I kid you not—this kept me going, together with *The Martian*, *Army of One*, and a cult-classic Japanese film, *Getting Any?*, when I felt totally devastated.)

But that’s the point of any story: true character reveals itself only when something is at stake. Underneath the smooth-talking CEO with the professional corporate sellout smile was a stubborn woman who simply refused to stay down and wouldn’t take no for an answer. I started this. I wanted an AI pipeline to make my freaking movies. I’ll do it myself 100 times over if no one else gives it to me.

Anyway, it all began with a story. So I’ll end with one.

> In a mid-century sci-fi tale, mind-readers are the only way to reach astronauts light-years away and they were sought after like movie stars. There would be public casting for these kids who want to become mind-readers. The masters silently thought to the people lining up to fill the forms: **“If you can hear me, step out of line and go through the door on your left marked *NO ADMITTANCE*.”** And the ones who walk through are the real candidates.

That’s where new industries begin—behind forbidden doors, entered by people who hear the silent calling.

Season 2 of LeyLine is not a rebuild. It is a rollout. The product is live in private hands. The first creators are already making their dream shows with a fraction of the budget and none of the begging. Our north star is simple: **storytellers publish every week**, not every year. Movies used to be a miracle. Now they are a workflow. Campaign videos used to be out of reach, now they can be generated at anyone's fingertips.

If I can vibe-code the vibe-filming tool in a month—with no training, no budget, just anger and persistence—then anyone with a story can vibe-film their blockbuster today.

---

## 13) Walk Through That Door

Join the Vibe Filming Revolution - Work with an AI crew that understands story.

**LeyLine**  
**Your vision comes to life here.**

Sign Up for LeyLine Beta: [https://leyline.me](https://leyline.me)

Acknowledgments

Deep thanks to Huan — both the inciting incident and the Deus Ex Machina in this story.

The tools born from that chaos:

- FirePRD • [https://github.com/ShipFail/fireprd](https://github.com/ShipFail/fireprd)
- FireGen • [https://github.com/ShipFail/firegen](https://github.com/ShipFail/firegen)

...and I'm sure, many more to come, may yet define the new creative stack for AI-native builders.
