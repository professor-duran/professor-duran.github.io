---
title: "Co-Creating with AI in Engineering Classrooms"
description: "AI is in your students' workflow whether you want it there or not. The interesting question is not how to detect it, but how to teach engineering judgment when AI handles the easy parts."
pubDate: 2026-04-14
tags: [ai, pedagogy, engineering-education, keen, generative-ai]
readingTime: "9 min read"
heroImage: /images/keen-national-2026.jpg
heroAlt: Adam Duran at the KEEN National Conference 2026, where engineering faculty convene to advance AI-integrated pedagogy
---

I gave a flash talk at the Mines Generative AI Summit in Fall 2025 titled "Co-Creating with AI: New Frontiers in Teaching and Design." The argument I made there is the argument I want to make here, in longer form. As of Spring 2026 I am also a member of the KERN Community Catalysts Cohort 13 EMxAI Working Group and part of a select national group in the KEEN Crescendo Program. I think a lot about how AI changes engineering education. Most of the conversations I am in are still not very useful.

The most common framing I hear from faculty is some version of "How do I detect AI use?" or "How do I redesign my assignments so AI cannot do them?" Both questions assume AI is an adversary. Both questions will lose.

Here is the framing I have settled on.

## The boring claim

Engineering students will use AI in their professional work. This is no longer speculative. Practicing engineers at every company I am in regular contact with (Stellantis, Shell, NREL alumni, KEEN industry partners) use AI tools every day. Code completion, document summarization, data analysis, requirement generation, system diagram drafting. The students we are training will inherit workflows in which AI is assumed.

If we do not teach engineering judgment in the presence of AI, our graduates will arrive at jobs where their first engineering tasks involve an AI tool they have never been taught to evaluate critically. They will either trust it too much or reject it reflexively. Both failure modes are real and both are common in early-career engineers right now.

## Three ways to think about AI in the engineering classroom

Most of the framings I hear collapse into three categories.

### 1. AI as a cheating threat

Faculty who view AI primarily as a cheating threat redesign assignments to be AI-resistant. Often this means in-class handwritten exams, oral assessments, or tightly scaffolded assignments where the answer space is small enough that AI does not have anywhere to be helpful.

This sometimes works for assessment, in the narrow sense of generating a grade. It does not teach the student anything about working with AI. It often degrades the assignment design, because the most AI-resistant assignments are the most procedural and the least like real engineering work.

### 2. AI as a tool to teach

Faculty who view AI as a tool to be taught include explicit instruction on prompt engineering, model evaluation, and AI workflow integration. This is closer to the right framing, but it has its own failure mode: it treats AI as a discrete topic, like learning a new programming language, and bolts a unit onto an existing course.

The risk is that students learn to "use AI" in the same way they learn to use MATLAB: as a context-specific tool with a manual. They do not learn to integrate AI into their broader engineering judgment.

### 3. AI as a co-creator

The framing I have landed on is to treat AI as a junior collaborator in the engineering work itself. The student is the senior engineer. The AI is the junior engineer who can produce a lot of plausible-looking work very fast, sometimes correctly, sometimes not. The student's job is to direct the work, evaluate the output, integrate it with the rest of the engineering project, and accept full responsibility for the result.

This framing is not a metaphor. It is operationally how I want students to use AI in my courses, and it is how I think most professional engineering AI use actually functions.

## What this looks like in practice

In my courses (MEGN 200, MEGN 300, MEGN 301, MEGN 417/527, MEGN 455, MEGN 456, EBGN 599) I have been gradually reshaping assignments to be explicit about AI use. The pattern that has emerged:

### 1. Explicit AI policy on every assignment

Every assignment specifies how AI may be used. The default is "AI use permitted, must be disclosed." I have never had to make a default of "AI use prohibited." If I wanted to assess what a student can do without AI, I would assess that in an exam. Take-home assignments are not the right place to test AI-free performance.

### 2. AI use disclosure as a deliverable, not a confession

Assignments require students to disclose how they used AI. Not as a moral confession, but as part of the engineering deliverable. Which prompts they used. Which outputs they accepted, modified, or rejected. What they would do differently next time. This disclosure becomes a form of engineering judgment exercise: students articulate why they trusted or distrusted specific AI outputs.

This shifts the conversation from "did you use AI" to "how did you use AI well." The latter is gradeable. The former is unenforceable.

### 3. Assignments that are bigger than AI can solve

The most effective AI-aware assignment design is to make the assignment's scope larger than what AI can plausibly produce alone. AI can write a credible paragraph about, say, suspension geometry. AI cannot write a credible 2-page SBIR Phase I white paper that responds to a real federal solicitation, integrates with a 70-page System Solution Report, and survives review by a co-instructor with industry experience.

The work of engineering judgment is at the level of the integrated artifact, not the individual paragraph. Assignments that operate at the integrated-artifact level are inherently AI-collaborative without being AI-vulnerable.

### 4. Explicit modeling of when to distrust AI

The most important pedagogical move is to give students structured exercises in which AI confidently produces wrong answers. This is easier than it sounds. Most calculation-heavy engineering questions, when asked of current language models, produce confident-sounding wrong answers a meaningful fraction of the time. Asking students to predict where AI will go wrong, then verifying empirically, builds engineering judgment about AI in a way that no abstract discussion can.

In MEGN 417, for example, I sometimes give students a vehicle dynamics problem and ask them to (1) solve it themselves, (2) ask an AI to solve it, (3) identify and explain the AI's errors. The exercise calibrates their trust in a way that is hard to fake.

## What I am not yet sure about

Several questions remain genuinely open for me.

### Where does AI use cross from collaboration into substitution?

There is a line at which a student stops being the senior engineer directing AI work and starts being a courier between the AI and the gradebook. I do not have a clean definition of where this line is. I think it varies by student, by assignment, and by domain. I am collecting examples from my own courses, but I do not have a publishable framework yet.

### How do we handle students who explicitly do not want to use AI?

A small number of students every semester opt out of AI use for thoughtful reasons (intellectual property concerns, environmental concerns, skill-building preferences). I support this. But it raises the question of whether a course that increasingly assumes AI co-creation is implicitly disadvantaging these students. I do not yet know.

### What is the long-term effect on engineering intuition?

If a student spends four years offloading routine calculations to AI, does their physical intuition for, say, force balances develop more slowly than a student who did them by hand? I do not know. I suspect the answer is "it depends on what the AI replaces" but I do not have data.

## The ask

If you teach engineering and have evolved your AI policy thoughtfully, I want to hear from you. The KERN EMxAI Working Group I am part of is collecting practitioner accounts of what is working and what is not. Email me at aduran@mines.edu with what you have learned, including what failed.

If you are an industry engineer using AI in real work and want to talk to a class about what it actually looks like in your day-to-day, I would love to schedule you as a guest speaker in MEGN 200, 300, 301, 417, or 455. The student-facing benefit of hearing from someone who is not an academic about how this actually works is significant.

The framing I am committed to: AI is a co-creator, students are the senior engineers, and our job as faculty is to teach the judgment that lets them work effectively with a powerful but unreliable collaborator. Everything else is detail.
