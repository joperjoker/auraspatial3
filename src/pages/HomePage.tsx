import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Palette, 
  Menu, 
  Search, 
  Leaf, 
  Armchair, 
  History, 
  Factory, 
  Edit,
  Truck,
  ShieldCheck,
  Mail,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const THEMES = [
  { id: 'Japandi', name: 'Japandi', icon: Leaf, image: 'https://images.unsplash.com/photo-1595514535314-5d8cb9a71221?q=80&w=1200' },
  { id: 'Mid-Century', name: 'Mid-Century', icon: Armchair, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPp0lr7tzVuEgSO_J-q5iKQEDLJ1hvo8kqK9bvv4rwIPpc8y-pBr_7GmiUS_6E_UrrpyexEYC2zdGWo1XMMkJcB6TUuUGGFpaSL2v0I8aDyuU2XUYkNFewOY9XT36R9R2uWrJQiWCXFXKJDv9fanAZsYBPiGWGeEgK-a8W2qTsBSl33nl1N_MFaXB_U8KF8MEarb_Zp8w41CtgWyx8C6T7SRDejFXHjkDsTXsYiRGUBSQFKsv9BgMYTtlOyTm4SGku_etIEOHYf7E' },
  { id: 'Heritage', name: 'Heritage', icon: History, image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?q=80&w=1200' },
  { id: 'Industrial', name: 'Industrial', icon: Factory, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200' },
  { id: 'Custom', name: 'Custom', icon: Edit, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200' },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Walnut Sideboard',
    category: 'Heritage Oak & Walnut',
    price: '$2,450',
    tag: 'New',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe8t0SHqQ65k7rOH1geQ4byMv0esYT0TbtzHCUuERUjPHcsOhyL5rn9arM3ihRe5s9n5rG-FbbiMFuEVVGKsnyVpxouJUXfUD-7THVvw2kLnwpeFO35YjkbpOSsblPrug3vXJdMMOJokHJUe_y4G_ahY3H8beuskKXmborZowrp2MKc3EhAEPCK_j_U4bHBEMI-pto0QGGUa4qMg7IQSXuqNXUlORRkjZwDePVBAeFvVShRlEyElcZlWSJMEYQbcU0cKrGVCptvWE'
  },
  {
    id: 2,
    name: 'Burnt Orange Lounge',
    category: 'Velvet & Dark Cherry',
    price: '$1,800',
    tag: 'Limited',
    variant: 'orange',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDctuqrBS1ShGqeGqsBd43kKJIe1XKJguRB05EUyBhtO3XLsYvSiV_LkxsF1mtt8pzX8J1GTLbsp_TH0FgMFWjEABUZ6EvydPDedlfbNu-RxsTDJlQjmL6ViGZcJtU-tAdBmUW4TKpib8xNn-unV2KVfII02f61IKHen8UaRRPG0ByLtncZpLpXkUhyJRlrdipD-WEIeJRKq8m2FqA-lTKm68YVSG1mEShzzTt4qBzA3i3O7y0qJYGg9eRn0SRhhaZHmhdRQatv39I'
  },
  {
    id: 3,
    name: 'Mustard Pendant',
    category: 'Powder Coated Steel',
    price: '$320',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCC7kN5XzA1jyJvxsHryPE_zcCCXYz1H1FebaYbisjrPkMfcIGeevrCydjT0pVppzEW7ybZe6iWi6EGn4KjuWnA5AIpcoLIOp7MwVVb3RtZZ-cwAqZ1egagmBqSLqnkXvrS9u0XEUdOnDYeO2bFHBGVCbuQGLw_G6aH3esII2vgY_2WA4pVw563NAxSaxt0lA-UYhnBDxJE-n2x51UjmAUY90tJmSf5DrM280cQpt3CLnT2_83LawXIFej2vyKzooxv1p-bRhP1o'
  }
];

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState(THEMES[1]);

  return (
    <div className="min-h-screen bg-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b-2 border-outline-variant">
        <div className="flex justify-between items-center px-container-padding h-20 w-full max-w-[1440px] mx-auto">
          <Link to="/" className="font-heritage text-3xl text-primary tracking-tight">Aura Spatial</Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/marketplace">Marketplace</Link>
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/collections">Collections</Link>
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/curated">Curated</Link>
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/heritage">Heritage</Link>
          </nav>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <input 
                className="pl-10 pr-4 py-2 bg-surface-variant/30 border-2 border-outline-variant rounded-lg focus:outline-none focus:border-primary w-64 font-sans" 
                placeholder="Search furniture..." 
                type="text"
              />
            </div>
            <div className="flex gap-4">
              <ShoppingBag className="text-primary cursor-pointer hover:opacity-80 transition-all" />
              <Palette className="text-primary cursor-pointer hover:opacity-80 transition-all" />
              <Menu className="text-primary cursor-pointer hover:opacity-80 transition-all md:hidden" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* SideNavBar */}
        <aside className="h-[calc(100vh-80px)] w-72 fixed left-0 top-20 z-40 bg-surface-variant/20 border-r border-outline-variant hidden lg:flex flex-col p-6 gap-6 overflow-y-auto">
          <div className="mb-2">
            <h3 className="font-heritage text-2xl text-primary leading-tight">Start Project</h3>
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Define your scope</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase text-on-surface-variant mb-1 ml-1">Property Type</label>
              <select className="w-full bg-surface border-2 border-outline-variant rounded-lg p-2 font-sans text-sm focus:outline-none focus:border-primary">
                <option>HDB BTO</option>
                <option>HDB Resale</option>
                <option>Condominium</option>
                <option>Landed</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase text-on-surface-variant mb-1 ml-1">Size (sqm)</label>
              <input 
                type="number" 
                className="w-full bg-surface border-2 border-outline-variant rounded-lg p-2 font-sans text-sm focus:outline-none focus:border-primary" 
                placeholder="e.g. 90" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-mono text-[10px] uppercase text-on-surface-variant mb-2 ml-1">Explore Themes</h4>
            {THEMES.map((theme) => {
              const Icon = theme.icon;
              const isActive = activeTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                    isActive 
                    ? 'bg-primary-container text-on-primary-container font-bold translate-x-1 mcm-shadow-sm' 
                    : 'text-on-surface-variant hover:bg-surface-variant'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {theme.name}
                </button>
              );
            })}
          </div>

          <div className="mt-auto">
            <button className="w-full bg-accent-orange text-white font-mono text-xs uppercase py-4 rounded-lg mcm-shadow hover:scale-[1.02] transition-transform">
              Receive Quotations
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 min-h-screen">
          <section className="px-container-padding py-12 max-w-[1440px] mx-auto">
            {/* Hero */}
            <div className="relative w-full h-[500px] mb-16 rounded-lg overflow-hidden mcm-shadow group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTheme.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  alt={activeTheme.name}
                  className="w-full h-full object-cover grayscale-[10%]"
                  src={activeTheme.image}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/40 to-transparent flex flex-col justify-center px-16">
                <span className="bg-accent-mustard inline-block px-4 py-1 rounded-full text-[10px] font-mono uppercase w-fit mb-6">Initiate Your Journey</span>
                <h2 className="font-serif text-6xl text-surface leading-[1.1] mb-6 max-w-2xl">
                  Bring Your Dream<br/>Space to Life.
                </h2>
                <p className="font-sans text-lg text-surface/90 mb-8 max-w-xl font-light">
                  Share your property details, explore curated themes, and let Aura Spatial match you with top interior designers for competitive quotations.
                </p>
                <button className="bg-surface text-on-surface font-mono text-xs uppercase px-8 py-4 rounded-lg w-fit mcm-shadow-sm hover:mcm-shadow transition-all">
                  Start RFQ Now
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="mb-24">
              <h3 className="font-serif text-4xl text-primary mb-8 border-b-4 border-primary-container pb-4 w-fit">Featured Inventory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-surface-variant/30 rounded-lg overflow-hidden mb-6 mcm-shadow border-2 border-outline-variant relative">
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        src={product.image}
                      />
                      {product.tag && (
                        <span className={`absolute top-4 ${product.variant === 'orange' ? 'left-4 bg-accent-orange text-white' : 'right-4 bg-surface text-on-surface'} px-3 py-1 rounded-lg mcm-shadow-sm font-mono text-[10px] uppercase`}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start px-1">
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-0.5">{product.name}</h4>
                        <p className="font-mono text-[10px] uppercase text-on-surface-variant font-medium">{product.category}</p>
                      </div>
                      <span className="font-serif text-xl text-primary">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 bg-primary-container rounded-lg p-12 flex flex-col justify-end relative overflow-hidden mcm-shadow">
                <span className="font-mono text-xs uppercase text-on-primary-container mb-4 font-bold tracking-wider">Established 1954</span>
                <h3 className="font-serif text-5xl text-primary leading-tight mb-6">Built to last <br/>generations.</h3>
                <p className="font-sans text-lg text-on-surface-variant max-w-md font-light leading-relaxed">
                  Our craftsmen utilize traditional joinery techniques to ensure every piece we produce meets the standards of the original mid-century masters.
                </p>
                <div className="absolute -top-12 -right-12 w-48 h-48 border-8 border-primary rounded-full opacity-5"></div>
              </div>
              <div className="md:col-span-2 bg-accent-mustard rounded-lg p-12 mcm-shadow flex flex-col justify-center">
                <h4 className="font-serif text-3xl mb-4">Custom Sourcing</h4>
                <p className="font-sans text-base mb-6 font-medium">Looking for a specific period piece? Our global network of curators can find that elusive original 1960s sideboard for your space.</p>
                <Link className="font-mono text-xs uppercase underline underline-offset-8 font-bold hover:text-on-surface/70 transition-colors" to="#">Start the search</Link>
              </div>
              <div className="md:col-span-1 bg-surface-variant/30 rounded-lg p-8 mcm-shadow border-2 border-outline-variant flex flex-col items-center justify-center text-center group hover:bg-surface-variant/50 transition-colors">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <p className="font-mono text-[10px] uppercase font-bold tracking-tight">Global White-Glove Delivery</p>
              </div>
              <div className="md:col-span-1 bg-surface-variant/30 rounded-lg p-8 mcm-shadow border-2 border-outline-variant flex flex-col items-center justify-center text-center group hover:bg-surface-variant/50 transition-colors">
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <p className="font-mono text-[10px] uppercase font-bold tracking-tight">Authenticity Guaranteed</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full mt-24 bg-surface border-t border-outline-variant">
            <div className="flex flex-col md:flex-row justify-between items-center px-container-padding py-16 w-full max-w-[1440px] mx-auto gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-heritage text-2xl text-primary">Aura Spatial</span>
                <p className="font-sans text-sm text-on-surface-variant font-medium">© 2024 Aura Spatial. Architectural Minimalism in Digital Form.</p>
              </div>
              <div className="flex gap-8">
                <Link className="font-sans text-sm text-on-surface-variant hover:text-primary font-medium" to="#">The Studio</Link>
                <Link className="font-sans text-sm text-on-surface-variant hover:text-primary font-medium" to="#">Sustainability</Link>
                <Link className="font-sans text-sm text-on-surface-variant hover:text-primary font-medium" to="#">Terms</Link>
                <Link className="font-sans text-sm text-primary underline font-bold" to="#">Contact</Link>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-orange mcm-shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent-mustard mcm-shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all text-on-surface">
                  <Share2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
