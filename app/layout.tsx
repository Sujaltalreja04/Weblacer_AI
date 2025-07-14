import type { Metadata } from 'next'
import './globals.css'
import Chatbot from './components/Chatbot';

export const metadata: Metadata = {
  title: 'Weblancer - Enterprise Digital Innovation Company | Fortune 500 Technology Solutions',
  description: 'Weblancer - Leading digital innovation company delivering enterprise-grade technology solutions. Transforming businesses worldwide through cutting-edge web development, mobile applications, cloud infrastructure, and AI/ML solutions.',
  keywords: 'enterprise software development, digital transformation, cloud infrastructure, mobile applications, AI solutions, web development company, technology consulting, Fortune 500 solutions',
  authors: [{ name: 'Weblancer Corporation' }],
  openGraph: {
    title: 'Weblancer - Enterprise Digital Innovation Company',
    description: 'Leading technology company delivering enterprise-grade solutions for Fortune 500 companies worldwide. Specializing in digital transformation, cloud infrastructure, and cutting-edge development.',
    type: 'website',
    images: ['/weblancer-og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblancer - Enterprise Digital Innovation',
    description: 'Transforming businesses through cutting-edge technology solutions and enterprise-grade development.',
  },
  icons: {
    icon: 'https://i.postimg.cc/QN1pzSGJ/Whats-App-Image-2025-06-26-at-17-33-59-03c6c590.jpg',
  },
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Weblancer Corporation",
              "description": "Leading digital innovation company delivering enterprise-grade technology solutions",
              "url": "https://weblancer.com",
              "logo": "https://weblancer.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/weblancer",
                "https://github.com/weblancer",
                "https://twitter.com/weblancer"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-WEBLANCER",
                "contactType": "Enterprise Sales",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="bg-black text-white">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}