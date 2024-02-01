---
title: 'A useful shell command for killing processes by port'
published: 2021-02-19
tags: ['productivity']
slug: useful-function-killing-process-port
cover_image: cover.jpg
description: Heres a cool command
---

Hey everyone, I want to share with you a commandline function that helps quickly kill processes by their port. Some of the servers I start up love to stay running in the background after I closed them. So I often get errors that say something like:

```bash
error: [Errno 48] Address already in use
```

or 

```
Failed to listen on localhost:8000 (reason: Address already in use)
```


In order to


To use this, just add it to `~/.bashrc` or `~/.zshrc` file:

```bash
# Kills a process running on a specified tcp port
killport() {
  echo "Killing process on port: $1";
  kill -9 $(lsof -t -i:$1 -sTCP:LISTEN)
}
```