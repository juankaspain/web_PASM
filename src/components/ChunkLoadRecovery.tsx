'use client'

import { useEffect } from 'react'

const RECOVERY_FLAG = 'chunk-load-recovery-attempted'

function isChunkLoadFailure(error: unknown): boolean {
  const message =
    error instanceof Error
      ? `${error.name} ${error.message}`
      : typeof error === 'string'
        ? error
        : ''

  return (
    message.includes('ChunkLoadError') ||
    message.includes('Loading chunk') ||
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('/_next/static/chunks/')
  )
}

function isFailedNextAsset(event: Event): boolean {
  const target = event.target

  if (target instanceof HTMLScriptElement && target.src.includes('/_next/static/')) {
    return true
  }

  if (target instanceof HTMLLinkElement && target.href.includes('/_next/static/')) {
    return true
  }

  return false
}

function reloadWithFreshDocument() {
  if (sessionStorage.getItem(RECOVERY_FLAG) === '1') return

  sessionStorage.setItem(RECOVERY_FLAG, '1')
  const url = new URL(window.location.href)
  url.searchParams.set('v', Date.now().toString())
  window.location.replace(url.toString())
}

export default function ChunkLoadRecovery() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        isFailedNextAsset(event) ||
        isChunkLoadFailure(event.error) ||
        isChunkLoadFailure(event.message)
      ) {
        reloadWithFreshDocument()
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadFailure(event.reason)) {
        reloadWithFreshDocument()
      }
    }

    window.addEventListener('error', handleError, true)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError, true)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}
