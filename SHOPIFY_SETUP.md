# Shopify Setup Guide

This guide will help you configure your Bike Yard store to work with Shopify.

## Prerequisites

1. A Shopify store (you can create one at [shopify.com](https://shopify.com))
2. Products added to your Shopify store
3. Node.js and npm installed on your system

## Step 1: Get Your Shopify Store Domain

1. Log in to your Shopify admin panel
2. Go to **Settings** → **Domains**
3. Copy your store domain (it should look like `your-store.myshopify.com`)

## Step 2: Generate a Storefront API Access Token

1. In your Shopify admin, go to **Settings** → **Apps and sales channels**
2. Click **Develop apps**
3. Click **Create an app**
4. Give your app a name (e.g., "Bike Yard Storefront")
5. Click **Create app**
6. In the app settings, click **Configure Admin API scopes**
7. Add the following scopes:
   - `read_products`
   - `read_collections`
   - `read_inventory`
   - `read_product_listings`
8. Click **Save**
9. Go to **API credentials** tab
10. Click **Install app**
11. Copy the **Storefront access token**

## Step 3: Create Environment File

1. Create a file called `.env.local` in your project root
2. Add the following content:

```env
# Shopify Configuration
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
```

Replace the placeholder values with your actual Shopify credentials.

## Step 4: Add Products to Your Shopify Store

1. In your Shopify admin, go to **Products** → **Add product**
2. Add your bike products with:
   - Product title
   - Description
   - Images
   - Price
   - Product type (e.g., "Mountain Bikes", "Road Bikes", etc.)
   - Tags (optional, use "new" for new products)
   - Variants (if needed)

## Step 5: Test Your Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/products` in your browser
3. You should see your Shopify products displayed

## Troubleshooting

### Error: "Failed to load products"

**Possible causes:**
- Incorrect store domain
- Invalid access token
- No products in your Shopify store
- Network connectivity issues

**Solutions:**
1. Double-check your `.env.local` file
2. Verify your access token is correct
3. Add some test products to your Shopify store
4. Check your internet connection

### Error: "Access denied"

**Possible causes:**
- Missing API scopes
- App not installed properly

**Solutions:**
1. Reinstall your app in Shopify
2. Make sure all required scopes are added
3. Generate a new access token

### Products not showing up

**Possible causes:**
- Products are not published
- Products are out of stock
- Products are in draft status

**Solutions:**
1. Make sure products are published in Shopify
2. Check product inventory levels
3. Verify product status is "Active"

## Advanced Configuration

### Custom Product Types

To use custom product types for filtering:

1. In Shopify, set product types to match your categories:
   - Mountain Bikes
   - Road Bikes
   - City Bikes
   - Electric Bikes
   - Accessories
   - Clothing
   - Tools

### Product Tags

Use tags to add special features:
- `new` - Shows "New" badge
- `featured` - Can be used for featured products
- `sale` - Can be used for sale items

### Collections

To organize products into collections:

1. In Shopify, go to **Products** → **Collections**
2. Create collections for different categories
3. Add products to collections
4. Use the collection functions in `lib/shopify.ts`

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your access tokens secure
- Regularly rotate your access tokens
- Use environment-specific tokens for development/production

## Support

If you're still having issues:

1. Check the browser console for error messages
2. Verify your Shopify store is active
3. Test your API credentials using Shopify's GraphiQL explorer
4. Contact Shopify support if needed

## Next Steps

Once your basic integration is working:

1. Add a shopping cart functionality
2. Implement checkout process
3. Add product detail pages
4. Set up inventory tracking
5. Add customer accounts
6. Implement search and filtering
