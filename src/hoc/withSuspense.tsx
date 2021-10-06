import React from "react"
import {Preload} from "../components/common/preload/Preload";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<Preload />} >
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}
