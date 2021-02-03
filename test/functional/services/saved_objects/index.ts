/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { fetchSavedObjects } from './fetch_saved_objects';
import { importSavedObjects } from './import_saved_objects';

export const SavedObjectsProvider = () => ({
  fetch: fetchSavedObjects,
  import: importSavedObjects,
});
