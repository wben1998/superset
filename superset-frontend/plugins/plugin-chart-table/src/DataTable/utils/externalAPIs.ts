/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type { SetDataMaskHook } from '@superset-ui/core';
import type { TableOwnState } from '../types/react-table';

/**
 * Keep the API small & version-agnostic:
 * - No functional updater (not supported in your build)
 * - Only touch ownState; caller decides what to merge in
 */

export const updateExternalFormData = (
  setDataMask: SetDataMaskHook = () => {},
  pageNumber: number,
  pageSize: number,
) => {
  setDataMask({
    // leave extraFormData/filterState untouched (explore reducer merges per key)
    ownState: {
      currentPage: pageNumber,
      pageSize,
    },
  });
};

export const updateTableOwnState = (
  setDataMask: SetDataMaskHook = () => {},
  modifiedOwnState: TableOwnState,
) => {
  setDataMask({
    // only update ownState; caller already merged any prior state (e.g. serverPaginationData)
    ownState: modifiedOwnState,
  });
};
