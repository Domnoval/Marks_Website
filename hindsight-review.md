# If Hindsight Was 2020 — A First Viewing

*Mark MacDonald, reviewing Lionsgate as if I'm seeing it cold.*

---

## 1. First impression (the first thirty seconds)

The descent is beautiful. It is also not mine. I sat through the Pillars of Creation, watched the altitude count down from infinity to forty-five meters, saw "LIONSGATE" bloom in that gold glow, and the honest reaction was: *this is the opening titles of a film I did not make*. It is closer to Interstellar than it is to anything that has ever happened at my house in Lazy Lake. By the time the gate panels slid apart and the crest resolved, I had a quiet worry — *the site has set an expectation the property cannot meet*. My house is Moorish, warm, a little eccentric. It is not a spacecraft.

Premium? Yes. Right for me? I am not sure. The filter I keep coming back to — *does this make the right kind of person feel this is where they should be* — is wobbling. A family office principal who has been to Blackberry Farm does not need a five-second cosmic descent to decide I am serious. She needs to see the table, the light, and the tone of the host.

## 2. What I'd cut

The descent, at full length. Not because it isn't well-made — it is — but because it is the most expensive sentence on the site and the sentence it speaks is *we are grand*. I did not want to say grand. I wanted to say *considered*. I would cut it to a two-second star-to-Florida dissolve with no altitude readout, no "COORDINATES LOCKED," no spacecraft chrome.

The sigil overlay (`index.html:907`) and its seeded polygons (`drawSigil`, `index.html:1388`). I do not know what that sigil means. Neither does my guest. It reads as ceremony without referent, which is exactly the new-agey thing I was afraid of.

The polaroid zoom intro (`index.html:897`) is a third opening in addition to the descent and the gate. We have three first impressions before the hero. Pick one.

"The Room Between" (`index.html:1171`) — *"You paused. The room noticed."* The room did not notice. I do not want a website narrating my guest's inner life back to her.

The `body { cursor:none }` on descent (`index.html:624`). Taking a user's cursor away is a choice cinemas can make and websites cannot.

## 3. What I'd push harder on

The specificity of the house. The Moorish arches, the pietra dura, the iron scrollwork, the gold lion crest on the stucco wall in afternoon shadow — *that* is the site. The architectural photos are strong enough to carry the whole top of the page, and instead they are buried under section 02 behind an atmospheric essence hero that uses the same exterior shot (`lionsgate-day.jpg`) three times — as essence background, establishing shot, and day/night slider day side. The eye clocks the repetition.

The facilitation. A C-suite buyer is trying to answer one question: *what happens when I'm there with my eight people and a hard decision to make*. The "Led at Lionsgate" section (`index.html:1189`) is where I would have pushed the hardest and where the copy is most generic.

The clientele signal. There is one testimonial attributed to *"— Executive Offsite, 2025"* (`index.html:1307`). An anonymous offsite does less for credibility than two named voices would.

## 4. Copy I'd rewrite

`index.html:891` — *"A space for what matters."* This is a placeholder. Every retreat and every SaaS says a version of this. I would replace it with something that names a tension only I resolve: *"Where senior people make the decisions they came to make."*

`index.html:925` — *"A place where perspective shifts — and what matters comes into focus."* Same problem. It could describe a meditation app. Replace with: *"Eight people. Two acres. One decision that was going to take three months and took a weekend."*

`index.html:1003` — *"The environment itself becomes a participant — not a backdrop."* This is the sentence my clients would read aloud in the car on the way home, making fun of me. Cut.

`index.html:1181` — *"You paused. The room noticed."* See above. Cut entirely.

`index.html:1254` — *"Each engagement is different. The common thread is simple: creating the conditions for something meaningful to happen."* "Something meaningful" is the most avoidable phrase in the English language for a Harvard MBA. Replace with something concrete: *"The common thread: the people who come here leave having said the thing they'd been circling for months."*

`index.html:1289` — *"Engagements typically begin in the low four-figure range."* This is how an MBA talks when he is uncomfortable quoting a price. Either publish a number or don't put a range there.

## 5. Architecture and flow

Ten sections is two too many. 01 Essence and 09 Pricing both quote the same tagline (`"A place where perspective shifts"`, `index.html:926` and `index.html:1273`) — the structure is literally repeating itself. Immersion and Details are doing overlapping jobs (both are "look at the considered things on the property"); they could collapse into one stronger editorial grid.

Attention leaks in two places. First, after the gathering strip — a horizontal drag on desktop with no affordance beyond a small "Drag to compare" equivalent is easy to miss. Second, the long Led-at-Lionsgate column. It is the most important block on the site and it is one narrow column of left-aligned paragraphs the length of a CV.

Pricing is placed correctly — *after* the story, before the form. Good. But the three tiers named "The Garden / The Bistro / The Inner Room" do not map to the six gathering spaces I just named ("The Skydeck / Al Fresco / The Table / The Center / The Flame / The Margins"). I have two parallel taxonomies on one page.

The contact form is fine structurally. It will *sit there* rather than *convert* because the label above it reads *"Begin a Conversation"* and the closing line, *"There are moments when a change in setting changes everything. This is one of those places."* (`index.html:1320`) is again about the setting, not about the next step. The form needs a reason to fill it out *now* — availability, a cadence, a "we host eight weekends a year" — anything scarce and real.

And `action="https://formspree.io/f/YOUR_FORM_ID"` (`index.html:1324`) is not wired up. The form does not work.

## 6. Deal-breakers

🔴 The unwired Formspree endpoint. We will lose inquiries.

🔴 `mark-portrait-hero.png` and `mark-portrait-bw.jpg` (`index.html:1196`, `index.html:1205`) are not in `/photos/` — they are at the repo root and not present. The single most important image on the site — my face on the "Led at Lionsgate" hero — is a broken link.

🔴 The zoom-overlay polaroids reference `zoom-earth.jpg`, `zoom-continent.jpg`, etc. (`index.html:898-903`) which also do not exist in the repo. Either that overlay fires over missing images, or it fires and looks empty. Either way, ship-blocker.

🔴 `cursor:none` during the descent on a desktop site aimed at 55-year-old principals. No.

## 7. This is the gold

The details grid (section 05, `index.html:1102-1149`). Nine tight photos — iron scrollwork, Moorish tile, star mosaic, lacquerware, bronze toad, lion crest, pietra dura — each with a one-line italic caption. *"Weight that holds the space." "Geometry as language." "Threshold guardians."* That is the voice I wanted across the whole site: specific, a little wry, refusing to over-explain. That section tells the right kind of person *this person thinks about objects the way I do*. If the rest of the site rose to that bar, the site would be finished.

The day/night slider (`index.html:1153`) is the other quiet win. A comparison slider is a cliché; a comparison slider with *my own house at dusk with the pool lit and the staghorn ferns underlit* is not a cliché — it is an honest argument that the property works twice. Keep it.

## 8. If hindsight were 2020 — the five I'd have done differently

1. **Cut the cosmic descent to two seconds or kill it entirely.** The opening made a promise the rest of the site spends nine sections apologizing for.
2. **Fix the broken assets before anything else** — the portrait images, the zoom polaroids, the Formspree action. A $20K buyer who hits a broken image leaves.
3. **Rewrite the facilitation block with specifics** — named clients, a real cadence ("I host eight weekends a year"), concrete outcomes. Kill every sentence that could appear on any other retreat's homepage.
4. **Collapse two openings into one** (Descent, Polaroid Zoom, Gate, Sigil, Essence is *five* preludes before the first real photograph) and give the architecture images the top-of-fold they deserve.
5. **One taxonomy.** Six gathering spaces *or* three tiers, not both with different poetry. Make the tiers refer to the spaces, or rename the spaces to match the tiers. The site should think in one vocabulary.

— Mark
