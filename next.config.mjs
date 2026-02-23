// @ts-nocheck
// This file was auto-created and injected by v0.
// DO NOT MODIFY THIS FILE DIRECTLY.
// EDIT THE USER CONFIG IN ./next.user-config.mjs INSTEAD.

import userConfigImport from './next.user-config.mjs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default async function v0NextConfig(phase, { defaultConfig }) {
  const userConfig = typeof userConfigImport === 'function'
    ? await userConfigImport(phase, { defaultConfig })
    : userConfigImport

  return {
    ...userConfig,
    distDir: '.next',
    devIndicators: false,
    logging: {
      fetches: {
        fullUrl: true,
        hmrRefreshes: true,
      },
    },
    turbopack: {
      ...userConfig.turbopack,
      root: __dirname,
    },
    experimental: {
      ...userConfig.experimental,
      transitionIndicator: true,
      browserDebugInfoInTerminal: {
        depthLimit: 100,
        edgeLimit: 100,
        showSourceLocation: true,
      },
      serverActions: {
        ...userConfig.experimental?.serverActions,
        allowedOrigins: [
          ...(userConfig.experimental?.serverActions?.allowedOrigins || []),
          '*.vusercontent.net',
        ]
      },
    },
    allowedDevOrigins: [
      ...(userConfig.allowedDevOrigins || []),
      '*.vusercontent.net',
      '*.dev-vm.vusercontent.net',
    ],
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
  }
}
