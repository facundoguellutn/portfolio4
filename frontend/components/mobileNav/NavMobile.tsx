"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Projects" },
  { href: "/", label: "Contact" },
]

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      {/* Logo on the left */}
      <Link href="/" className="font-bold text-xl">
        CodeBy <span className="text-primary">Facu</span>
      </Link>

      {/* Hamburger menu button */}
      <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {!isOpen ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={closeMenu} className="p-2 focus:outline-none" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-medium hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

