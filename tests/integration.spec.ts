import fs from 'fs'
import path from 'path'

import { createRequire } from 'node:module'
import probeImageSize from 'probe-image-size'
import { expect, test } from 'vitest'
const require = createRequire(import.meta.url)
const isPR = require('is-pr') as () => boolean

import { prNumberToTitle } from '../src/pr-number-to-title.js'
async function listImageFiles(root: string): Promise<string[]> {
  const files: string[] = []
  const queue: string[] = [root]

  while (queue.length > 0) {
    const currentDir = queue.pop() as string
    const entries = await fs.promises.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        queue.push(fullPath)
      } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

test.skip('pull request title', async () => {
  if (!isPR()) {
    return
  }

  const prNum = Number.parseInt(process.env['TRAVIS_PULL_REQUEST'] as string, 10)
  const prTitle = await prNumberToTitle('bupt', 'ai-ml.club', prNum)

  if (/(oral|poster)/i.test(prTitle)) {
    expect(prTitle).toMatch(/^(🗣|📰)/)
  }
})

test('image size should not more than 1MB', async () => {
  const MAX_WIDTH = 1920         // HD
  const MAX_SIZE  = 1024 * 1024 * 2  // 2MB

  const SKIP_REG = [
    /docs\/assets\/ventures\/preangel\//,
    /docs\/assets\/2015\/12-five-years\//,
    /docs\/assets\/peoples\/huan-li\//,
  ]

  const fileList = await listImageFiles('docs/assets')
  expect(fileList.length).toBeGreaterThan(0)

  for (const file of fileList) {
    if (SKIP_REG.some(reg => reg.test(file))) {
      continue
    }

    const dim = await probeImageSize(fs.createReadStream(file))
    const size = fs.statSync(file).size

    if (dim.width > MAX_WIDTH || size > MAX_SIZE) {
      throw new Error(`${file} exceed the max limit: width: ${dim.width}, size: ${size}. use "./scripts/fit-image.sh <FILE>" to adjust it fit.`)
    }
  }
})
