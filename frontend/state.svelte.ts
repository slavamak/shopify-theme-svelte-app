interface IGlobaState {
  count: number
  customer: {
    name: string | null
  }
}

export const globalState = $state<IGlobaState>({
  count: 0,
  customer: {
    name: null,
  },
})
