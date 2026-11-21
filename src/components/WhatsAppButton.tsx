import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  onFallbackContact?: () => void;
}

export function WhatsAppButton({ onFallbackContact }: WhatsAppButtonProps) {
  const phoneDigits = '8801717149453';
  const text = encodeURIComponent(
    'Hello Global Education Expert, I would like to inquire about study abroad admissions and consultation slots.'
  );
  const href = `https://wa.me/${phoneDigits}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Global Education Expert on WhatsApp"
      onClick={() => {
        if (onFallbackContact) {
          // Optional analytics hook placeholder
        }
      }}
      className="fixed right-5 bottom-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg transition-transform duration-150 hover:scale-105 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
