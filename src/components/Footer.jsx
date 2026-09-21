import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-700 via-pink-600 to-rose-600 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
              InviteNest
            </h2>

            <p className="leading-6 text-pink-100">
              Create beautiful digital invitations and share your special
              moments with the people you love.
            </p>

            <p className="mt-4 text-sm text-pink-200">
              Simple • Beautiful • Shareable
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-pink-100">
              <Link
                href="/"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/templates"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Templates
              </Link>

              <Link
                href="/pricing"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="transition hover:translate-x-1 hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-pink-100">
              <Link
                href="/privacy"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/refund-policy"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Refund & Cancellation
              </Link>
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Business Information
            </h3>

            <div className="space-y-4 text-sm text-pink-100">

              <div>
                <p className="font-semibold text-white">
                  Legal Name
                </p>

                <p className="mt-1">
                  AJAY SILOLIYA
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Business Address
                </p>

                <p className="mt-1 leading-6">
                  Gudha| Local , Udhaypurwati , Jhunjhunu , Rajasthan | 333053
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-pink-400/60 pt-6 text-center">
          <p className="text-sm text-pink-100">
            © {new Date().getFullYear()} InviteNest. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-pink-200">
            Digital invitations made simple.
          </p>
        </div>

      </div>
    </footer>
  );
}