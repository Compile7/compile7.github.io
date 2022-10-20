---
title: "How to Automate Workflows with Git Hooks"
date: "2022-10-03T16:51:00.000Z"
category: "Git"
coverImage: git-automate.png
tags:
  - "Git"
  - "Automation"
  - "Hooks"
description: "Let's understand how git hooks are effective and the easiest way to automate actions in git scope."
author: "Abhimanyu Singh Rathore"
---


## **What Are Hooks in Git?**

Git Hooks are scripts that are triggered or executed based on particular git events.

we can use this during development cycles, eg: commit, pull, fetch etc


## **Git Hooks Can Be Used for**

It can be used for automate git hooks

- Verify linting errors before commit

- Notification to collaborators on push

- Create pull request on push  

- Deploy code on server on push

## **Why Git Hooks is good for Automation**

- To implement CI/CD
- To save time for every redundant task

## **Where to keep Git Hooks?**

Hooks are placed in the '.git/hooks` subdirectory for a repository.

This subdirectory already has some example scripts to initiate.




**`Git hooks can be used for client-side and server-side automation.`**

There is no difference in Client and Server hooks setup except events rest is same.

### **Client Side**

Hooks that are present on developer machines that can be used for pre commit, pre push, pre rebase, pre recieve, checkout etc.
hooks do not create while checkout, that has to do explicitly or can use any third party module if wanted to use in a repository.


### **Server Side**
 
Hooks that are present on server machines that can be used for Pre-receive,update, Post-receive etc.
if any changes push to server can be accepted or rejected based on certain conditions.

## **Setting Up Git Hooks**

`.git/hooks` folder has default script for git hooks:

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

for eg: `commit-msg.sample`
```

we can use this for COMMIT EVENT This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

Default script written in PERL but still you can use any language (as long as it is allowed to be executed)
Mostly people use  Shell, Ruby, Perl and Python. 


## **Get start**

- Make a copy of any example hook script file with the same name kept in the '.git/hooks` folder.
- Remove the .sample extension from file name.
- Update the content as needed.
- Then your hook file is ready to execute on a particular event.