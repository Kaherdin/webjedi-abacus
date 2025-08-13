---
description: PRD - WebJedi Protfolio NextJS 15 and supbase website
---

WebJedi — Tech PRD (condensé)
KPIs
Conv. visite → lead ≥ 3%

TTFB < 0.7s, Lighthouse ≥95

Form completion <120s, déploiement contenu <1 min

Stack
App: Next.js 15 (App Router) + React 18

Style: Tailwind v4 + shadcn/ui, icônes lucide-react

Data: Supabase Postgres + Prisma ORM

i18n: next-intl (routes /fr/*, /en/*)

Forms: react-hook-form + Zod → write leads, form_responses

Email: Resend

Analytics: Plausible

Errors: Sentry

SEO: next-seo + JSON-LD + OG images

Thèmes & UI
Dual theme: Jedi (clair: white/blue/green) & Sith (sombre: near-black/red)

Tokens design pour switch propre (pas de duplication CSS)

IA (routes)
bash
Copier
Modifier
/                (home)
/services        (+ pages détail 3 services)
/projects        (+ pages détail 5 projets)
/blog            (index + article)
/about
/contact
/fr/* et /en/* pour toutes les pages
Contenu & Modèle (Supabase)
Tables (publie/lecture publique via RLS, insert autorisé pour leads/forms):

services, projects, posts, testimonials, media

leads (source, page, payload résumé)

forms (schema/steps)

form_responses (answers json, lead_id)
Stockage: images/, projects/, uploads/
Long-form en Markdown/MDX (blog & case studies).

Pages (modules clés)
Home: hero, projets en avant, services, articles récents, CTA

Services: grille + page détail (hero → why → deliverables → stack → ideal for → CTA + form)

Projects: liste filtrable + fiche (année, client, challenge, solution, résultats, stack, galerie)

Blog: index + article

About: philosophie, principes, bio

Contact: formulaire simple

Formulaire phare (“Créer mon site web”, multi-étapes)
Site existant (Oui/Non + URL)

Type de site

Pages souhaitées

Collections dynamiques

Sections

Identité visuelle

Autres infos
→ Valider avec Zod, persister step by step (optimistic), finaliser en leads + form_responses, notifier via Resend.

Perf & A11y
Contrastes AA+, focus states, skip links

next/image partout

Budget JS < 120KB gz (code-split, RSC, pas de deps inutiles)

SEO
Métadonnées localisées, slugs propres, JSON-LD (Article/Project/Person), OG images par page

Monitoring
Plausible (événements: view_project, start_form, submit_form, theme_toggle)

Sentry (front only v1)

Admin v1
Supabase + Prisma (CRUD via SQL/Studio)

UI admin minimale/lecture seule (optionnel)

Risques → Mitigation
Admin scope creep → v1 lecture seule

Dual theme complexité → tokens + tests visuels clés

i18n + SEO → next-intl + balises hreflang, vérifs routes

Documentation (à livrer)
Setup (env, Prisma, Supabase, shadcn)

Contenu (comment ajouter service/projet/post)

Thèmes (tokens, palettes)

i18n (ajout/édition de locales)

Form (schema Zod, persistance, webhooks/email)