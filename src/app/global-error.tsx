'use client'
import { ErrorMessage } from "@/components/ErrorMessage"

 // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <ErrorMessage codeError='501' titleError={error.name}>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Clique aqui para tentar novamente</button>
    </ErrorMessage>
  )
}
