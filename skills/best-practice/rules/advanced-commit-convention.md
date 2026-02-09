# Commit conventions

Commits are a team agreement. A consistent format makes history predictable, reviews faster, and planning easier. When everyone writes commit messages in one style, it is simpler to understand context and communicate changes.

There are ready-made formats. The easiest is Conventional Commits, a de-facto standard that integrates well with automated releases and changelogs. If your team prefers a minimal custom style, that is also fine. The critical point is consistency. Here are two practical templates.

Custom template:

```
{task_number} {personal_emoji} {message}

#1 :ice: init commit
```

Conventional Commits:

```
feat(auth): init commit
```

Pick one convention in the team, document it in the repo, and apply it consistently in every PR. This improves communication and speeds up collaboration.
