import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const App = React.lazy(() =>
    import("./App")
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Suspense fallback={<p>Mithi's Bare Minimum Hexapod Robot Simulator...</p>}>
            <App />
        </Suspense>
    </React.StrictMode>
)
