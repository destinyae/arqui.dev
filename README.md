# arqui.dev Monorepo

> This repository contains the source code for all branding systems developed for arqui.dev, using the monorepo practice.

## Projects

- [storybook](./storybook/): Storybook with [neo-brutalism UI](https://neo-brutalism-ui-library.vercel.app/)
- [CMS](./cms/): We use Sanity for our CMS. This sub-repo contains the code and deployment of our Sanity studio.
- [web](./web/): The webapp and landing-page.

## Working with this repo

> This repository has its history since the first version of the Resilience Space landing page. As of 07/06/2024, we follow the guidelines in this section to work with the repo.

- The default language used will be English (EN-US), used in documentation and commits. The site was in both Portuguese (PT-BR) and English (EN-US).
- We follow [Semantic Versioning (SEMVER)](https://semver.org/) for versioning.
- We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages.
- We work with [Trunk Based Development](https://trunkbaseddevelopment.com/).

### Commit Messages:

> Our commits only have the title, which is divided into type and subject. We do not use the body and footer of the commit.

#### The Type

The type is included in the title and can be one of these types:

- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Formatting, missing semicolons, etc; no code change
- refactor: Refactoring production code
- test: Adding tests, refactoring tests; no production code change
- chore: Updating build tasks, package manager configs, etc; no production code change

#### The Subject

Subjects should be no more than 50 characters, start with a capital letter, and not end with a period. Use the imperative mood to describe what a commit does, rather than what it did. For example, use `update`; not `updated` or `updates`.

Example: `docs: Update monorepo README to define commit standards`

### Useful Commands

## References

- [Udacity Commit Style Guide](https://udacity.github.io/git-styleguide/)
