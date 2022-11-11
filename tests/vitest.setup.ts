import type { Component } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { cleanup, render as testingRender } from '@testing-library/vue'
import type { RenderOptions } from '@testing-library/vue'

import generatedRoutes from 'virtual:generated-pages'
import '@testing-library/jest-dom'

import { mockApiToken, provideMock } from '@/mocks'

const routes = [...generatedRoutes, { ...generatedRoutes[0], path: '/' }]
const router = createRouter({ history: createWebHistory(), routes })

HTMLCanvasElement.prototype.getContext = vi.fn().mockImplementation(() => ({ fillRect: () => { } }))

beforeEach(() => {
  mockApiToken()
})

afterEach(() => {
  cleanup()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

export const render = (component: Component, opts?: RenderOptions) => {
  return testingRender(component,
    {
      global:
       {
         ...opts?.global,
         plugins: [...(opts?.global?.plugins || []), router],
         provide: {
           ...opts?.global?.provide,
           ...provideMock,
         },
       },
      ...opts,
    },
  )
}
