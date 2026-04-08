# CORTISOL BRACELET — JLCPCB & PCBWay Manufacturing Guide
## Exact URLs, pricing, and step-by-step process

---

## JLCPCB (PRIMARY — cheapest for this project)

### Key URLs:
| What | URL |
|------|-----|
| **PCB + Assembly Quote** | https://cart.jlcpcb.com/quote |
| **PCBA Landing Page** | https://jlcpcb.com/pcb-assembly |
| **3D Printing Quote** | https://jlc3dp.com/3d-printing-quote |
| **Parts Search** | https://jlcpcb.com/parts/componentSearch |
| **New User Coupons** | https://jlcpcb.com/coupon-center |
| **Support Email** | support@jlcpcb.com |
| **Help/Contact** | https://jlcpcb.com/help/contact |
| **Live Chat** | Mon-Fri 24hrs, Sat 9am-6pm GMT+8 |

### Pricing for Our Project (100 boards):
- **PCB fabrication** (100x 2-layer, 30x35mm): ~$15-25
- **Assembly setup fee:** $8.00 (one-time)
- **Assembly labor:** $0.0017/solder joint → ~$8.50 for 100 boards @ 50 joints each
- **Components:** sourced from LCSC library (see below)
- **3D printing:** starts at $0.30/piece for SLA resin

### How to Order PCBA (step-by-step):
1. Design PCB in EasyEDA (https://easyeda.com) — free, one-click JLCPCB export
2. Export Gerber files, BOM, and CPL (Component Placement List)
3. Go to https://cart.jlcpcb.com/quote
4. Upload Gerber file → configure PCB specs
5. Toggle "SMT Assembly" ON
6. Upload BOM + CPL files
7. Get instant quote → pay → wait 1-2 weeks

### Turnaround:
- PCB fabrication: 1-3 days
- Assembly: ~1 week
- 3D printing: 2-3 days
- Shipping to US (DHL/FedEx): 3-7 business days
- **Total: ~2-3 weeks from file upload to doorstep**

---

## COMPONENT AVAILABILITY ON JLCPCB/LCSC

### ESP32-C3 — IN STOCK, GOOD PRICE ✅

| Part | LCSC Code | Stock | Price |
|------|-----------|-------|-------|
| **ESP32-C3-WROOM-02-N4** (RECOMMENDED) | C2934560 | **15,341** | **$2.87** |
| ESP32-C3-MINI-1-N4 | C2838502 | 2,608 | $2.99 |
| ESP32-C3-MINI-1-H4 | C2934569 | 6,985 | $2.87 |
| ESP32-C3FH4 (bare chip) | C2858491 | 6,028 | $2.26 |

**USE: ESP32-C3-WROOM-02-N4** — pre-certified module with antenna, massive stock, $2.87 each.

### MAX30102 — LIMITED STOCK, EXPENSIVE ⚠️

| Part | LCSC Code | Stock | Price |
|------|-----------|-------|-------|
| MAX30102EFD+T (in stock) | C6454833 | **128 only** | **$14.09** |
| MAX30102EFD+ (pre-order) | C7458628 | Pre-order | $7.01 |

**PROBLEM:** Only 128 units in stock at $14/each. That's $1,400 just for sensors — blows the budget.

**OPTIONS:**
1. **Pre-order** the $7 version (C7458628) — cheaper but unknown lead time
2. **Buy MAX30102 breakout modules from AliExpress** ($2.50 each) and hand-solder onto PCB
3. **Use "consignment" option** — buy MAX30102 ICs from Mouser/DigiKey (~$5-6/each) and ship them to JLCPCB for assembly
4. **Consider MAX30101** (older version, same functionality, may be cheaper/more available)

**RECOMMENDATION:** Use consignment. Buy 110x MAX30102 from Mouser/DigiKey at ~$5-6 each ($550-660), ship to JLCPCB, they solder them onto your boards.

### Other Components (all cheap and in stock):
- **LV8548MC motor driver:** search LCSC code C19950 — ~$0.61-0.77
- **TP4056 charger IC:** ~$0.02 on LCSC
- **ME6211 LDO:** ~$0.03-0.05 on LCSC
- **USB-C connector:** ~$0.08 on LCSC
- **Passives (resistors, caps):** pennies each

---

## PCBWay (BACKUP — slightly more expensive)

### Key URLs:
| What | URL |
|------|-----|
| **PCB Order** | https://www.pcbway.com/orderonline.aspx |
| **SMT Assembly Quote** | https://www.pcbway.com/quotesmt.aspx |
| **3D Printing Quote** | https://www.pcbway.com/rapid-prototyping/manufacture/?type=2 |
| **Sales Email** | service@pcbway.com |
| **3D Print Email** | 3dcnc@pcbway.com |
| **Contact Page** | https://www.pcbway.com/contact.html |

### Pricing:
- PCBA: "$29/20 pcs" base (more expensive than JLCPCB)
- PCB fab: "$5/10pcs"
- Free stencil included
- BOM pricing within 24 hours of upload

### Turnaround:
- PCBA: 3-5 days production
- 3D printing: 4-6 days
- Shipping: same as JLCPCB

---

## EasyEDA — FREE PCB DESIGN TOOL (USE THIS)

**URL:** https://easyeda.com

**Why use EasyEDA instead of KiCad:**
- Free, web-based, no install needed
- One-click export to JLCPCB ordering (no manual file juggling)
- Built-in LCSC/JLCPCB parts library with real-time stock/pricing
- Millions of component footprints and 3D models
- Can verify parts are in stock BEFORE you design
- Still hire a Fiverr designer — just ask them to use EasyEDA instead of KiCad

**Pro tip:** When hiring a PCB designer on Fiverr, tell them to use EasyEDA so the design integrates directly with JLCPCB ordering. No file conversion headaches.

---

## REVISED BOM COST (per unit, 100 qty via JLCPCB)

| Component | Source | Price Each |
|-----------|--------|-----------|
| ESP32-C3-WROOM-02-N4 | JLCPCB/LCSC (C2934560) | $2.87 |
| MAX30102 | Consignment from Mouser/DigiKey | ~$5.50 |
| LV8548MC motor driver | JLCPCB/LCSC (C19950) | $0.70 |
| TP4056 charger | JLCPCB/LCSC | $0.02 |
| ME6211 LDO | JLCPCB/LCSC | $0.05 |
| USB-C connector | JLCPCB/LCSC | $0.08 |
| Passives (caps, resistors, LEDs) | JLCPCB/LCSC | ~$0.30 |
| PCB fabrication | JLCPCB | ~$0.20 |
| Assembly labor | JLCPCB | ~$0.17 |
| Assembly setup (÷100) | JLCPCB | $0.08 |
| **SUBTOTAL (assembled PCB)** | | **~$9.97** |
| X27.168 stepper + needle | Alibaba | ~$1.50 |
| 150mAh LiPo battery | Alibaba | ~$1.00 |
| 3D printed case (2 parts) | JLC3DP or self-print | ~$2.00 |
| Silicone strap + spring bars | Alibaba | ~$0.50 |
| **TOTAL PER UNIT** | | **~$14.97** |

At $49.99 sell price → **~$35 gross profit per unit → $3,500 on 100 units**
