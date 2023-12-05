# Setting Up Development Environment for Designable

## Create Codespaces from Designable

1. Begin by creating a Codespace from the Designable repository.

## Configure Dev Container

2. Create a `devcontainer.json` file in the root directory with the following content:

<small>
The devcontainer.json file is usually located in the .devcontainer directory of your repository. Alternatively, you can locate it directly in the root of the repository, in which case the file name must begin with a period: .devcontainer.json.

If there is no file you can use shortcut command + shift + p and type > Add Dev Container Configuration Files.
Create a configuration file and change inside of it.
</small>

```json
{
  "image": "mcr.microsoft.com/devcontainers/typescript-node:0.204.11-bullseye",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "nodeGypDependencies": true,
      "version": "11",
      "nvmVersion": "latest"
    }
  }
}
```

## Update Playground Template

3. Navigate to `formily/antd/playground/template.ejs`.

4. Add the following meta tag inside the `<head>` section:

```html
<meta charset="utf-8" />
```

5. Search and replace the following script tag:

```html
<script src="https://unpkg.com/antd/dist/antd-with-locales.min.js"></script>
```

With:

```html
<script src="https://unpkg.com/antd@4.15.2/dist/antd-with-locales.min.js"></script>
```

## Verify Node and Yarn Versions

6. Run the following commands to verify Node and Yarn versions:

```bash
# Check Node version (Expecting result: v11.15.0)
node -v

# Check Yarn installation
yarn -v
```

## Install Required Modules

7. Install the required modules by running:

```bash
yarn install --ignore-engines
```

## Build and Run Playground

8. Build the playground by executing:

```bash
yarn workspace @designable/formily-antd build:playground
```

9. Run the playground:

```bash
yarn workspace @designable/formily-antd start
```

10. Wait until the following message appears:

```bash
ℹ ｢wdm｣: Compiled successfully.
```

11. Verify the result Via going through development link : http://127.0.0.1:3000
