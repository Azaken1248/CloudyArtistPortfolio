
import { describe, it, expect } from 'vitest'
import { resolveIcon, isUrl, safeHref } from './iconRegistry'

describe('resolveIcon', () => {
  it('resolves a known icon name', () => {
    // Phosphor icons are forwardRef components, i.e. objects.
    expect(resolveIcon('House')).toBeDefined()
  })
  it('returns undefined for an unknown or empty name', () => {
    expect(resolveIcon('NotAnIcon')).toBeUndefined()
    expect(resolveIcon(undefined)).toBeUndefined()
  })
})

describe('isUrl', () => {
  it('accepts https and data image URLs', () => {
    expect(isUrl('https://cdn.example.com/a.webp')).toBe(true)
    expect(isUrl('data:image/png;base64,AAA')).toBe(true)
  })
  it('rejects plain http, which is blocked as mixed content on an https site', () => {
    expect(isUrl('http://cdn.example.com/a.webp')).toBe(false)
  })
  it('rejects a bare icon name and empty input', () => {
    expect(isUrl('House')).toBe(false)
    expect(isUrl(undefined)).toBe(false)
  })
})

describe('safeHref', () => {
  it('passes through in-page anchors and root-relative paths', () => {
    expect(safeHref('#gallery')).toBe('#gallery')
    expect(safeHref('/terms')).toBe('/terms')
  })
  it('allows http, https and mailto', () => {
    expect(safeHref('https://example.com')).toBe('https://example.com')
    expect(safeHref('mailto:a@b.com')).toBe('mailto:a@b.com')
  })
  it('neutralises a javascript: URL saved through the CMS', () => {
    expect(safeHref('javascript:alert(1)')).toBe('#')
    expect(safeHref('JavaScript:alert(1)')).toBe('#')
  })
  it('neutralises data: and other unexpected schemes', () => {
    expect(safeHref('data:text/html,<script>alert(1)</script>')).toBe('#')
  })
  it('falls back to # for empty input', () => {
    expect(safeHref(undefined)).toBe('#')
  })
})
