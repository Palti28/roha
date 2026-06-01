---
title: "MyASN BKN"
summary: "Civil service HR platform for 4.4 million Indonesian civil servants. Web + Android, 14 features, 100+ screens designed and built."
category: "uiux"
service: "UIX Engineering"
duration: "6–12 months"
year: 2024
client: "BKN"
concept: false
tagLabel: "Client"
pattern: "pat-grid"
order: 4
draft: false
publishedAt: 2026-05-01
---

### 01 — Context

**One platform. Millions of civil servants.**

BKN (Badan Kepegawaian Negara) is the national agency responsible for managing the personnel records of every civil servant in Indonesia. MySAPK, now MyASN, is their central digital platform: a single system where all 4.4 million ASN can view service records, submit administrative requests, track career history, and manage their professional data.

One platform. Millions of users. No room for ambiguity in the UX.

### 02 — Role

**Design to delivery: 14 features, 100+ screens.**

UIX Engineer, a role that sits between design and delivery. Full ownership of user flows, wireframes, and high-fidelity screens across every feature. On the web platform, every one of those 100+ screens was also built in Vue.js. For Android, the work ended at design specification.

Features delivered:

1. **Authentication:** Login, Register, Reset Password
2. **Dashboard**
3. **Dashboard with Event**
4. **User Update Data**
5. **Document Submission**
6. **All Documents**
7. **Profiles**
8. **Stakeholder**
9. **Competency & Performance**
10. **Grade Point**
11. **Kartu PNS Elektronik**
12. **Performance Report Yearly**
13. **News**
14. **Notification**

### 03 — Challenge

**The data layer doesn't always cooperate.**

Government systems at this scale run on fixed infrastructure. The backend APIs were either locked or heavily constrained: modifying them was rarely an option, and many didn't return data in shapes that made for clean UI.

The real design problem wasn't visual. It was structural.

**Fixed APIs.** Backend data structures couldn't be changed. The UI had to absorb whatever shape the API returned: nulls, unexpected formats, delayed responses.

**Scale pressure.** Any UX decision affects millions of users across thousands of institutions, many with limited digital literacy or slow connections.

**Two-week delivery.** Sprint review every two weeks: design, build, and align with backend and frontend teams inside the same cycle.

> *"The answer wasn't to fight the backend. It was to absorb it: through deliberate loading states, fallback patterns, and micro-UX decisions that users never notice because they never see the seams."*

### 04 — Approach

**Component discipline. Sprint by sprint.**

Work ran in two-week sprints. Each cycle closed with a sprint review shared with backend and frontend teams, forcing early alignment on what was designed, what was buildable, and what actually shipped.

Component discipline was the foundation. Every screen was designed against what the API could realistically return. Edge cases (empty states, error states, partial data) were spec'd alongside the happy path, not added later.

On the code side, Vue components were kept tightly aligned with the design system. Across 100+ screens, the gap between mockup and production stayed small enough to matter.

### 05 — Results

**The experience held.**

MyASN BKN is in active use by civil servants across Indonesia, available on web and Android.

- **5M+** installs on Play Store
- **4 stars** — 18,500+ reviews
- **100+ screens** designed and built

A four-star rating for a government HR platform used under compliance pressure across thousands of institutions. Most of the low reviews are about server load during peak submission windows, not the UX. The experience held.
