import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './components/Footer';
import { HeroFlightNetworkBackground } from './components/HeroFlightNetworkBackground';
import { Navbar, PageId } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AboutPage } from './pages/AboutPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { DestinationsPage, DestinationRegionId } from './pages/DestinationsPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { StoriesPage } from './pages/StoriesPage';

const VALID_PAGES: PageId[] = [
  'home',
  'destinations',
  'services',
  'partners',
  'about',
  'stories',
  'contact',
  'admin',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [destinationPreselect, setDestinationPreselect] =
    useState<DestinationRegionId>('all');

  useEffect(() => {
    const handleHashChange = () => {
      const next = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(next)) {
        setCurrentPage(next);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    if (page === 'partners') {
      setCurrentPage('home');
      window.location.hash = 'partners';
      window.setTimeout(() => {
        const el = document.getElementById('partners');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return;
    }

    if (page !== 'destinations') {
      setDestinationPreselect('all');
    }
    setCurrentPage(page);
    window.location.hash = page;
    if (page === 'about') {
      window.setTimeout(() => {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destId: DestinationRegionId) => {
    setDestinationPreselect(destId);
  };

  const activeHomeView = currentPage === 'home' || currentPage === 'partners';

  return (
    <div className="relative isolate flex min-h-screen flex-col bg-transparent text-slate-100">
      <HeroFlightNetworkBackground />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 bg-transparent">
        <ErrorBoundary onReset={() => handleNavigate('home')}>
          {activeHomeView && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectDestination={handleSelectDestination}
            />
          )}
          {currentPage === 'services' && (
            <ServicesPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'destinations' && (
            <DestinationsPage
              key={destinationPreselect}
              initialRegion={destinationPreselect}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'stories' && (
            <StoriesPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'contact' && <ConsultationPage />}
          {currentPage === 'admin' && <AdminDashboardPage />}
        </ErrorBoundary>
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}
