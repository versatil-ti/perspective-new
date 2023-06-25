/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { getarg } from "./sh_perspective.mjs";
import sh from "./sh.mjs";
import * as url from "url";

const IS_DOCKER = process.env.PSP_DOCKER;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url)).slice(0, -1);

let cmd;
if (getarg("--fix")) {
    cmd = sh`black perspective bench setup.py --exclude tests`;
} else {
    cmd = sh`flake8 perspective bench setup.py`;
}

if (process.env.PSP_DOCKER) {
    cmd = sh`cd python/perspective`.sh(cmd);
    sh.docker(cmd).log().runSync();
} else {
    const python_path = sh.path`${__dirname}/../../python/perspective`;
    cmd.cwd(python_path).log().runSync();
}
