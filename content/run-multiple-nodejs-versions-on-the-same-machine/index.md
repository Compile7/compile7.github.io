---
title: "How to Install Multiple Node.js Versions On the Same Machine"
date: "2022-11-21"
coverImage: install-multiple-node-versions-locally.png
tags:
  - "Node.js"
  - "nvm"
description: "In this blog, you'll learn how to run multiple Node.js versions in your local machine with Node Version Manager (nvm)."
author: "Mayank Agarwal"
prevLabel: Your Guide to HTTP Authorization Header
previous: authorization-request-headers-explained
nextLabel: How to Fetch a Remote Branch Using Git
next: git-fetch-remote-branch
---

While working on multiple Node.js projects, you might need to run different projects with different Node.js versions. Or, for legacy Node.js projects, you might require an older version, and the others might need a new version. And to check out the new features of Node.js, you need to install the latest version.

On the same machine, you can only install one version of Node.js, so it's painful to uninstall and install another version per your project requirements.

You can use Node Version Manager (nvm) to overcome this problem. It allows installing multiple versions on the same machine and facilitates switching between the required Node.js version.


## Installing nvm

### Windows

Download the latest version of nvm from here: https://github.com/coreybutler/nvm-windows/releases/latest

Download `nvm-setup.zip` and install it on Windows.

Verify the nvm installation as follows:

```
nvm version
```

### MacOs/Linux

Using curl:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Using Wget:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Verify the nvm installation as follows:

```
command -v nvm
```

## nvm Usage

### Get a List of All the Available Node.js Versions

```
nvm ls available //Windows

nvm ls-remote //MacOs/Linux
```

### Install the latest Node.js version

```
nvm install node
```
### Install the Latest LTS Release

```
nvm install --lts
```

### Install a Specific Node.js version

You can install multiple Node.js versions, as follows.

```
nvm install 8.11.1 // to install the 8.11.1 version

nvm install 12.13.1 //to install the 12.13.1 version
```

### UnInstall Multiple Node.js Versions

```
nvm uninstall 8.11.1
```

## How to Switch the Node.js Version with nvm

### Get a List of Currently Installed Versions

```
nvm list  //for windows

nvm ls //for MacOs/Linux
```

![nvm list](./images/nvm-list.png)

### Switch Between Currently Installed Node.js Versions

```
nvm use 8.11.1  //To enable 8.11.1

nvm use 12.13.1 //To enable 12.13.1
```

![nvm use](./images/nvm-use.png)

### Use Custom Alias for Installed Node Versions

You can create an alias per project basis or a group of projects (using the same Node version).

```
nvm alias awesome-project 12.13.1
```

After creating an alias, switch to the alias:

```
nvm use awesome-project
```

Remove the alias:

```
nvm unalias awesome-project
```

### Run Specific Node.js Versions Without Switching

```
nvm run 8.11.1 app.js
```
Or you can use the following command:

```
nvm exec 8.11.1 node app.js
```

### Other nvm Commands

To use installed Node versions in your system:

```
nvm use system
```

To completely remove nvm from your system:

```
nvm unload 
```

## Conclusion
Node Version Manager (nvm) is a great tool that helps switch among multiple Node.js versions while working on projects that require different versions. It saves development time by rapidly changing to the required Node.js version.
