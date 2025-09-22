'use client'

import { ServerComponent } from "../ServerComponent"
export function ClientComponent() {
    console.log('client component')
    return (
        <>
            <ServerComponent />
        </>
    )
}
