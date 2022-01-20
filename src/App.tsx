import React from 'react'

import { AuthAws } from '@src/components'
import Router from '@src/Router'

export default function App() {
  return (
      <AuthAws>
          <Router />
      </AuthAws>
  )

}
