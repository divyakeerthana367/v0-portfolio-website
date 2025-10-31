"use client"

import { useState } from "react"
import type React from "react"

export default function Contact() {
  const [formState, setFormState] = useState({
    email: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormState({ email: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Transmission Channel
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Ready to collaborate or discuss opportunities</p>

        <div className="p-8 rounded-xl bg-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 font-mono">
          {/* Terminal header */}
          <div className="flex gap-2 mb-6 pb-4 border-b border-primary/20">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-4">transmission_protocol_v1.0</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                &gt; EMAIL_ADDRESS:
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                &gt; MESSAGE_CONTENT:
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Type your message here..."
                rows={5}
                className="w-full px-4 py-2 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none font-mono text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 glow-primary font-mono text-sm"
            >
              {sent ? "▸ SIGNAL TRANSMITTED ✓" : "▸ TRANSMIT_MESSAGE()"}
            </button>
          </form>

          {/* Direct contact links */}
          <div className="mt-12 pt-8 border-t border-primary/20 space-y-4">
            <h3 className="text-primary font-semibold text-sm">&gt; DIRECT_CHANNELS:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-secondary">$</span>
                <span className="text-muted-foreground">Email:</span>
                <a
                  href="mailto:divya.keerthana367@gmail.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  divya.keerthana367@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">$</span>
                <span className="text-muted-foreground">GitHub:</span>
                <a
                  href="https://github.com/divyakeerthana367"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  /divyakeerthana367
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">$</span>
                <span className="text-muted-foreground">LinkedIn:</span>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>

          {/* Resume download */}
          <div className="mt-8 pt-8 border-t border-primary/20">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-mono"
            >
              <span>&gt;</span>
              <span>DOWNLOAD_MISSION_DOSSIER.pdf</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
