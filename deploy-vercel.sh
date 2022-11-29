#!/bin/sh

# Install deno
curl -fsSL https://deno.land/x/install/install.sh | sh


# Prod Build
/vercel/.deno/bin/deno task build

# Run build
/vercel/.deno/bin/deno run start
