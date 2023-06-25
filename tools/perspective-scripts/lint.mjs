/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import sh from "./sh.mjs";

sh`
prettier --check \
    "examples/**/*.js" \
    "examples/**/*.tsx" \
    "tools/perspective-scripts/*.mjs" \
    "rust/**/*.ts" \
    "rust/**/*.js" \
    "packages/**/*.js" \
    "packages/**/*.ts" \
    "cpp/**/*.js" \
`.runSync();

await import("./lint_python.mjs");
