# Commit Message Formats

## Default

<pre>
<b><a href="#types">&lt;type&gt;</a></b></font>(<b><a href="#scopes">&lt;optional scope&gt;</a></b>): <b><a href="#description">&lt;description&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#body">&lt;optional body&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#footer">&lt;optional footer&gt;</a></b>
</pre>

## Initial Commit

`chore: init`

## Types

-   API relevant changes
    -   `feat` Commits, that adds or remove a new feature
    -   `fix` Commits, that fixes a bug
-   `refactor` Commits, that rewrite/restructure your code, however does not change any API behaviour
    -   `perf` Commits are special `refactor` commits, that improve performance
-   `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
-   `test` Commits, that add missing tests or correcting existing tests
-   `docs` Commits, that affect documentation only
-   `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
-   `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
-   `chore` Miscellaneous commits e.g. modifying `.gitignore`

### Scopes

The `scope` provides additional contextual information.

-   Is an **optional** part of the format
-   Allowed Scopes depends on the specific project
-   Don't use issue identifiers as scopes

### Breaking Changes Indicator

Breaking changes should be indicated by an `!` before the `:` in the subject line e.g. `feat(api)!: remove status endpoint`

-   Is an **optional** part of the format

### Description

The `description` contains a concise description of the change.

-   Is a **mandatory** part of the format
-   Use the imperative, present tense: "change" not "changed" nor "changes"
    -   Think of `This commit will...` or `This commit should...`
-   Don't capitalize the first letter
-   No dot (`.`) at the end

### Body

The `body` should include the motivation for the change and contrast this with previous behavior.

-   Is an **optional** part of the format
-   Use the imperative, present tense: "change" not "changed" nor "changes"
-   This is the place to mention issue identifiers and their relations

### Footer

The `footer` should contain any information about **Breaking Changes** and is also the place to **reference Issues** that this commit refers to.

-   Is an **optional** part of the format
-   **optionally** reference an issue by its id.
-   **Breaking Changes** should start with the word `BREAKING CHANGES:` followed by space or two newlines. The rest of the commit message is then used for this.

# SUBMODULES

To add a GitHub repo as a submodule in an existing project, we can run

```bash
git submodule <GITHUB REPO TO BECOME SUBMODULE> <NAME OF THE FOLDER ON THE ACTUAL REPO>
```

Your files will assume this configuration:

```
main-repo
    |-- .git (the hidden folder of your main repo)
    |-- folder-1
    |-- folder-2
    ...
    |-- folder-as-submodule
        |-- .git (the hidden folder of the repo that now is a submodule
                  for main)
        |-- submodule-folder-1
        |-- submodule-folder-2
        ...
```

If the submodule folder came as empty folder, your version of GIT don't perform the update of submodules automatically. To do by hand, use the following git command:

```bash
git submodule update --init --recursive
```

## Observation

The commands that modify GitHub repositories like, `add`, `commit`, `push`, `pull`, `branch`, and others, will just modify the repo that you were be at the moment that you used the git commands. For example, a `commit` made in the `cd ~/main-repo` will occur in the `main-repo` repository. Similarly, if you create a branch with the `branch` command in `cd ~/main-repo/folder-as-submodule`, Git will create a branch in the original repo that the submodule came.
