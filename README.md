# API Syndicate

A small site for API Syndicate, the street division of [BuildsByBuchanan](https://buildsbybuchanan.com) in Cape Town. People reach it by scanning the QR codes handed out at flash mobs.

- `index.html`: the QR landing page (its courses section is generated)
- `courses.html` and `courses/*.html`: the course list and full course pages (generated)
- `style.css`: styles, using BuildsByBuchanan's brand (DM Sans / DM Mono, #8ABF3C)
- `img/`: crew photos from Unsplash (`img/sm/` has the 640px versions for phones)

## Editing courses

Course content, prices and outlines live in `tools/courses_data.py`. After editing, run:

    python tools/build.py

This regenerates `courses.html`, every page in `courses/`, and the courses section on `index.html` between the `COURSES:START` and `COURSES:END` markers. Enrolment goes through WhatsApp (+27 79 268 6620).
