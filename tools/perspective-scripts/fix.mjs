/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import sh from "./sh.mjs";

const cmd = sh`prettier --write "examples/**/*.js" "examples/**/*.tsx" "tools/perspective-scripts/*.mjs" "rust/**/*.ts" "rust/**/*.js" "packages/**/*.js" "packages/**/*.ts" "cpp/**/*.js"`;
cmd.sh`prettier docs/docs/*.md --prose-wrap=always --write`;
cmd.sh`prettier **/*.yml --write`;
cmd.sh`prettier --write **/less/*.less`;
cmd.sh`prettier --write **/html/*.html -r`;
cmd.sh`prettier --write packages/**/package.json rust/**/package.json examples/**/package.json docs/package.json`;

cmd.sh`
prettier --check --fix \
    "examples/**/*.js" \
    "examples/**/*.tsx" \
    "tools/perspective-scripts/*.mjs" \
    "rust/**/*.ts" \
    "rust/**/*.js" \
    "packages/**/*.js" \
    "packages/**/*.ts" \
    "cpp/**/*.js" \
`;

// cmd.sh`node tools/perspective-scripts/fix_cpp.mjs`;

cmd.runSync();
