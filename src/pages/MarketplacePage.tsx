import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, name: "Sloan Sectional Sofa", material: "Performance Linen Blend", price: "$2,499", category: "sofas", theme: "mid-century", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Hana Lounge Chair", material: "Solid Ash Wood and Bouclé", price: "$899", category: "chairs", theme: "japandi", image: "https://images.unsplash.com/photo-1592078615290-033ee584e277?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Malmo Dining Table", material: "Natural Oak Veneer", price: "$1,200", category: "tables", theme: "mid-century", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Heirloom Storage Cabinet", material: "Recycled Teak Wood", price: "$1,850", category: "storage", theme: "biophilic", image: "https://images.unsplash.com/photo-1595113314411-9a762244a156?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Kyoto Platform Bed", material: "Walnut and Woven Cane", price: "$1,600", category: "beds", theme: "biophilic", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Heritage Armchair", material: "Top Grain Leather", price: "$1,100", category: "chairs", theme: "industrial", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Nordic Sideboard", material: "White Oak and Metal", price: "$950", category: "storage", theme: "industrial", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Zenith Coffee Table", material: "Travertine Stone", price: "$750", category: "tables", theme: "japandi", image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Elysian Oak Bed", material: "Solid White Oak", price: "$2,100", category: "beds", theme: "japandi", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Bastion Bookshelf", material: "Dark Walnut and Steel", price: "$1,450", category: "storage", theme: "mid-century", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800" }
];

const THEMES = [
  { id: 'all', name: 'All Themes' },
  { id: 'industrial', name: 'Industrial foundry' },
  { id: 'japandi', name: 'Japandi' },
  { id: 'mid-century', name: 'Mid-Century Modern' },
  { id: 'biophilic', name: 'Biophilic Sanctuary' }
];

const CATEGORIES = [
  { id: 'all', name: 'All Items' },
  { id: 'sofas', name: 'Sofas' },
  { id: 'tables', name: 'Tables' },
  { id: 'chairs', name: 'Chairs' },
  { id: 'storage', name: 'Storage' },
  { id: 'beds', name: 'Beds' }
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTheme, setActiveTheme] = useState('industrial');
  const [notification, setNotification] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter(p => 
    (activeCategory === 'all' || p.category === activeCategory) &&
    (activeTheme === 'all' || p.theme === activeTheme)
  );

  const handlePurchase = (name: string) => {
    setNotification(`${name} added to procurement list.`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-surface" data-theme={activeTheme}>
      <header className="fixed top-0 w-full z-50 bg-surface border-b-2 border-outline-variant">
        <div className="flex justify-between items-center px-container-padding h-20 w-full max-w-[1440px] mx-auto">
          <Link to="/" className="font-heritage text-3xl text-primary tracking-tight">Aura Spatial</Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="font-heritage text-xl text-primary border-b-2 border-primary" to="/marketplace">Explore</Link>
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/project-status">Project Status</Link>
            <Link className="font-heritage text-xl text-on-surface-variant hover:text-primary transition-colors" to="/membership">Membership</Link>
          </nav>
          <div className="flex items-center gap-6">
             <div className="flex gap-4">
              <ShoppingBag className="text-primary cursor-pointer hover:opacity-80 transition-all" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-10 pt-40 pb-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
        {/* Sidebar */}
        <aside className="flex flex-col gap-12">
          <section>
            <h3 className="font-heritage text-2xl mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Product Category
            </h3>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left font-sans text-sm py-1 transition-all ${
                    activeCategory === cat.id 
                    ? 'text-accent-orange font-bold pl-2' 
                    : 'text-on-surface-variant hover:text-on-surface hover:pl-1'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-heritage text-2xl mb-6">Design Theme</h3>
            <div className="flex flex-col gap-2">
              {THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`text-left font-sans text-sm py-1 transition-all ${
                    activeTheme === theme.id 
                    ? 'text-accent-orange font-bold pl-2' 
                    : 'text-on-surface-variant hover:text-on-surface hover:pl-1'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </section>
        </aside>

        {/* Gallery */}
        <section>
          <div className="mb-12">
            <h1 className="font-serif text-5xl mb-4">New Arrivals</h1>
            <p className="text-on-surface-variant font-light text-lg">Curated furniture selections for your home layouts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white border border-outline-variant p-4 mcm-shadow-sm hover:mcm-shadow transition-all group"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-6 bg-surface-variant/20">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase text-accent-orange font-bold">{product.material}</span>
                    <h2 className="font-serif text-xl">{product.name}</h2>
                    <div className="font-serif text-lg mb-4">{product.price}</div>
                    <button 
                      onClick={() => handlePurchase(product.name)}
                      className="w-full py-3 bg-on-surface text-surface font-mono text-[10px] uppercase hover:bg-primary transition-colors mcm-shadow-sm group-hover:mcm-shadow"
                    >
                      Purchase Item
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="font-serif text-2xl text-on-surface-variant italic">No items found matching these filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-8 py-4 z-[100] mcm-shadow font-mono text-xs uppercase"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
