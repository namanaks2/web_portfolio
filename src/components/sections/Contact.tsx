"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import toast, { Toaster } from "react-hot-toast";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "namanaks2@gmail.com",
    href: "mailto:namanaks2@gmail.com",
    color: "from-red-500/10 to-orange-500/10 border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/naman-gupta-64687230a/",
    href: "https://www.linkedin.com/in/naman-gupta-64687230a/",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/namanaks2",
    href: "https://github.com/namanaks2",
    color: "from-gray-500/10 to-gray-400/10 border-gray-500/20",
    iconColor: "text-gray-400",
  },

];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setSending(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            border: "1px solid var(--card-border)",
            borderRadius: "12px",
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "var(--badge-bg)",
              border: "1px solid var(--badge-border)",
              color: "var(--badge-text)",
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                  style={{
                    backgroundColor: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Info */}
            <div
              className="p-5 rounded-2xl mb-6"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  IST (UTC+5:30) · Usually responds within 24h
                </span>
              </div>
            </div>

            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                whileHover={{ y: -2, scale: 1.01 }}
                className={`group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${card.color} backdrop-blur-sm transition-all duration-300 cursor-pointer`}
                onClick={() => copyToClipboard(card.value, i)}
              >
                <div className={`p-2.5 rounded-lg ${card.iconColor}`} style={{ backgroundColor: "var(--glass-bg)" }}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    {card.label}
                  </p>
                  <p className="text-sm truncate" style={{ color: "var(--text-primary)" }}>
                    {card.value}
                  </p>
                </div>
                <button
                  className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: "var(--glass-bg)" }}
                  aria-label={`Copy ${card.label}`}
                >
                  {copiedIndex === i ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
