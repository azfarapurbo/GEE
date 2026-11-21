import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    message: '',
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || 'An unexpected error occurred.',
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application ErrorBoundary caught:', error, info);
  }

  private handleReset = () => {
    this.setState({ hasError: false, message: '' });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      let friendlyMessage =
        'Something went wrong while loading this view. Please refresh or return to the home page.';
      if (this.state.message.includes('Missing or insufficient permissions')) {
        friendlyMessage =
          'Access to this record requires verified administrator authorization.';
      }

      return (
        <div className="mx-auto my-16 max-w-xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="font-display text-xl font-semibold text-[#0F213E]">
            Unable to Load Requested View
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{friendlyMessage}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={this.handleReset}
              className="rounded-lg bg-[#0F213E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#19335D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F213E]"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
