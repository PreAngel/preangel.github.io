import { expect, test } from 'vitest'

import { prNumberToTitle } from './pr-number-to-title.js'

test.skip('pr number to title', async () => {
  const ORG = 'bupt'
  const REPO = 'ai-ml.club'
  const PR = 141
  const EXPECTED_TITLE = 'fix S2E13'

  const title = await prNumberToTitle(ORG, REPO, PR)
  expect(title).toBe(EXPECTED_TITLE)
})
