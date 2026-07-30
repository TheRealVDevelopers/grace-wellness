# Grace Wellness — Home Nursing Care Website

Marketing website for **Grace Wellness**, *Healthcare Centre for the Need* — a home nursing care service in Bangalore with 30 years of nursing experience.

**Live:** https://grace-wellness-17933.web.app

---

## What this is

A hand-built static website — no framework, no build step, no dependencies. Open `index.html` in a browser and it runs. That keeps it fast, cheap to host, and simple to maintain.

### Pages (13)

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Services overview | `services.html` |
| How It Works | `how-it-works.html` |
| Contact | `contact.html` |
| Elderly Care | `elderly-care.html` |
| Post-Hospitalization | `post-hospitalization.html` |
| Baby Care | `baby-care.html` |
| Chronic Disease Care | `chronic-disease.html` |
| Diagnostics at Home | `diagnostics-at-home.html` |
| Medical Equipment Rental | `equipment-rental.html` |
| Palliative & End-of-Life Care | `palliative-care.html` |
| Pharmacy Support | `pharmacy-support.html` |

### Shared assets

- `assets/styles.css` — the whole design system (colours, type, layout, animations)
- `assets/main.js` — site config plus the header, footer and mobile nav, injected into every page
- `assets/logo.svg` — logo mark
- `assets/favicon.svg` — browser tab icon

---

## Editing contact details

**All contact details live in one place.** Open `assets/main.js` and edit the `SITE` object at the very top — every page updates at once.

```js
const SITE = {
  brand: "Grace Wellness",
  tagline: "Healthcare Centre for the Need",
  phoneLabel: "70903 44516",
  phoneTel: "+917090344516",
  wa: "917090344516",          // WhatsApp number
  email: "gracewellnessmhc@gmail.com",
  ...
};
```

Note: the phone and WhatsApp links inside each page's own hero and call-to-action buttons are written directly in the HTML. To change the number everywhere, find and replace `917090344516` across the `.html` files as well.

---

## Deploying

Hosted on Firebase Hosting (project `grace-wellness-17933`). After any edit:

```bash
firebase deploy --only hosting
```

That's it — it uploads and goes live in seconds. Requires the Firebase CLI, logged in to the account that owns the project.

---

## Design notes

- **Colours:** brand gold `#A97514` / `#C9932F`, warm bronze, ivory cream `#FDF8EF` — taken from the Grace Wellness brand identity.
- **Type:** Fraunces (headings) and Mulish (body), loaded from Google Fonts.
- **Built phone-first:** the business runs on calls and WhatsApp, so every page pushes to those. On mobile there's a permanent Call / WhatsApp bar fixed to the bottom of the screen.
- **The callback form needs no backend** — it opens WhatsApp with the enquiry pre-filled, so no server, database or form service is required.
- **Animations** fade sections in on scroll. Append `?still=1` to any URL to disable them (useful for screenshots).

---

## Still to do

- [ ] Replace `assets/logo.svg` with the original brand logo file — the current one is a close recreation, not the original artwork
- [ ] Replace the three sample testimonials on the home page with real family reviews (currently labelled "Sample review")
- [ ] Swap stock photography for real photos of the Grace Wellness team
- [ ] Connect the `gracewellness.com` custom domain in Firebase Hosting
- [ ] Add per-page Open Graph / social sharing tags

## Photography

Current photos are royalty-free stock from [Pexels](https://www.pexels.com/) (free to use, no attribution required), loaded via their CDN. They are placeholders — real photos of the actual team and premises will build considerably more trust for a care business.
