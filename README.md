# Astro + React + TypeScript + pxl-ui

This is a template for a new Astro project with React, TypeScript, and pxl-ui.

## Adding components

To add components to your app, run the following command:

```bash
pnpm dlx shadcn@latest add pxl-ui/registry/button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them in an `.astro` file:

```astro
---
import { Button } from "@/components/ui/pxl/button"
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro App</title>
  </head>
  <body>
    <div class="grid h-screen place-items-center content-center">
      <Button>Button</Button>
    </div>
  </body>
</html>
```
