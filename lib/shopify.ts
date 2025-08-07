import Client from 'shopify-buy'

// Initialize Shopify client
const client = Client.buildClient({
  domain: process.env.SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com',
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-access-token',
})

export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  images: {
    id: string
    src: string
    altText: string
  }[]
  variants: {
    id: string
    title: string
    price: string
    compareAtPrice?: string
    available: boolean
  }[]
  tags: string[]
  productType: string
  vendor: string
}

export interface ShopifyCollection {
  id: string
  title: string
  handle: string
  description: string
  image?: {
    id: string
    src: string
    altText: string
  }
  products: ShopifyProduct[]
}

// Fetch all products
export async function getAllProducts(): Promise<ShopifyProduct[]> {
  try {
    const products = await client.product.fetchAll()
    return products.map((product: any) => ({
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      images: product.images.map((image: any) => ({
        id: image.id,
        src: image.src,
        altText: image.altText || '',
      })),
      variants: product.variants.map((variant: any) => ({
        id: variant.id,
        title: variant.title,
        price: variant.price.amount,
        compareAtPrice: variant.compareAtPrice?.amount,
        available: variant.available,
      })),
      tags: product.tags,
      productType: product.productType,
      vendor: product.vendor,
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Fetch a single product by handle
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const products = await client.product.fetchByHandle(handle)
    if (!products) return null

    return {
      id: products.id,
      title: products.title,
      handle: products.handle,
      description: products.description,
      images: products.images.map((image: any) => ({
        id: image.id,
        src: image.src,
        altText: image.altText || '',
      })),
      variants: products.variants.map((variant: any) => ({
        id: variant.id,
        title: variant.title,
        price: variant.price.amount,
        compareAtPrice: variant.compareAtPrice?.amount,
        available: variant.available,
      })),
      tags: products.tags,
      productType: products.productType,
      vendor: products.vendor,
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

// Fetch collections
export async function getAllCollections(): Promise<ShopifyCollection[]> {
  try {
    const collections = await client.collection.fetchAll()
    return collections.map((collection: any) => ({
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
      description: collection.description,
      image: collection.image ? {
        id: collection.image.id,
        src: collection.image.src,
        altText: collection.image.altText || '',
      } : undefined,
      products: collection.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        images: product.images.map((image: any) => ({
          id: image.id,
          src: image.src,
          altText: image.altText || '',
        })),
        variants: product.variants.map((variant: any) => ({
          id: variant.id,
          title: variant.title,
          price: variant.price.amount,
          compareAtPrice: variant.compareAtPrice?.amount,
          available: variant.available,
        })),
        tags: product.tags,
        productType: product.productType,
        vendor: product.vendor,
      })),
    }))
  } catch (error) {
    console.error('Error fetching collections:', error)
    return []
  }
}

// Fetch a single collection by handle
export async function getCollectionByHandle(handle: string): Promise<ShopifyCollection | null> {
  try {
    const collection = await client.collection.fetchByHandle(handle)
    if (!collection) return null

    return {
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
      description: collection.description,
      image: collection.image ? {
        id: collection.image.id,
        src: collection.image.src,
        altText: collection.image.altText || '',
      } : undefined,
      products: collection.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        images: product.images.map((image: any) => ({
          id: image.id,
          src: image.src,
          altText: image.altText || '',
        })),
        variants: product.variants.map((variant: any) => ({
          id: variant.id,
          title: variant.title,
          price: variant.price.amount,
          compareAtPrice: variant.compareAtPrice?.amount,
          available: variant.available,
        })),
        tags: product.tags,
        productType: product.productType,
        vendor: product.vendor,
      })),
    }
  } catch (error) {
    console.error('Error fetching collection:', error)
    return null
  }
}

// Create checkout
export async function createCheckout(): Promise<any> {
  try {
    return await client.checkout.create()
  } catch (error) {
    console.error('Error creating checkout:', error)
    throw error
  }
}

// Add items to checkout
export async function addToCheckout(checkoutId: string, lineItems: any[]): Promise<any> {
  try {
    return await client.checkout.addLineItems(checkoutId, lineItems)
  } catch (error) {
    console.error('Error adding to checkout:', error)
    throw error
  }
}

export default client

