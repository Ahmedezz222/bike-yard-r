# Bike Yard Shopify Theme Setup Guide

This guide will help you set up the Bike Yard Shopify theme on your Shopify store.

## Prerequisites

- A Shopify store (Online Store 2.0 compatible)
- Shopify CLI (optional, for development)
- Basic knowledge of Shopify theme development

## Installation

### Method 1: Manual Upload

1. **Download the theme files**
   - Download all the theme files from this repository
   - Ensure the folder structure is maintained

2. **Upload to Shopify**
   - Go to your Shopify admin panel
   - Navigate to **Online Store > Themes**
   - Click **Add theme > Upload theme**
   - Select the theme folder and upload

3. **Activate the theme**
   - Once uploaded, click **Actions > Publish** to make it your live theme

### Method 2: Using Shopify CLI

1. **Install Shopify CLI**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Login to Shopify**
   ```bash
   shopify auth login
   ```

3. **Create a new theme**
   ```bash
   shopify theme init bike-yard-theme
   ```

4. **Copy theme files**
   - Copy all files from this repository to the new theme directory

5. **Push to Shopify**
   ```bash
   shopify theme push
   ```

## Theme Structure

```
bike-yard-theme/
├── assets/
│   ├── theme.css
│   └── theme.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── header.liquid
│   ├── hero.liquid
│   ├── featured-products.liquid
│   ├── about.liquid
│   ├── testimonials.liquid
│   └── footer.liquid
├── templates/
│   ├── index.liquid
│   ├── product.liquid
│   └── collection.liquid
└── README.md
```

## Configuration

### 1. Theme Settings

1. Go to **Online Store > Themes**
2. Click **Customize** on your active theme
3. Configure the following settings:

#### Colors
- Primary Color: `#2563eb` (Blue)
- Accent Color: `#f59e0b` (Orange)
- Text Color: `#111827` (Dark Gray)
- Background Color: `#ffffff` (White)

#### Typography
- Heading Font: Inter (Google Fonts)
- Body Font: Inter (Google Fonts)

#### Social Media
- Add your social media URLs (Facebook, Twitter, Instagram, YouTube)

#### Contact Information
- Store Address
- Phone Number
- Email Address

### 2. Navigation Setup

1. Go to **Online Store > Navigation**
2. Create/edit the **Main menu** with the following links:
   - Home (`/`)
   - Products (`/collections/all`)
   - About (`/pages/about`)
   - Contact (`/pages/contact`)

3. Create/edit the **Footer menu** with additional links:
   - Privacy Policy (`/pages/privacy-policy`)
   - Terms of Service (`/pages/terms-of-service`)
   - Shipping Info (`/pages/shipping`)
   - Returns (`/pages/returns`)

### 3. Collections Setup

1. Go to **Products > Collections**
2. Create collections for your bike categories:
   - Mountain Bikes
   - Road Bikes
   - Electric Bikes
   - Accessories
   - etc.

3. Assign products to appropriate collections

### 4. Pages Setup

Create the following pages in **Online Store > Pages**:

#### About Page
- Title: "About Bike Yard"
- Content: Add your company story and information

#### Contact Page
- Title: "Contact Us"
- Content: Add contact form and information

#### Privacy Policy
- Title: "Privacy Policy"
- Content: Add your privacy policy

#### Terms of Service
- Title: "Terms of Service"
- Content: Add your terms of service

#### Shipping Info
- Title: "Shipping Information"
- Content: Add shipping details and policies

#### Returns
- Title: "Returns & Exchanges"
- Content: Add return policy information

### 5. Homepage Sections

The homepage includes the following sections that can be customized:

1. **Hero Section**
   - Background image
   - Title and subtitle
   - Call-to-action buttons

2. **Featured Products**
   - Select a collection to display
   - Number of products to show
   - Section title and subtitle

3. **About Section**
   - Company description
   - Feature highlights
   - About image

4. **Testimonials**
   - Customer reviews and ratings
   - Author information and photos

## Customization

### Adding Custom CSS

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Navigate to `assets/theme.css`
4. Add your custom styles at the end of the file

### Adding Custom JavaScript

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Navigate to `assets/theme.js`
4. Add your custom JavaScript functions

### Modifying Sections

1. Go to **Online Store > Themes**
2. Click **Actions > Edit code**
3. Navigate to `sections/`
4. Edit the desired section file

## Features

### Responsive Design
- Mobile-first approach
- Responsive grid system
- Touch-friendly navigation

### Performance Optimized
- Lazy loading images
- Optimized CSS and JavaScript
- Fast loading times

### SEO Friendly
- Semantic HTML structure
- Meta tags support
- Schema markup ready

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### E-commerce Features
- Product filtering and sorting
- Shopping cart functionality
- Wishlist support
- Product image galleries

## Troubleshooting

### Common Issues

1. **Theme not loading properly**
   - Check file permissions
   - Verify all files are uploaded
   - Clear browser cache

2. **Images not displaying**
   - Check image URLs
   - Verify image file formats
   - Ensure images are uploaded to Shopify

3. **Styles not applying**
   - Check CSS file path
   - Verify CSS syntax
   - Clear theme cache

4. **JavaScript errors**
   - Check browser console for errors
   - Verify JavaScript syntax
   - Test in different browsers

### Getting Help

If you encounter issues:

1. Check the Shopify documentation
2. Review the theme code for syntax errors
3. Test in different browsers
4. Contact Shopify support if needed

## Updates and Maintenance

### Regular Updates
- Keep Shopify apps updated
- Monitor theme performance
- Update product information regularly

### Backup
- Always backup your theme before making changes
- Use version control for development
- Test changes in a development theme first

## Support

For additional support:
- Review Shopify's theme documentation
- Check the Shopify community forums
- Contact the theme developer

## License

This theme is provided as-is for educational and commercial use. Please ensure you comply with Shopify's terms of service and any applicable licenses for third-party assets used in the theme.
