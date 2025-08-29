import { lazy, Suspense } from 'react';
import ldJson from './Idjson'; // Explicitly include .js extension

// Lazy-loaded components
const HeroSection = lazy(() => import('./HeroSection'));
const ComparisonTable = lazy(() => import('./ComparisonTable'));
const FeatureShowcase = lazy(() => import('./FeatureShowcase'));
const FeaturesGrid = lazy(() => import('./FeaturesGrid'));

const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-white to-primary-light">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-orange"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <>
        <title>Datablize - AI Powered Document Intelligence for Modern Enterprises</title>
        <meta name="description" content="Transform your document chaos into a streamlined, intelligent workflow with Datablize's AI-powered document management platform." />
        <meta name="keywords" content="AI document management, intelligent workflow, document automation, enterprise document solution" />
        <link rel="preload" href="/images/hero-image-optimized-600.webp" as="image" />
        <script type="application/ld+json">{ldJson}</script>
      </>
      <Suspense fallback={<LoadingPlaceholder />}>
        <HeroSection />
        <Suspense fallback={<LoadingPlaceholder />}>
          <ComparisonTable />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder />}>
          <FeatureShowcase />
        </Suspense>
        <Suspense fallback={<LoadingPlaceholder />}>
          <FeaturesGrid />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default Home;