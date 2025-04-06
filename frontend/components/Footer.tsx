"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, Github, Download, ArrowUpRight, MessageCircle, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface FooterProps {
  name?: string
  email?: string
  phone?: string
  linkedin?: string
  github?: string
  whatsapp?: string
  cvUrl?: string
  logo?: string
  accentColor?: string
}

export default function Footer({
  name = "Tu Nombre",
  email = "tu@email.com",
  phone = "+123456789",
  linkedin = "https://linkedin.com/in/username",
  github = "https://github.com/username",
  whatsapp = "+123456789",
  cvUrl = "/cv.pdf",
  logo = "/placeholder.svg?height=50&width=50",
  accentColor = "#9AE01D",
}: FooterProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Acerca de mí", href: "/sobre-mi" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Experiencia", href: "/experiencia" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/#contacto" },
  ]

  return (
    <TooltipProvider>
      <footer className="bg-zinc-950 text-white w-full px-10" id="footer">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo y descripción */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src={logo || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-lg" />
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-zinc-400 max-w-xs">
                Desarrollador web especializado en crear experiencias digitales atractivas y funcionales.
              </p>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-zinc-700 hover:border-white transition-colors text-slate-800"
                onClick={() => window.open(cvUrl, "_blank")}
              >
                <Download size={16} />
                <span>Descargar CV</span>
              </Button>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navegación</h4>
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contacto */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accentColor + "20" }}
                    >
                      <Mail size={18} style={{ color: accentColor }} />
                    </div>
                    <h5 className="font-medium">Email</h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href={`mailto:${email}`} className="text-zinc-400 hover:text-white transition-colors">
                      {email}
                    </a>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => copyToClipboard(email, "email")}
                          className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
                        >
                          {copied === "email" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied === "email" ? "Copiado!" : "Copiar email"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accentColor + "20" }}
                    >
                      <Phone size={18} style={{ color: accentColor }} />
                    </div>
                    <h5 className="font-medium">Teléfono</h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href={`tel:${phone}`} className="text-zinc-400 hover:text-white transition-colors">
                      {phone}
                    </a>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => copyToClipboard(phone, "phone")}
                          className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
                        >
                          {copied === "phone" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied === "phone" ? "Copiado!" : "Copiar teléfono"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accentColor + "20" }}
                    >
                      <Linkedin size={18} style={{ color: accentColor }} />
                    </div>
                    <h5 className="font-medium">LinkedIn</h5>
                  </div>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Perfil LinkedIn</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accentColor + "20" }}
                    >
                      <MessageCircle size={18} style={{ color: accentColor }} />
                    </div>
                    <h5 className="font-medium">WhatsApp</h5>
                  </div>
                  <a
                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Enviar mensaje</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* GitHub */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accentColor + "20" }}
                    >
                      <Github size={18} style={{ color: accentColor }} />
                    </div>
                    <h5 className="font-medium">GitHub</h5>
                  </div>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Ver repositorios</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} {name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  )
}

