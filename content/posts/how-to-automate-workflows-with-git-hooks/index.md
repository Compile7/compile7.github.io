---
title: "How to Automate Workflows with Git Hooks"
date: "2022-10-31"
category: "Git"
coverImage: git-automate.png
tags:
  - "Git"
  - "Automation"
description: "As a developer, you mostly work with Git to collaborate and contribute. Learn more about how you can automate your workflows within Git scope with Git Hooks."
author: "Abhimanyu Singh Rathore"
prevLabel: Introduction to React Server Components
previous: what-are-react-server-components
nextLabel: How to Protect Ts.Ed API with JWT Authentication
next: how-to-protect-tsed-api-with-jwt-authentication
---

## What Are Hooks in Git?

Git Hooks are scripts triggered or executed based on particular git events.

You can use this during development cycles — e.g., commit, pull, fetch, etc.

## Where Can You Use Git Hooks?

You can use Git Hooks to automate:

- Verify linting errors before commit

- Notification to collaborators on push

- Create a pull request on push  

- Deploy code on the server on push

## Why Use Git Hooks For Automation?

- To implement CI/CD
- To save time for every redundant task

## Where to Maintain Git Hooks?

Hooks are placed in the '.git/hooks` subdirectory for a repository.

This subdirectory already has some example scripts to initiate.

**`Git hooks can be used for client-side and server-side automation.`**

There is no difference in the Client and Server hooks setup except for events; everything else is the same.

### Client-Side Hooks

Hooks that are present on your local machine are commonly used for pre-commit, pre-push, pre-rebase, pre-receive, etc.

You cannot use this type of Hook while checkout — you have to do it explicitly or use a third-party module if you want to use it in a repository.

### Server Side Hooks
 
Hooks that are present on server machines that can be used for pre-receive, update, post-receive, etc.

If any changes, a server push can be accepted or rejected based on certain conditions.

## How to Set Up Git Hooks?

The `.git/hooks` folder has the default scripts for Git Hooks:

```
    applypatch-msg.sample
    commit-msg.sample
    post-update.sample
    pre-applypatch.sample
    pre-commit.sample
    pre-push.sample
    pre-rebase.sample
    prepare-commit-msg.sample
    update.sample
```

For eg: `commit-msg.sample`

You can use this for COMMIT EVENT. The following example catches duplicate signed-off-by lines.

```
test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

Default scripts are written in PERL, but you can use any language as long as it can be executed.

Developers commonly use Shell, Ruby, Perl, and Python. 

## How to Add Your Own Custom Git Hooks?

- Make a copy of any example hook script file with the same name kept in the '.git/hooks` folder.
- Remove the `.sample` extension from the file name.
- Update the content/script as you need.
- Then your Hook file is ready to execute on a particular event.

## Conclusion

You have learned what Git Hooks are and how you can automate your workflows based on specific Git events.