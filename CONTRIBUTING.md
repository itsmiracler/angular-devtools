# Contributing to Batarangle

*:heart:First things first, thank you for contributing.:heart: We know
it takes a lot of time and effort. Everything in this document is meant
to provide you with as much insight as possible with regards to our
contribution standards. As you read it, it is important to remember that
these are just __guidelines__ and not rules. Please use your best
judgement when applying them.*

#### Table of Contents
[table-of-contents]: #table-of-contents

[I'm new. Anything I should know?](#im-new-anything-i-should-know)
  * [The manual](#the-manual)
  * [The textbook](#the-textbook)
  * [The chat room](#the-chat-room)

[Before you begin](#before-you-begin)
  * [Behaving yourself](#behaving-yourself)
  * [Styleguides](#styleguides)

[Getting started](#getting-started)
  * [Batarangle's most wanted](#help-wanted)
  * [Ask around](#ask-around)
    * [On issues](#on-issues)
    * [On chat](#on-chat)

[How do I actually contribute?](#how-to)
  * [Reporting a bug](#bug-report)
    * [Bug report template](#bug-report-template)
  * [Submitting a bug fix](#bug-fix)
  * [Making a feature request](#feature-request)
    * [Feature request template](#feature-request-template)
  * [Submitting a feature](#feature-pr)

[Odds and ends](#notes)
  * [Project Management](#pm)
    * [Labels](#labels)
    * [Milestones](#milestones)
  * [Meta](#meta)
  * [Contact](#contact)


## I'm new. Anything I should know?

:wave:Hello and welcome. The answer to that question is yes, a lot. To
help, here are few resources we thought you might find useful.

### The manual

* [README](./README.md)

The first thing you should do is _read_ the [README](./README.md).
We've put a lot of love and care in writing it and it should provide
you with the context you need for contributing to this project. Really,
you should read it...especially [the section where we list everything
that we know is wrong right now](./README.md#known-issues) or [that
part where we talk about our hopes and dreams for the future of the
project](./README.md#future-plans).

### The textbook

* [Developer README](./DEVELOPER.md)

If you want to get technical, we've got you covered too. We have [a
README just for developers](./DEVELOPER.md). Jumping into a new codebase
can be daunting so we've tried, as best as we could, to give you an
overview into the design of Batarangle and our intentions. It's a
glimpse into our heads, if you will. We're not yet sure that's a good
thing but we can assure you it's a useful one.

### The chat room

* [Slack](http://batarangle-slack.herokuapp.com/)

Okay, [manuals](./README.md) and [textbooks](./DEVELOPER.md) are great
and all but they make for poor conversation. Feel free to [join us on
Slack](http://batarangle-slack.herokuapp.com/)! Whether you're looking
for answers or just want to hang out and share funny pictures, there's a
channel for that. You can also ask us questions in private. We can't
wait to hear from you.

> Remember: No contribution is too small and no issue is too trivial. If
> you see a typo, we'd love to get a PR. We actually hate
> typos...they're the worst.


## Before you begin

:checkered_flag:Before you get started, it's worth looking over these
resources to make sure you're going the right thing. We'll update these
from time to time so make sure you regularly skim this section, even if
you've been contributing for a while.

### Behaving yourself

* [Code of Conduct](./CODE_OF_CONDUCT.md)

In the interest of making the Batarangle project a safe and friendly
place for people from diverse backgrounds, we'll be adhering to a [Code
of Conduct](./CODE_OF_CONDUCT). As a contributor, you'll be expected to
uphold this code as well as report unacceptable behaviour to
[batarangle@rangle.io](mailto:atom@github.com).

### Pull Requests

The core team will be monitoring for pull requests.

*Before* submitting a pull request, please make sure the following is done…

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, development workflow or aspects of the architecrure, update the corresponding documentation.
4. TypeScript linter is part of our build task, make sure your code lints before submitting your PRs.

## Bugs

### Where to Find Known Issues

We are using GitHub Issues for our public bugs. We will keep track on this and will to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

We are using [ZenHub](https://www.zenhub.io/) to manage our sprints and milestones. Add it to your GitHub account to see what is in the current sprint/milestone.

### Reporting New Issues

The best way to get a bug fixed is to provide a test case with either one of the example apps bundled in the repo, or by making your own Angular 2.0 application illustrating the reduced use case.

## How to Get in Touch

We are using a Slack for all of our communication. If you want to contribute or need help getting started, join us on Slack by filling in [this form](https://rangle.typeform.com/to/SQsWag).

## Coding Style

* Use semicolons;
* Commas last,
* 2 spaces for indentation (no tabs)
* Prefer `'` over `"`
* 80 character line length
* ...

More information can be found in `tslint.json` file of this repository.
TypeScript linter is part of our build task and will run in either `npm run build` or `npm start`

## License

[MIT](LICENSE)
