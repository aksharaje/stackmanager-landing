"use client";

import { useState } from "react";

// Pre-filled email template
const emailSubject = encodeURIComponent("Early Access — Stackmanager");
const emailBody = encodeURIComponent(`Hi Stackmanager team,

I'd love early access to Stackmanager.

Role:

What I'm building:

Stack:

Biggest pain:

Thanks,
[Your Name]`);

const mailtoLink = `mailto:info@stackmanager.ai?subject=${emailSubject}&body=${emailBody}`;

export default function Home() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [pain, setPain] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your email service integration (e.g., Resend, Mailchimp)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Waitlist signup:", { email, role, pain });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl sm:text-3xl font-bold">Stackmanager</span>
            <span className="text-2xl sm:text-3xl text-gray-500">.ai</span>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            COMING SOON
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Know when your app
            <br />
            <span className="text-gray-400">is ready to ship</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Stackmanager scans your codebase and infrastructure to tell you
            what&apos;s broken, what&apos;s risky, and what to fix—before your users find out.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Join the Waitlist
            </a>
            <a
              href={mailtoLink}
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-900 hover:border-gray-500 transition"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Built for
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Solo Founders</h3>
              <p className="text-gray-400 text-sm">
                Ship with confidence without a QA team
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Vibe Coders</h3>
              <p className="text-gray-400 text-sm">
                Using Cursor, Copilot, or AI-assisted development
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2">Small Teams</h3>
              <p className="text-gray-400 text-sm">
                Move fast without breaking things
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            What Stackmanager does
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ship Readiness Score</h3>
              <p className="text-gray-400 text-sm">
                One number that tells you if your app is ready to deploy. No more guessing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Catch Issues Early</h3>
              <p className="text-gray-400 text-sm">
                Spot misconfigs, missing env vars, broken dependencies before they hit production.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">One-Click Fixes</h3>
              <p className="text-gray-400 text-sm">
                Don&apos;t just find problems—fix them instantly with AI-powered suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Your stack health at a glance
          </h2>
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-8">
            {/* Mock window header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <span className="ml-4 text-gray-500 text-sm">stackmanager.ai/dashboard</span>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-black border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">78</div>
                <div className="text-xs sm:text-sm text-gray-400">Code Health</div>
                <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "78%" }} />
                </div>
              </div>
              <div className="bg-black border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">84</div>
                <div className="text-xs sm:text-sm text-gray-400">Data Health</div>
                <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "84%" }} />
                </div>
              </div>
              <div className="bg-black border border-gray-800 rounded-xl p-4 sm:p-6 text-center relative">
                <span className="absolute -top-2 -right-2 text-lg">👑</span>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">91</div>
                <div className="text-xs sm:text-sm text-gray-400">Ship Readiness</div>
                <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: "91%" }} />
                </div>
              </div>
            </div>

            {/* Status line */}
            <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-400">Ready to ship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Join the Waitlist
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Be the first to know when we launch.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition text-white placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Your role (optional)"
                  disabled={loading}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition text-white placeholder-gray-500"
                />
              </div>
              <div>
                <select
                  value={pain}
                  onChange={(e) => setPain(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition text-white appearance-none cursor-pointer"
                >
                  <option value="" className="text-gray-500">Biggest pain point (optional)</option>
                  <option value="deployment-anxiety">Deployment anxiety</option>
                  <option value="catching-bugs">Catching bugs before production</option>
                  <option value="config-management">Config/env management</option>
                  <option value="dependency-hell">Dependency issues</option>
                  <option value="no-qa-team">No QA team</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          ) : (
            <div className="bg-black border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
              <p className="text-gray-400">
                We&apos;ll reach out when we&apos;re ready to launch.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            A note from the founder
          </h2>
          <div className="text-gray-400 space-y-4 text-left sm:text-center">
            <p>
              I&apos;ve shipped broken code to production more times than I&apos;d like to admit.
              Missing env vars, forgotten migrations, misconfigured services—the usual suspects.
            </p>
            <p>
              Stackmanager is the tool I wish I had. One command to know if your app is
              actually ready to ship, and one click to fix what&apos;s not.
            </p>
            <p>
              We&apos;re building this in public. If this resonates, I&apos;d love to hear from you.
            </p>
          </div>
          <div className="mt-8">
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
            >
              <span>Say hello</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Stackmanager</span>
              <span className="text-gray-600">.ai</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-400">
              <a href="mailto:info@stackmanager.ai" className="hover:text-white transition">
                info@stackmanager.ai
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <span>We respect your privacy. No spam, ever.</span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Stackmanager. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
