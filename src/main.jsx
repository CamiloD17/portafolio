import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import english from './translations/english/english.json'
import spanish from './translations/spanish/spanish.json'

i18next.init({
  interpolation: {escapeValue: false},
  lng:
  (window.localStorage.getItem("language")
    ? window.localStorage.getItem("language")
    : "es"
  )
  ,
  resources: {
    es:{
      global: spanish
    },
    en:{
      global: english,
    },
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
