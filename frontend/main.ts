import './styles.css'

import { mount } from 'svelte'

import App from './App.svelte'

const target = document.getElementById('app')

if (!target) {
  throw new Error('Target element not found.')
}

mount(App, { target, props: { ...target.dataset } })
