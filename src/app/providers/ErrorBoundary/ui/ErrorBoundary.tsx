import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError/ui/PageError'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error): any {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render () {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback={<PageLoader/>}>
                <PageError/>
            </Suspense>
    }

    return children
  }
}

export default ErrorBoundary
