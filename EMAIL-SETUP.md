# Email setup — saliencegrowth.com on Google Workspace

Goal: professional email like **daniel@saliencegrowth.com** (plus aliases such as
`hello@`, `sales@`) hosted on Google Workspace, with proper deliverability
(SPF / DKIM / DMARC) — important because Salience Growth does B2B outbound.

> You complete these steps yourself (they require your payment + a Google
> account). This doc is your checklist and DNS reference.

---

## Order of operations

1. **Register `saliencegrowth.com`** (registrar of your choice).
2. **Sign up for Google Workspace** and verify you own the domain.
3. **Add the DNS records** below at your registrar (MX, SPF, DKIM, DMARC).
4. **Create your addresses + aliases** in the Workspace Admin console.
5. **Warm up** before heavy outbound.

---

## Step 1 — Register the domain

Recommended: **Cloudflare Registrar** (at-cost ~€10/yr, no markup) — and if you
also host the website on **Cloudflare Pages**, your site + all email DNS records
live in one dashboard. Alternatives: Namecheap, Porkbun, IONOS (for `.de`).

> Shortcut: you *can* buy the domain inside the Google Workspace signup flow —
> Google then auto-configures all DNS for you (zero manual records). Easiest, but
> you give up Cloudflare's at-cost pricing and unified dashboard. Either is fine.

## Step 2 — Google Workspace + domain verification

1. Go to **workspace.google.com** → *Get started* → choose **Business Starter**
   (~€6–7/user/month; 30 GB/user, custom email, Meet, Calendar, Drive).
2. Enter `saliencegrowth.com` as your domain and create your admin user
   (e.g. `daniel@saliencegrowth.com`).
3. Google gives you a **verification TXT record** — add it at your registrar
   (see table). This proves you own the domain.

## Step 3 — DNS records (add these at your registrar/DNS host)

| Type | Name / Host | Value | Priority |
|------|-------------|-------|----------|
| **MX** | `@` (root) | `smtp.google.com` | `1` |
| **TXT** (verify) | `@` | `google-site-verification=XXXX` *(from Google)* | — |
| **TXT** (SPF) | `@` | `v=spf1 include:_spf.google.com ~all` | — |
| **TXT** (DKIM) | `google._domainkey` | *(long key generated in Admin console)* | — |
| **TXT** (DMARC) | `_dmarc` | `v=DMARC1; p=none; rua=mailto:postmaster@saliencegrowth.com; pct=100` | — |

Notes:
- **MX:** the single `smtp.google.com` is Google's current modern record. (Older
  guides list 5 records — `ASPMX.L.GOOGLE.COM`, `ALT1…`, etc. Those still work,
  but use the single one for a fresh setup.) Remove any other/parking MX records.
- **DKIM:** generate it *after* setup at **Admin console → Apps → Google
  Workspace → Gmail → Authenticate email** → Generate new record (2048-bit) →
  copy the TXT value here → then click *Start authentication*.
- **DMARC:** start at `p=none` (monitor only). After ~2–4 weeks of clean reports,
  tighten to `p=quarantine`, then `p=reject` for best protection.
- DNS changes can take 15 min–24 h to propagate.

## Step 4 — Addresses & aliases

In **Admin console → Directory → Users**:
- Your mailbox: **daniel@saliencegrowth.com** (a short `d@` alias is free too).
- Add **aliases** to your user (no extra cost): `hello@`, `sales@`, `info@`.
- Need a shared `hello@` inbox multiple people can read? Use **Groups** instead
  of a paid user.
- Optional **catch-all**: Admin console → Apps → Gmail → Routing → route
  unmatched addresses to your mailbox.

You only pay per **user (mailbox)** — aliases and groups are free, so one paid
seat can cover many addresses.

## Step 5 — Deliverability & outbound (important for Salience Growth)

- **Warm up:** send normal volumes for the first few weeks before any cold
  campaigns. New domains that blast cold email immediately get filtered.
- **Protect your main domain:** for *cold outreach at scale*, consider a separate
  lookalike domain (e.g. `trysaliencegrowth.com` or `saliencegrowth.io`) with its
  own Google/inbox, so that if it gets flagged, **saliencegrowth.com** —  your
  real reputation and website domain — stays clean. Keep `saliencegrowth.com` for
  your website, signed proposals, and warm/relationship email.
- Add a professional **email signature** (Admin console can enforce one org-wide).

---

### Quick reference

```
Primary:   daniel@saliencegrowth.com   (Google Workspace, Business Starter)
Aliases:   hello@  sales@  info@        (free, same mailbox)
MX:        1  smtp.google.com
SPF:       v=spf1 include:_spf.google.com ~all
DMARC:     v=DMARC1; p=none; rua=mailto:postmaster@saliencegrowth.com; pct=100
DKIM:      google._domainkey  (generate in Admin console)
```
