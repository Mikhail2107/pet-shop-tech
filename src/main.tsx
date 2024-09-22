import { createRoot } from 'react-dom/client'
import App from './widget/App/App.tsx'
import { Provider } from 'react-redux'
import { store } from './entities/product/productApi/store.js'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)
