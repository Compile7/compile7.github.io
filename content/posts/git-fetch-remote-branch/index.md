---
title: "How to Fetch a Remote Branch Using Git"
date: "2022-11-16"
coverImage: git-fetch-remote-branch.png
tags:
  - "Git"
description: "The Git remote branch is a way to access the independent work of a co-worker. Find out how to fetch a remote branch using git in this article."
author: "Versha Gupta"
prevLabel: How to Install Multiple Node.js Versions On the Same Machine
previous: run-multiple-nodejs-versions-on-the-same-machine
nextLabel: How to Write Test Cases for Registration and Login Page
next: test-cases-for-registration-and-login-page
---

As a developer, you commonly work with Git. And you need to understand how [to work with Git](https://www.loginradius.com/blog/engineering/github-api/) and the different possibilities of working with repositories and code in Git (such as managing the size of your reports, etc.).

Along those lines, testing out a remote branch is one thing you'll be doing at least regularly, so we put together a short guide to cover the ins and outs of dealing with small branches in Git.

## Git: How to Fetch a Remote Branch

When working in a team, you will need to fetch the branch from a remote repository using Git.

You simply need to do the following:

```
git fetch <remote-repository>
```

This fetch command will fetch all remote branches and store all references/objects. Once all branches are loaded successfully, you can checkout to the branch you are interested in, giving you a local working copy.

Now you can inspect and play with code.

Run this command

```
git checkout -b <local-branch> <remote-repository>/<remote-branch>
```

or

```
git branch <local-branch> <remote-repository>/<remote-branch>
```

If you have a single remote repository, then you can omit all arguments. You just need to run `git fetch`, which will retrieve all branches and updates, and after that, run `git checkout <branch>`, which will create a local copy of the branch because all branches are already loaded in your system.

> Note: `git pull = git fetch + git merge`

When you run a pull command, it will fetch changes from remote branches and merge them into your local changes. But if you want to get the latest changes and don't want to merge into the local branch, you need to run the `git fetch` command.

The fetch command will retrieve all changes from the remote branch that do not exist in the local branch. FETCH_HEAD ref track can be used for fetched changes from remote branches.

There is a good option, `--track`, in this command through which you can track the local branch with the remote one. It helps pull and push the changes.

Run this command

```
git checkout --track <remote-repository>/<remote-branch>
```

The above command will create a local branch with the same name as the remote branch. But if you want to create a different local branch, include the `-b` option to create a new local branch.

```
git checkout --track -b <local-branch> <remote-repo>/<remote-branch>
```

To verify what tracking branches you have set up, you can use the `-vv` option with `git branch`. This will list out your local branches with more information on what each branch is tracking and if your local branch is behind or ahead.

```
git branch -vv
```

### Conclusion

Git is a way to track code for different modifications. It stores all the various models in a unique database. Git enables several developers to work concurrently on the same principle. You will sometimes need to access the independent job, or "branch," of a coworker. This is made possible by the git remote branch operation.

If you want to learn more about Git, have a look at the following guides:

- a quick guide on [how to use git cherry pick](https://blog.loginradius.com/engineering/git-cherry-pick/), and
- how you can [automate your Git workflows with Hooks](https://compile7.org/decompile/how-to-automate-workflows-with-git-hooks/)
