import { $ecomConfig } from '@ecomplus/utils'

export default dataLayer => {
  const $products = document.querySelectorAll('[data-sku]')
  if ($products.length) {
    const skus = []
    for (let i = 0; i < $products.length; i++) {
      const $product = $products[i]
      const { sku } = $product.dataset
      if (skus.indexOf(sku) === -1) {
        skus.push(sku)
      }
    }

    dataLayer.push({
      ecommerce: {
        currencyCode: $ecomConfig.get('currency') || 'BRL',
        impressions: skus.map(id => ({ id }))
      }
    })
  }
}
