"use client"

import { useEffect } from "react"

export default function IndexRedirect() {
  useEffect(() => {
    // Redirect relative to current base (works locally and on GitHub Pages)
    window.location.replace("landing/")
  }, [])

  return (
    <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui, Arial" }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Redirecting…</h1>
      <p>
        If you are not redirected automatically, <a href="landing/">click here to go to the landing page</a>.
      </p>
    </div>
  )
}
