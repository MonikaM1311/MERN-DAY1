import React, { useState } from 'react'

// Amazon-style header + mega menu + search + mini-cart
// Modern White & Black theme

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Hero />
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Featured products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCard key={i} index={i + 1} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [query, setQuery] = useState('')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Logo />

            <nav className="hidden lg:flex items-center gap-2">
              <MegaMenu />
              <NavLink label="Deals" />
              <NavLink label="Electronics" />
              <NavLink label="Home" />
              <NavLink label="Beauty" />
            </nav>
          </div>

          <div className="flex-1 px-4">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="flex items-center gap-4">
            <ProfileMenu />

            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-black text-white">{cartCount}</span>
            </button>

            <CartPreview open={cartOpen} onClose={() => setCartOpen(false)} />
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className="lg:hidden border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 py-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1">
            <SearchBar compact />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded flex items-center justify-center bg-black text-white font-bold">M</div>
      <div className="hidden sm:block">
        <div className="text-sm">Monika Shop</div>
        <div className="text-xs text-gray-500">Delivering quality</div>
      </div>
    </div>
  )
}

function NavLink({ label }) {
  return (
    <a href="#" className="px-3 py-2 rounded hover:bg-gray-50 text-sm">
      {label}
    </a>
  )
}

function MegaMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="px-3 py-2 rounded hover:bg-gray-50 text-sm flex items-center gap-1"
      >
        Categories
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="absolute left-0 mt-2 w-[920px] bg-white rounded shadow-lg border p-6">
          <div className="grid grid-cols-4 gap-6">
            <CategoryColumn title="Beauty" items={["Skin Care", "Makeup", "Fragrances", "Tools"]} />
            <CategoryColumn title="Hair" items={["Shampoos", "Conditioners", "Treatments", "Styling"]} />
            <CategoryColumn title="Body" items={["Soaps", "Lotions", "Deodorants", "Care Kits"]} />
            <div>
              <h4 className="text-sm font-semibold mb-2">Top Picks</h4>
              <div className="space-y-3">
                <PromoCard title="Prime Daily Deal" subtitle="Up to 40% off selected" />
                <PromoCard title="New Arrivals" subtitle="Fresh launches this week" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function CategoryColumn({ title, items = [] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((it) => (
          <li key={it} className="hover:underline cursor-pointer">{it}</li>
        ))}
      </ul>
    </div>
  )
}

function PromoCard({ title, subtitle }) {
  return (
    <div className="p-3 border rounded">
      <div className="text-xs font-semibold">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  )
}

function SearchBar({ query: externalQuery, setQuery: setExternalQuery, compact = false }) {
  const [q, setQ] = useState(externalQuery ?? '')

  const onSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${q}`)
    if (setExternalQuery) setExternalQuery(q)
  }

  return (
    <form onSubmit={onSearch} className={`flex items-center border rounded overflow-hidden ${compact ? 'h-10' : 'h-12'}`}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="flex-1 px-3 outline-none bg-transparent text-sm"
        placeholder="Search for products, brands and more"
      />
      <button type="submit" className="px-4 text-sm font-medium border-l">
        Search
      </button>
    </form>
  )
}

function ProfileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">U</div>
        <div className="hidden sm:block text-sm text-left">
          <div>Hello, Sign in</div>
          <div className="text-xs text-gray-500">Account & Lists</div>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3 text-sm">
          <a className="block py-2 hover:bg-gray-50 rounded">Your Account</a>
          <a className="block py-2 hover:bg-gray-50 rounded">Orders</a>
          <a className="block py-2 hover:bg-gray-50 rounded">Wishlist</a>
        </div>
      )}
    </div>
  )
}

function CartPreview({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed right-6 top-20 w-96 bg-white border rounded shadow-lg p-4 z-50">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Cart</h4>
        <button onClick={onClose} className="text-sm text-gray-500">Close</button>
      </div>
      <div className="mt-3 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-gray-100 rounded" />
          <div className="flex-1 text-sm">
            <div>Product title example</div>
            <div className="text-xs text-gray-500">Qty: 1</div>
          </div>
          <div className="font-semibold">₹499</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-gray-100 rounded" />
          <div className="flex-1 text-sm">
            <div>Another product</div>
            <div className="text-xs text-gray-500">Qty: 1</div>
          </div>
          <div className="font-semibold">₹299</div>
        </div>
      </div>

      <div className="mt-4 border-t pt-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Subtotal</div>
          <div className="font-semibold">₹798</div>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded">Proceed</button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="rounded-lg overflow-hidden bg-gradient-to-r from-white to-gray-100 p-6">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Welcome to Modern Shop</h1>
          <p className="text-gray-600 mt-2">Clean, minimal and fast — inspired by Amazon layout.</p>
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-black text-white rounded">Shop Now</button>
            <button className="px-4 py-2 border rounded">Learn More</button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 rounded overflow-hidden bg-gray-50 p-4">
          <div className="h-44 bg-gray-200 rounded flex items-center justify-center">Hero Banner</div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ index }) {
  return (
    <div className="bg-white rounded shadow-sm p-4 hover:shadow-md transition">
      <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center">Img</div>
      <div className="text-sm font-medium">Product {index}</div>
      <div className="text-xs text-gray-500 mt-1">Short product description goes here</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-semibold">₹{99 + index * 10}</div>
        <button className="text-sm px-3 py-1 border rounded">Add</button>
      </div>
    </div>
  )
}
