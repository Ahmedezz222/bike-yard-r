# Bike Yard - Premium Cycling Store

A modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS, designed specifically for a premium cycling store. This project replicates the design and functionality of the Bike Yard website with enhanced features and Shopify integration.

## 🚀 Features

### Design & User Experience
- **Modern, Responsive Design** - Beautiful UI that works perfectly on all devices
- **Smooth Animations** - Framer Motion animations for engaging user interactions
- **Gradient Backgrounds** - Eye-catching hero sections with gradient overlays
- **Hover Effects** - Interactive product cards with smooth hover animations
- **Professional Typography** - Custom font combinations (Inter + Poppins)

### E-commerce Functionality
- **Product Catalog** - Complete product grid with filtering and search
- **Category Filtering** - Filter products by category (Mountain Bikes, Road Bikes, etc.)
- **Search Functionality** - Real-time search across product names and categories
- **Product Ratings** - Star ratings and review counts for each product
- **Shopping Cart** - Cart functionality with item count display
- **Product Badges** - New, Sale, and Popular product indicators

### Shopify Integration
- **Shopify Storefront API** - Full integration with Shopify's headless commerce
- **Product Management** - Fetch and display products from Shopify
- **Collection Support** - Organize products by collections
- **Checkout Integration** - Seamless checkout process
- **Inventory Management** - Real-time stock updates

### Additional Features
- **Cafe Menu** - Dedicated cafe section with food and beverage offerings
- **Customer Testimonials** - Social proof with customer reviews
- **About Section** - Company story and mission
- **Contact Information** - Complete contact details and location
- **Newsletter Signup** - Email subscription functionality
- **Social Media Integration** - Links to social platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **E-commerce**: Shopify Storefront API
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bike-yard-shopify.git
   cd bike-yard-shopify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Shopify Setup

1. **Create a Shopify Store**
   - Sign up for a Shopify account
   - Set up your store with products and collections

2. **Enable Storefront API**
   - Go to Settings > Apps and sales channels
   - Install the Storefront API app
   - Generate a Storefront access token

3. **Configure Environment Variables**
   - Add your store domain and access token to `.env.local`

### Customization

#### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // ... more shades
  },
  accent: {
    500: '#f59e0b',
    600: '#d97706',
    // ... more shades
  }
}
```

#### Products
Update product data in `components/ProductGrid.tsx` or integrate with Shopify API:
```typescript
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Mountain Bike Pro X1',
    price: 1299.99,
    // ... more product details
  }
]
```

## 📱 Pages & Components

### Pages
- **Home** (`app/page.tsx`) - Landing page with hero, about, products, and testimonials
- **Products** (`app/products/page.tsx`) - Complete product catalog with filtering
- **Cafe** (`app/cafe/page.tsx`) - Cafe menu and information

### Components
- **Header** (`components/Header.tsx`) - Navigation with logo, menu, and cart
- **Hero** (`components/Hero.tsx`) - Animated hero section with call-to-action
- **AboutSection** (`components/AboutSection.tsx`) - Company story and features
- **ProductGrid** (`components/ProductGrid.tsx`) - Product display with cards
- **Testimonials** (`components/Testimonials.tsx`) - Customer reviews
- **Footer** (`components/Footer.tsx`) - Site footer with links and contact info

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0ea5e9` - Main brand color
- **Accent Orange**: `#f59e0b` - Call-to-action and highlights
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Poppins (Bold, Semi-bold)
- **Body Text**: Inter (Regular, Medium)

### Components
- **Buttons**: Primary, Secondary, and Accent variants
- **Cards**: Product cards with hover effects
- **Forms**: Input fields with focus states
- **Navigation**: Responsive header with mobile menu

## 🔍 SEO & Performance

- **Meta Tags**: Complete SEO meta tags for all pages
- **Image Optimization**: Next.js Image component for optimal loading
- **Performance**: Optimized animations and lazy loading
- **Accessibility**: ARIA labels and semantic HTML
- **Mobile-First**: Responsive design for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Bike Yard](https://bike-yard.vercel.app/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support and questions:
- Email: info@bikeyard.com
- Phone: +1 234 567 8900
- Website: [bike-yard.vercel.app](https://bike-yard.vercel.app/)

---

**Built with ❤️ for the cycling community**

