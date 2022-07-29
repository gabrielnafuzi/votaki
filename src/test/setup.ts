import '@testing-library/jest-dom'
import { setup } from 'twind'
import { vi } from 'vitest'

import twindConfig from '@/twind.config'

window.HTMLElement.prototype.scrollIntoView = vi.fn()

setup(twindConfig)
