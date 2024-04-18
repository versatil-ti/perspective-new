# Contributing

Thank you for your interest in contributing to Perspective!

Perspective is built on open source and hosted by the Fintech Open Source
Foundation (FINOS). We invite you to participate in our community by adding and
commenting on [issues](https://github.com/finos/perspective/issues) (e.g., bug
reports; new feature suggestions) or contributing code enhancements through a
pull request.

## Guidelines

When submitting or commenting on an Issue, please respect the following
guidelines. Github Issues are Perspective's project record of bugs and feature
development, e.g. for publishing a release's Changelog, and as such it is
important to keep them informative and on-topic. As such, please understand that
we may remove or reclassify comments or Issues which violate the guidelines.

-   Be respectful and civil!
-   Use the provided Issue templates. If the templates don't fit your need,
    please open a [discussion](https://github.com/finos/perspective/discussions)
    instead.
-   Don't ask for issues to be assigned to you if you're a first-time
    contributor. If you need help picking an issue to work on, please open a
    [discussion](https://github.com/finos/perspective/discussions).
-   Don't add comments asking when a feature will be delivered or a reported
    issue fixed. The Issue will link any in-progress draft PRs or Milestones (if
    known).

When submitting Pull Request (PR), please respect the following coding
guidelines:

-   Sign commits (e.g. with `-s`) in accordance with the DCO policy detailed below, _before_ opening a PR.
-   Please make sure PRs include:

    -   Tests asserting behavior of any new or modified features.
    -   Docs for any new or modified public APIs.
    -   [Benchmarks](https://perspective.finos.org/docs/development/#benchmark)
        for any C++ changes.

-   Keep PRs clean, simple and to-the-point:
    -   Squash "WIP", "Reverting ..", etc., commits.
    -   No merge commits (`git merge master`), prefer `rebase` to resolve
        conflicts with the `master` branch.
    -   Try to organize commits as functional components (as opposed to
        timeline-of-development).

Please note that non substantive changes, large changes without prior discussion, etc, are not accepted and pull requests may be closed.

## DCO

FINOS projects requires contributions to repositories such as Perspective to abide by the [Developer Certificate of Origin](https://developercertificate.org).
For more background information, please see the [FINOS Open Source Readiness Knowledgebase](https://osr.finos.org/docs/bok/artifacts/clas-and-dcos).

The [Developer Certificate of Origin](https://developercertificate.org) certifies that developers are authorized to make their contribution, either on their own behalf or on behalf of their employer.

In practice, this means that all commits to Perspective must be signed (e.g. with `-s`/`-S`). Pull requests with any unsigned commits, or where the signer does not match the commit author, can not be merged by Perspective's committers. We encourage you to check that you have a signed all your commits before making a pull request. A [DCO enforcement bot](https://github.com/apps/dco) will automatically scan and flag any pull requests that violate this policy.

For any questions, comments, concerns, or for more information, please reach out to
[help@finos.org](mailto:help@finos.org) and the foundation team will help get it
sorted out for you.

If you have any general questions about contributing to Perspective, please feel
free to open an issue on [github](https://github.com/finos/perspective/issues/new),
or email [help@finos.org](mailto:finos.org).
