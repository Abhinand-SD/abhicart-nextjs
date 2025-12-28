# Next.js Full Stack E-Commerce Website

A **full stack e-commerce website** built using **Next.js**, **MongoDB**, **Tailwind CSS**, **Clerk** for authentication, and **Inngest** for background event handling. This project demonstrates a complete e-commerce workflow including user authentication, product management, cart, and order handling.

---

## **Tech Stack**

- **Frontend & Backend**: Next.js (App Router)
- **Database**: MongoDB
- **Authentication**: Clerk
- **Background Event Handling**: Inngest
- **Styling**: Tailwind CSS
- **Image Handling**: Cloudinary (optional)
- **Version Control**: Git & GitHub

---

## **Features**

### **User Side**
- User registration & login (Clerk authentication)
- OTP-based sign-up
- Social login (Google, Facebook, etc.)
- Browse products with images, ratings, and price
- Product detail view with:
  - Zoomable images
  - Breadcrumb navigation
  - Stock status and error handling for “Sold Out” or “Unavailable”
  - Highlights & specifications
- Cart management
- Checkout & order creation
- Order history

### **Admin Side**
- Admin sign-in
- User management (list, block/unblock users)
- Category management (add, edit, delete/soft delete categories)
- Product management (add, edit, delete/soft delete products)
- Products can have multiple images (cropped & resized before upload)
- Order management

### **Background Tasks**
- Inngest functions to sync user creation/updation from Clerk
- Event-driven architecture for order handling and notifications

---

## **Installation**

### **1. Clone the repository**
```bash
git clone https://github.com/YourUsername/nextjs-ecommerce.git
cd nextjs-ecommerce
2. Install dependencies
bash
Copy code
npm install
3. Setup environment variables
Create a .env.local file in the root directory and add:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
4. Run the development server
bash
Copy code
npm run dev
Open http://localhost:3000 to view the project.

Project Structure
bash
Copy code
src/
├── app/                # Next.js App Router
│   ├── api/            # API routes
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
├── config/             # Configuration files (Inngest, DB)
├── models/             # MongoDB Schemas
├── components/         # React components
├── context/            # App context
├── styles/             # Tailwind CSS files
Usage
Users can register, login, browse products, add to cart, and checkout.

Admins can manage users, categories, and products.

Inngest handles background tasks like syncing user data from Clerk automatically.

Dependencies
next

react

react-dom

mongoose

clerk/nextjs

inngest

tailwindcss

axios

cloudinary

sweetalert2

Contributing
Fork the repository

Create your feature branch:

bash
Copy code
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy code
git commit -m "Add some feature"
Push to the branch:

bash
Copy code
git push origin feature/your-feature-name
Open a Pull Request

License
This project is licensed under the MIT License.

Live Demo
Add your deployed Vercel or Netlify URL here (optional).

yaml
Copy code

---

I can also **create a ready-to-use `.md` file** with badges (Vercel, Node version, etc.) and screenshots for a **more professional portfolio-ready README**.  

Do you want me to do that next?
