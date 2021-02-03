/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { join } from 'path';
import { REPO_ROOT } from '@kbn/utils';
// @ts-ignore
import shell from 'shelljs';

export const finalDirAndFile = (dest: string) => (filePath = 'exported.ndjson') => {
  const destDir = join(REPO_ROOT, dest);
  const destFilePath = join(destDir, filePath);
  return [destDir, destFilePath];
};

export const mkDir = (x: string) => shell.mkdir('-p', x);

// @ts-ignore
export const ndjsonToObj = (x: string) => x.split('\n').map(JSON.parse);

export const CACHE_PATH = 'test/functional/fixtures/exported_saved_objects';

export const mark = '[SavedObjsSvc]';
