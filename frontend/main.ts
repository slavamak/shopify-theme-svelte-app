import './app.css'

import { mount } from 'svelte'

import App from './app.svelte'

const target = document.getElementById('hello-world')

if (!target) {
  throw new Error('Target element not found.')
}

mount(App, { target, props: { ...target.dataset } })
