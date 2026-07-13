"use client";

import { useState } from "react";
import { motion } from "@/lib/motion";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeInUp } from "@/animations/variants";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api("/contact", { method: "POST", body: JSON.stringify(form) });
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading subtitle="Contact" title="Get In Touch" description="Let's build something amazing together" />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="glass-card glow-border rounded-2xl p-8">
              <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
              <p className="mb-6 text-muted-foreground">
                Feel free to reach out for internships, collaborations, or just a friendly hello.
              </p>
              <div className="space-y-3 text-sm">
                <p>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">GitHub: </span>
                  <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @parmjeet7438-bit
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">LinkedIn: </span>
                  <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Parmjeet Singh
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card glow-border space-y-4 rounded-2xl p-8"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-400"
              >
                <CheckCircle className="h-4 w-4" /> Message sent successfully!
              </motion.p>
            )}
            <Button type="submit" disabled={loading} className="w-full gap-2">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
