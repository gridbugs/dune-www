---
title: Install Dune
---

# Quickstart

Linux (x86_64) and macOS users can install the latest pre-compiled Dune
executable by running its [install script](https://github.com/ocaml-dune/dune-bin-install/):

<div class="code-with-copy-button">
```
curl -fsSL https://dune.build/install.sh | sh
```
</div>

This will run an interactive script that by default installs Dune for the current user.
Dune has [package management](https://dune.readthedocs.io/en/latest/explanation/package-management.html)
features built into it so it may not be necessary to install opam at all.

# Install in Docker

To install a specific version of Dune (3.20.0 in this example) system-wide in a
Dockerfile, pass some arguments to the install script to install under /usr and
to make the installation non-interactive:

<div class="code-with-copy-button">
```dockerfile
RUN curl -fsSL https://dune.build/install.sh | sh -s 3.20.0 --install-root /usr --no-update-shell-config
```
</div>

# Install via opam

Alternatively it's possible to install dune is via the [opam package manager](https://opam.ocaml.org/):

```bash
$ opam install dune
```

# Install from source
You can also build it manually with:

```bash
$ make release
$ make install
```
