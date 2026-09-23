"""Generate course pages from tools/courses_data.py.

Usage:  python tools/build.py
"""
import re
from html import escape as e
from pathlib import Path
from urllib.parse import quote

from courses_data import COURSES, COMMON_INCLUDED, WHATSAPP

ROOT = Path(__file__).resolve().parent.parent
FONTS = ("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700"
         "&family=DM+Mono:wght@400&display=swap")


def rand(n):
    return f"R {n:,.0f}"


def wa(text):
    return f"https://wa.me/{WHATSAPP}?text={quote(text)}"


def enrol_link(c):
    return wa(f"Hi, I'd like to enrol in {c['title']} ({rand(c['price'])}).")


def page(title, desc, body, prefix=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>{e(title)}</title>
  <meta name="description" content="{e(desc)}">
  <meta name="theme-color" content="#080A0C">
  <link rel="icon" type="image/png" href="{prefix}assets/bbb-mark.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="{FONTS}" rel="stylesheet">
  <link rel="stylesheet" href="{prefix}style.css">
</head>
<body>
{body}
  <footer>
    © <span id="y">2026</span> API Syndicate · <a href="https://buildsbybuchanan.com" target="_blank" rel="noopener">BuildsByBuchanan</a>
  </footer>

  <script>document.getElementById('y').textContent = new Date().getFullYear();</script>
</body>
</html>
"""


def header(prefix, sub, back_href, back_label):
    return f"""
  <header class="top top-row">
    <a href="{prefix}./" class="brand">
      <img src="{prefix}assets/bbb-mark.png" alt="" width="32" height="32">
      <span><b>API <em>Syndicate</em></b><small>{e(sub)}</small></span>
    </a>
    <a href="{back_href}" class="back">← {e(back_label)}</a>
  </header>
"""


def course_card(c, prefix=""):
    """Compact card used on the home page and the course list."""
    return f"""      <a class="course-card" href="{prefix}courses/{c['slug']}.html">
        <span class="level">{e(c['level'])} · {e(c['length'])}</span>
        <h3>{e(c['title'])}</h3>
        <p>{e(c['tagline'])}</p>
        <span class="card-row"><span class="price">{rand(c['price'])}</span><span class="go">View course →</span></span>
      </a>"""


def build_list():
    cards = "\n".join(course_card(c) for c in COURSES)
    body = header("", "Courses", "./", "Home") + f"""
  <main>
    <section class="page-intro">
      <span class="eyebrow">Courses</span>
      <h1>Learn to build what <em>they can't.</em></h1>
      <p>Practical courses taught by BuildsByBuchanan developers in Cape Town. Every course ends with something real, deployed and live.</p>
    </section>

    <div class="course-grid">
{cards}
    </div>

    <section class="note">
      <h2>Not sure which one?</h2>
      <p>New to coding: start with Web Foundations. Already building sites: go for Full-Stack Web Apps or APIs &amp; Automation. Freelancing, or want to start: the Freelance Blueprint works at any level.</p>
      <a class="btn btn-ghost" href="{wa("Hi, which API Syndicate course is right for me?")}" target="_blank" rel="noopener">Ask us on WhatsApp</a>
    </section>
  </main>
"""
    (ROOT / "courses.html").write_text(
        page("Courses | API Syndicate",
             "Software courses from API Syndicate and BuildsByBuchanan in Cape Town.", body),
        encoding="utf-8")


def build_course(c):
    p = "../"
    li = lambda items: "\n".join(f"          <li>{e(x)}</li>" for x in items)
    weeks = []
    for i, w in enumerate(c["weeks"], 1):
        lessons = "\n".join(
            f"""            <li><b>{i}.{j}</b><div><h4>{e(t)}</h4><p>{e(d)}</p></div></li>"""
            for j, (t, d) in enumerate(w["lessons"], 1))
        weeks.append(f"""      <details class="week"{' open' if i == 1 else ''}>
        <summary><span class="wk">Week {i}</span><span class="wk-title">{e(w['title'])}</span></summary>
        <div class="week-body">
          <p class="goal">{e(w['goal'])}</p>
          <ol class="lessons">
{lessons}
          </ol>
          <dl class="week-tasks">
            <div><dt>Exercise</dt><dd>{e(w['exercise'])}</dd></div>
            <div><dt>By the end of the week</dt><dd>{e(w['deliverable'])}</dd></div>
          </dl>
        </div>
      </details>""")
    faqs = "\n".join(
        f"""      <details class="faq"><summary>{e(q)}</summary><p>{e(a)}</p></details>"""
        for q, a in c["faq"])
    n_lessons = sum(len(w["lessons"]) for w in c["weeks"])

    body = header(p, "Courses", "../courses.html", "All courses") + f"""
  <main>
    <section class="page-intro">
      <span class="eyebrow">{e(c['level'])}</span>
      <h1>{e(c['title'])}</h1>
      <p>{e(c['tagline'])}</p>
    </section>

    <section class="enrol-box">
      <dl class="facts">
        <div><dt>Price</dt><dd class="price-lg">{rand(c['price'])}</dd></div>
        <div><dt>Length</dt><dd>{e(c['length'])} · {n_lessons} lessons</dd></div>
        <div><dt>Format</dt><dd>{e(c['format'])}</dd></div>
        <div><dt>You'll build</dt><dd>{e(c['build'])}</dd></div>
      </dl>
      <a class="btn btn-primary" href="{enrol_link(c)}" target="_blank" rel="noopener">Enrol on WhatsApp</a>
    </section>

    <section class="block">
      <h2>What you'll learn</h2>
      <ul class="ticks">
{li(c['outcomes'])}
      </ul>
    </section>

    <section class="block two-col">
      <div>
        <h2>Who it's for</h2>
        <ul class="dots">
{li(c['for'])}
        </ul>
      </div>
      <div>
        <h2>Before you start</h2>
        <p>{e(c['prereqs'])}</p>
      </div>
    </section>

    <section class="block">
      <h2>Curriculum</h2>
      <p class="muted">{len(c['weeks'])} weeks · {n_lessons} lessons · a hands-on exercise and a deliverable every week.</p>
{chr(10).join(weeks)}
    </section>

    <section class="block">
      <h2>Final project</h2>
      <p>{e(c['final'])}</p>
    </section>

    <section class="block">
      <h2>What's included</h2>
      <ul class="ticks">
{li(COMMON_INCLUDED)}
      </ul>
    </section>

    <section class="block">
      <h2>Questions</h2>
{faqs}
    </section>

    <section class="enrol-end">
      <h2>{e(c['short'])} · <span class="price-lg">{rand(c['price'])}</span></h2>
      <p>Spots are limited so every student gets code reviews. Message us to book your place.</p>
      <a class="btn btn-primary" href="{enrol_link(c)}" target="_blank" rel="noopener">Enrol on WhatsApp</a>
    </section>
  </main>
"""
    (ROOT / "courses" / f"{c['slug']}.html").write_text(
        page(f"{c['title']} | API Syndicate Courses", c["tagline"], body, prefix=p), encoding="utf-8")


def build_home_section():
    idx = ROOT / "index.html"
    html = idx.read_text(encoding="utf-8")
    cards = "\n".join(course_card(c) for c in COURSES)
    section = f"""<!-- COURSES:START (generated by tools/build.py) -->
    <section class="home-courses" aria-labelledby="coursesTitle">
      <div class="home-courses-head">
        <h2 id="coursesTitle">Courses</h2>
        <a href="courses.html" class="go">All courses →</a>
      </div>
      <div class="course-grid">
{cards}
      </div>
    </section>
    <!-- COURSES:END -->"""
    html, n = re.subn(r"<!-- COURSES:START.*?<!-- COURSES:END -->", section, html, flags=re.S)
    if n != 1:
        raise SystemExit("COURSES markers not found in index.html")
    idx.write_text(html, encoding="utf-8")


if __name__ == "__main__":
    (ROOT / "courses").mkdir(exist_ok=True)
    build_list()
    for c in COURSES:
        build_course(c)
    build_home_section()
    print(f"Built courses.html, {len(COURSES)} course pages and the home page section.")
