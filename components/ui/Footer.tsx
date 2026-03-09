import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-arkBg border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-display font-bold tracking-widest text-white">
              ARK
            </Link>
            <p className="mt-4 text-sm text-arkSilver">
              Precision engineered for ultimate performance. Bringing what's on your mind into reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-arkSilver">
              <li><Link href="/products" className="hover:text-arkRed transition-colors">Keyboards</Link></li>
              <li><Link href="/products" className="hover:text-arkRed transition-colors">Mice</Link></li>
              <li><Link href="/products" className="hover:text-arkRed transition-colors">Accessories</Link></li>
              <li><Link href="/products" className="hover:text-arkRed transition-colors">Systems (Future)</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Ecosystem</h3>
            <ul className="space-y-2 text-sm text-arkSilver">
              <li><Link href="/drivers" className="hover:text-arkRed transition-colors">Drivers & Software</Link></li>
              <li><Link href="/drivers" className="hover:text-arkRed transition-colors">Cloud Sync</Link></li>
              <li><Link href="/drivers" className="hover:text-arkRed transition-colors">Supported Devices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-arkSilver">
              <li><Link href="/contact" className="hover:text-arkRed transition-colors">Contact Us</Link></li>
              <li><Link href="/admin" className="hover:text-arkRed transition-colors">Admin Login</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-arkSilver">
            &copy; {new Date().getFullYear()} ARK Technology. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-xs text-arkSilver flex">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
