@fujica/cli
=================

Catching fish in fujica.


Author: Hexc, Lianx


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@fujica/cli.svg)](https://npmjs.org/package/@fujica/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@fujica/cli.svg)](https://npmjs.org/package/@fujica/cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @fujica/cli
$ fuji COMMAND
running command...
$ fuji (--version)
@fujica/cli/0.0.3 win32-x64 node-v18.20.2
$ fuji --help [COMMAND]
USAGE
  $ fuji COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @fujica/cli
$ fuji COMMAND
running command...
$ fuji (--version)
@fujica/cli/0.0.2 win32-x64 node-v18.20.2
$ fuji --help [COMMAND]
USAGE
  $ fuji COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @fujica/cli
$ fuji COMMAND
running command...
$ fuji (--version)
@fujica/cli/0.0.1 win32-x64 node-v18.20.2
$ fuji --help [COMMAND]
USAGE
  $ fuji COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @fujica/cli
$ fuji COMMAND
running command...
$ fuji (--version)
@fujica/cli/0.0.0 win32-x64 node-v18.20.2
$ fuji --help [COMMAND]
USAGE
  $ fuji COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fuji api [API]`](#fuji-api-api)
* [`fuji hello PERSON`](#fuji-hello-person)
* [`fuji hello world`](#fuji-hello-world)
* [`fuji help [COMMAND]`](#fuji-help-command)
* [`fuji plugins`](#fuji-plugins)
* [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin)
* [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin)
* [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin)
* [`fuji plugins link PATH`](#fuji-plugins-link-path)
* [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin)
* [`fuji plugins reset`](#fuji-plugins-reset)
* [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin)
* [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin)
* [`fuji plugins update`](#fuji-plugins-update)

## `fuji api [API]`

Convert API to code

```
USAGE
  $ fuji api [API] [-f] [-l <value>] [-p <value>] [-s <value>]

ARGUMENTS
  API  API URL

FLAGS
  -f, --force
  -l, --lang=<value>       [default: js] choose api language(js/ts)
  -p, --platform=<value>   [default: mobile] get api from which platform(manage/mobile)
  -s, --codeStyle=<value>  [default: mobile] choose api function code style

DESCRIPTION
  Convert API to code

EXAMPLES
  $ fuji api
```

_See code: [src/commands/api/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.3/src/commands/api/index.ts)_

## `fuji hello PERSON`

Say hello

```
USAGE
  $ fuji hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ fuji hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.3/src/commands/hello/index.ts)_

## `fuji hello world`

Say hello world

```
USAGE
  $ fuji hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fuji hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/fujicaFE/cli/blob/v0.0.3/src/commands/hello/world.ts)_

## `fuji help [COMMAND]`

Display help for fuji.

```
USAGE
  $ fuji help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fuji.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `fuji plugins`

List installed plugins.

```
USAGE
  $ fuji plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fuji plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `fuji plugins add PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins add myplugin

  Install a plugin from a github url.

    $ fuji plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins add someuser/someplugin
```

## `fuji plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fuji plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fuji plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `fuji plugins install PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins install myplugin

  Install a plugin from a github url.

    $ fuji plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `fuji plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ fuji plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fuji plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `fuji plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins remove myplugin
```

## `fuji plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ fuji plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `fuji plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `fuji plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins unlink myplugin
```

## `fuji plugins update`

Update installed plugins.

```
USAGE
  $ fuji plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`fuji api [API]`](#fuji-api-api)
* [`fuji hello PERSON`](#fuji-hello-person)
* [`fuji hello world`](#fuji-hello-world)
* [`fuji help [COMMAND]`](#fuji-help-command)
* [`fuji plugins`](#fuji-plugins)
* [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin)
* [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin)
* [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin)
* [`fuji plugins link PATH`](#fuji-plugins-link-path)
* [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin)
* [`fuji plugins reset`](#fuji-plugins-reset)
* [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin)
* [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin)
* [`fuji plugins update`](#fuji-plugins-update)

## `fuji api [API]`

Convert API to code

```
USAGE
  $ fuji api [API] [-f] [-l <value>] [-p <value>]

ARGUMENTS
  API  API URL

FLAGS
  -f, --force
  -l, --lang=<value>      [default: js] choose api language(js/ts)
  -p, --platform=<value>  [default: mobile] get api from which platform(manage/mobile)

DESCRIPTION
  Convert API to code

EXAMPLES
  $ fuji api
```

_See code: [src/commands/api/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.2/src/commands/api/index.ts)_

## `fuji hello PERSON`

Say hello

```
USAGE
  $ fuji hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ fuji hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.2/src/commands/hello/index.ts)_

## `fuji hello world`

Say hello world

```
USAGE
  $ fuji hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fuji hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/fujicaFE/cli/blob/v0.0.2/src/commands/hello/world.ts)_

## `fuji help [COMMAND]`

Display help for fuji.

```
USAGE
  $ fuji help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fuji.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `fuji plugins`

List installed plugins.

```
USAGE
  $ fuji plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fuji plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `fuji plugins add PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins add myplugin

  Install a plugin from a github url.

    $ fuji plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins add someuser/someplugin
```

## `fuji plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fuji plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fuji plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `fuji plugins install PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins install myplugin

  Install a plugin from a github url.

    $ fuji plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `fuji plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ fuji plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fuji plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `fuji plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins remove myplugin
```

## `fuji plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ fuji plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `fuji plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `fuji plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins unlink myplugin
```

## `fuji plugins update`

Update installed plugins.

```
USAGE
  $ fuji plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
- [@fujica/cli](#fujicacli)
- [Usage](#usage)
- [Commands](#commands)
  - [`fuji api [API]`](#fuji-api-api)
  - [`fuji hello PERSON`](#fuji-hello-person)
  - [`fuji hello world`](#fuji-hello-world)
  - [`fuji help [COMMAND]`](#fuji-help-command)
  - [`fuji plugins`](#fuji-plugins)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin)
  - [`fuji plugins reset`](#fuji-plugins-reset)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin)
  - [`fuji plugins update`](#fuji-plugins-update)
  - [`fuji api [API]`](#fuji-api-api-1)
  - [`fuji hello PERSON`](#fuji-hello-person-1)
  - [`fuji hello world`](#fuji-hello-world-1)
  - [`fuji help [COMMAND]`](#fuji-help-command-1)
  - [`fuji plugins`](#fuji-plugins-1)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin-1)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin-1)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin-1)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path-1)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin-1)
  - [`fuji plugins reset`](#fuji-plugins-reset-1)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin-1)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin-1)
  - [`fuji plugins update`](#fuji-plugins-update-1)
  - [`fuji api [API]`](#fuji-api-api-2)
  - [`fuji hello PERSON`](#fuji-hello-person-2)
  - [`fuji hello world`](#fuji-hello-world-2)
  - [`fuji help [COMMAND]`](#fuji-help-command-2)
  - [`fuji plugins`](#fuji-plugins-2)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin-2)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin-2)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin-2)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path-2)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin-2)
  - [`fuji plugins reset`](#fuji-plugins-reset-2)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin-2)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin-2)
  - [`fuji plugins update`](#fuji-plugins-update-2)

## `fuji api [API]`

Convert API to code

```
USAGE
  $ fuji api [API] [-f] [-l <value>] [-p <value>]

ARGUMENTS
  API  API URL

FLAGS
  -f, --force
  -l, --lang=<value>      [default: js] choose api language(js/ts)
  -p, --platform=<value>  [default: mobile] get api from which platform(manage/mobile)

DESCRIPTION
  Convert API to code

EXAMPLES
  $ fuji api
```

_See code: [src/commands/api/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.1/src/commands/api/index.ts)_

## `fuji hello PERSON`

Say hello

```
USAGE
  $ fuji hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ fuji hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.1/src/commands/hello/index.ts)_

## `fuji hello world`

Say hello world

```
USAGE
  $ fuji hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fuji hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/fujicaFE/cli/blob/v0.0.1/src/commands/hello/world.ts)_

## `fuji help [COMMAND]`

Display help for fuji.

```
USAGE
  $ fuji help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fuji.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `fuji plugins`

List installed plugins.

```
USAGE
  $ fuji plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fuji plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `fuji plugins add PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins add myplugin

  Install a plugin from a github url.

    $ fuji plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins add someuser/someplugin
```

## `fuji plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fuji plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fuji plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `fuji plugins install PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins install myplugin

  Install a plugin from a github url.

    $ fuji plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `fuji plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ fuji plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fuji plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `fuji plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins remove myplugin
```

## `fuji plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ fuji plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `fuji plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `fuji plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins unlink myplugin
```

## `fuji plugins update`

Update installed plugins.

```
USAGE
  $ fuji plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
- [@fujica/cli](#fujicacli)
- [Usage](#usage)
- [Commands](#commands)
  - [`fuji api [API]`](#fuji-api-api)
  - [`fuji hello PERSON`](#fuji-hello-person)
  - [`fuji hello world`](#fuji-hello-world)
  - [`fuji help [COMMAND]`](#fuji-help-command)
  - [`fuji plugins`](#fuji-plugins)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin)
  - [`fuji plugins reset`](#fuji-plugins-reset)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin)
  - [`fuji plugins update`](#fuji-plugins-update)
  - [`fuji api [API]`](#fuji-api-api-1)
  - [`fuji hello PERSON`](#fuji-hello-person-1)
  - [`fuji hello world`](#fuji-hello-world-1)
  - [`fuji help [COMMAND]`](#fuji-help-command-1)
  - [`fuji plugins`](#fuji-plugins-1)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin-1)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin-1)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin-1)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path-1)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin-1)
  - [`fuji plugins reset`](#fuji-plugins-reset-1)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin-1)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin-1)
  - [`fuji plugins update`](#fuji-plugins-update-1)
  - [`fuji api [API]`](#fuji-api-api-2)
  - [`fuji hello PERSON`](#fuji-hello-person-2)
  - [`fuji hello world`](#fuji-hello-world-2)
  - [`fuji help [COMMAND]`](#fuji-help-command-2)
  - [`fuji plugins`](#fuji-plugins-2)
  - [`fuji plugins add PLUGIN`](#fuji-plugins-add-plugin-2)
  - [`fuji plugins:inspect PLUGIN...`](#fuji-pluginsinspect-plugin-2)
  - [`fuji plugins install PLUGIN`](#fuji-plugins-install-plugin-2)
  - [`fuji plugins link PATH`](#fuji-plugins-link-path-2)
  - [`fuji plugins remove [PLUGIN]`](#fuji-plugins-remove-plugin-2)
  - [`fuji plugins reset`](#fuji-plugins-reset-2)
  - [`fuji plugins uninstall [PLUGIN]`](#fuji-plugins-uninstall-plugin-2)
  - [`fuji plugins unlink [PLUGIN]`](#fuji-plugins-unlink-plugin-2)
  - [`fuji plugins update`](#fuji-plugins-update-2)

## `fuji api [API]`

Convert API to code

```
USAGE
  $ fuji api [API] [-f] [-p <value>]

ARGUMENTS
  API  API URL

FLAGS
  -f, --force
  -l, --lang=<value>      [default: js] choose api language(js/ts)
  -p, --platform=<value>  [default: mobile] get api from which platform(manage/mobile)

DESCRIPTION
  Convert API to code

EXAMPLES
  $ fuji api
```

_See code: [src/commands/api/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.0/src/commands/api/index.ts)_

## `fuji hello PERSON`

Say hello

```
USAGE
  $ fuji hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ fuji hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/fujicaFE/cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `fuji hello world`

Say hello world

```
USAGE
  $ fuji hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fuji hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/fujicaFE/cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `fuji help [COMMAND]`

Display help for fuji.

```
USAGE
  $ fuji help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fuji.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `fuji plugins`

List installed plugins.

```
USAGE
  $ fuji plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fuji plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `fuji plugins add PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins add myplugin

  Install a plugin from a github url.

    $ fuji plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins add someuser/someplugin
```

## `fuji plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fuji plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fuji plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `fuji plugins install PLUGIN`

Installs a plugin into fuji.

```
USAGE
  $ fuji plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into fuji.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the FUJI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the FUJI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ fuji plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ fuji plugins install myplugin

  Install a plugin from a github url.

    $ fuji plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ fuji plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `fuji plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ fuji plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fuji plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `fuji plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins remove myplugin
```

## `fuji plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ fuji plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `fuji plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `fuji plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ fuji plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fuji plugins unlink
  $ fuji plugins remove

EXAMPLES
  $ fuji plugins unlink myplugin
```

## `fuji plugins update`

Update installed plugins.

```
USAGE
  $ fuji plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
