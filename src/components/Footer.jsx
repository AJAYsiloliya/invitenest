import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-800 via-pink-700 to-rose-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-9 lg:px-8">

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold">
              Invite<span className="text-pink-200">Nest</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-pink-100">
              Create beautiful digital invitations and share your special
              moments with everyone.
            </p>

            <p className="mt-3 text-xs text-pink-200">
              Simple • Beautiful • Shareable
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-bold">Quick Links</h3>

            <nav className="flex flex-col gap-2 text-sm text-pink-100">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/templates" className="hover:text-white">Templates</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 font-bold">Legal</h3>

            <nav className="flex flex-col gap-2 text-sm text-pink-100">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>

              <Link href="/refund-policy" className="hover:text-white">
                Refund & Cancellation
              </Link>
            </nav>
          </div>

          {/* Business */}
          <div>
            <h3 className="mb-3 font-bold">Business Information</h3>

            <div className="text-sm text-pink-100">
              <p className="font-semibold text-white">
                AJAY SILOLIYA
              </p>

              <p className="mt-2 leading-5">
                Gudha Local, Udhaypurwati,
                <br />
                Jhunjhunu, Rajasthan
                <br />
                333053
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/20 pt-5 text-center">
          <p className="text-xs text-pink-100">
            © {new Date().getFullYear()} InviteNest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}