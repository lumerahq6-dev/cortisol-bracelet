# CORTISOL BRACELET - Business Plan
## A Wearable Stress Gauge

**Date:** April 7, 2026
**Budget:** $4,000 max
**Target:** 100-150 units first batch
**Sell Price:** $49.99
**First Ship Date:** September-October 2026

---

## THE PRODUCT

A wrist-worn novelty device with a **physical analog gauge needle** (no screen) that moves between green (chill) and red (stressed) based on your heart rate variability. It's the TikTok cortisol meme made real.

- Uses **MAX30102 PPG sensor** to read pulse/HRV (heart rate variability)
- **X27.168 automotive gauge stepper motor** drives the physical needle
- **ESP32-C3** microcontroller (BLE-capable for future app)
- **150mAh LiPo** battery, 1-3 days life with duty cycling
- **42mm watch case**, 3D printed resin/MJF nylon
- Standard 20mm silicone watch strap
- USB-C charging

**NOT a medical device.** Markets as novelty/entertainment. Does not claim to measure actual cortisol.

---

## BRAND & DOMAIN

| Asset | Domain | Cost |
|-------|--------|------|
| **Primary** | cortisolbracelet.com | ~$10/yr |
| **Marketing/Viral URL** | holycortisol.com | ~$10/yr |

**Why "Cortisol Bracelet":**
- Exact-match SEO — what people will literally Google
- Clear and descriptive, zero confusion
- #cortisolbracelet is a clean unique hashtag

**Why holycortisol.com is fire:**
- References "Holy Cortisol Spike!" — THE meme catchphrase
- Perfect for TikTok CTAs: "go to holy cortisol dot com"
- Sounds absurd/funny = drives curiosity clicks
- Use for marketing, redirect to cortisolbracelet.com

---

## BUDGET ALLOCATION ($4,000)

| Category | Budget | Notes |
|----------|--------|-------|
| Prototype development | $200 | Breadboard + 2-3 PCB revisions + 3D prints |
| Elegoo resin 3D printer | $250 | Prints all production enclosures |
| Resin + consumables | $75 | ~2L resin, FEP, IPA |
| Production PCBs (100 units) | $750 | JLCPCB PCBA with all components |
| Gauge stepper motors (100) | $150 | X27.168 + LV8548 drivers |
| LiPo batteries (100) | $120 | 150mAh cells from Alibaba |
| Watch straps (100) | $100 | Silicone quick-release from Alibaba |
| 3D printed enclosures (100) | $150 | Self-printed MJF nylon or resin |
| Gauge faces + needles (100) | $30 | Printed dial faces + plastic needles |
| Packaging (100) | $150 | Kraft boxes + printed inserts |
| Domains (2) | $20 | cortisolbracelet.com + holycortisol.com |
| Website (Shopify) | $35 | $1/mo promo first 3 months |
| Shipping supplies | $60 | Poly mailers, labels, postal scale |
| Marketing/ads | $700 | TikTok ads, micro-influencer gifting |
| Product photography | $50 | DIY with good lighting |
| Contingency | $350 | Unexpected costs, part failures, revisions |
| **TOTAL** | **$3,200** | **$800 remaining buffer** |

---

## UNIT ECONOMICS

| Metric | Value |
|--------|-------|
| Cost per unit (all-in) | ~$15-20 |
| Sell price | $49.99 |
| Shipping cost (USPS First Class) | ~$5.00 |
| Shopify transaction fee (2.9%+$0.30) | ~$1.75 |
| **Gross profit per unit** | **~$23-28** |
| Revenue on 100 units | $4,999 |
| Total profit on 100 units | ~$2,300-2,800 |
| **ROI on $4,000 investment** | **~58-70%** |

---

## TIMELINE

| Phase | Duration | Date | Milestone |
|-------|----------|------|-----------|
| Breadboard prototype | 2-3 weeks | Late April 2026 | HRV sensor + servo working |
| PCB design v1 | 3 weeks | Mid-May 2026 | First custom PCB designed |
| PCB fab + test | 3 weeks | Early June 2026 | First PCB from JLCPCB |
| Enclosure design | 2 weeks | Mid-June 2026 | 3D printed case fits |
| PCB revision + fixes | 3 weeks | Early July 2026 | Final PCB design locked |
| Production order (100) | 3 weeks | Late July 2026 | 100 PCBs assembled at JLCPCB |
| Enclosure printing (100) | 2 weeks | Mid-August 2026 | All cases printed |
| Final assembly + QC | 2 weeks | Late August 2026 | 100 units built and tested |
| Website + photos + packaging | 2 weeks | Early Sept 2026 | Store live |
| **LAUNCH** | - | **Mid-Sept 2026** | **Start shipping** |

**Pre-launch marketing starts June 2026** (teaser content while building).

---

## MARKETING STRATEGY

### Pre-Launch (June - September 2026)
- Teaser TikToks showing prototype builds (process content)
- "Would you wear this?" polls on Instagram/TikTok
- Email waitlist on getcortisol.com
- Behind-the-scenes content of manufacturing
- Target: 500+ emails before launch

### Launch (September 2026)
- TikTok organic content: stress reaction videos with the bracelet
- Gift 5-10 units to micro-influencers (wellness/comedy/meme accounts)
- TikTok Spark Ads: $200-300 budget boosting best organic content
- Instagram Reels cross-posting
- Reddit posts in r/electronics, r/3dprinting, r/gadgets

### Content Ideas
- "My cortisol bracelet during [stressful situation]"
- "POV: you check your cortisol at work"
- Duets/stitches with stressful content, showing gauge reaction
- "I made the cortisol meme into a real product"

### Pricing Strategy
- $49.99 retail (novelty sweet spot)
- Early bird: $39.99 for waitlist subscribers
- Bundle: 2 for $79.99 ("stress test your relationship")

---

## REGULATORY NOTES

1. **FCC:** No wireless in v1 = no FCC certification needed. If adding BLE later, ESP32-C3 modules are pre-certified.
2. **FDA:** Not applicable if marketed as novelty/entertainment. Include disclaimer: "Not a medical device. For entertainment purposes only. Does not measure cortisol."
3. **Product liability:** Consider $300-500/yr insurance once selling.

---

## RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| Needle mechanism unreliable | Use proven X27.168 car gauge stepper |
| PPG sensor poor wrist contact | Design snug case bottom, add silicone gasket |
| Battery life too short | Duty cycle aggressively (30s intervals) |
| 3D prints look cheap | SLA resin + sanding + spray paint finish |
| Meme trend dies | Build email list fast, launch ASAP, diversify to "stress" branding |
| FCC issues | No wireless in v1, add Part 15 label |

---

## NEXT STEPS (This Week)

1. [ ] Register cortisolbracelet.com + holycortisol.com
2. [ ] Order prototype parts from AliExpress (~$15, 2-week shipping)
3. [ ] Set up TikTok creator account
4. [ ] Launch waitlist landing page
5. [ ] Start breadboard prototype while waiting for parts
6. [ ] Begin learning KiCad for PCB design
