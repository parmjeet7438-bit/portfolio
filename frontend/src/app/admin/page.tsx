"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, FolderKanban, LogOut, Mail, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/services/api";
import { getToken, setToken, clearToken } from "@/lib/auth";
import type { AnalyticsData, Project } from "@/types";
import { toast } from "sonner";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [token, setTokenState] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<"projects" | "messages" | "analytics">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    githubUrl: "",
    liveUrl: "",
    category: "fullstack",
  });

  useEffect(() => {
    setTokenState(getToken());
  }, []);

  useEffect(() => {
    if (!token) return;
    loadData();
  }, [token, tab]);

  const loadData = async () => {
    if (!token) return;
    try {
      if (tab === "projects") {
        const res = await api<{ data: Project[] }>("/projects", { token });
        setProjects(res.data);
      } else if (tab === "messages") {
        const res = await api<{ data: Message[] }>("/contact", { token });
        setMessages(res.data);
      } else {
        const res = await api<{ data: AnalyticsData }>("/portfolio/analytics", { token });
        setAnalytics(res.data);
      }
    } catch {
      toast.error("Failed to load data");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api<{ token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setToken(res.token);
      setTokenState(res.token);
      toast.success("Logged in successfully");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    setTokenState(null);
  };

  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    try {
      await api("/projects", {
        method: "POST",
        token,
        body: JSON.stringify({
          ...newProject,
          technologies: ["Next.js"],
          features: [],
          tags: [],
          status: "completed",
          featured: false,
          order: projects.length + 1,
        }),
      });
      toast.success("Project added");
      setNewProject({ title: "", description: "", githubUrl: "", liveUrl: "", category: "fullstack" });
      loadData();
    } catch {
      toast.error("Failed to add project");
    }
  };

  const deleteProject = async (id: string) => {
    if (!token) return;
    try {
      await api(`/projects/${id}`, { method: "DELETE", token });
      toast.success("Project deleted");
      loadData();
    } catch {
      toast.error("Failed to delete project");
    }
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <p className="text-sm text-muted-foreground">Default: parmjeet7438@gmail.com / admin123</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              <Link href="/" className="block text-center text-sm text-primary hover:underline">
                ← Back to Portfolio
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-primary hover:underline">View Site</Link>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-6 flex gap-2">
          {[
            { id: "projects" as const, label: "Projects", icon: FolderKanban },
            { id: "messages" as const, label: "Messages", icon: Mail },
            { id: "analytics" as const, label: "Analytics", icon: BarChart3 },
          ].map(({ id, label, icon: Icon }) => (
            <Button key={id} variant={tab === id ? "default" : "outline"} onClick={() => setTab(id)} className="gap-2">
              <Icon className="h-4 w-4" /> {label}
            </Button>
          ))}
        </div>

        {tab === "projects" && (
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Add Project</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={addProject} className="space-y-3">
                  <Input placeholder="Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} required />
                  <Textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required />
                  <Input placeholder="GitHub URL" value={newProject.githubUrl} onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })} />
                  <Input placeholder="Live Demo URL" value={newProject.liveUrl} onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })} />
                  <Button type="submit" className="w-full">Add Project</Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-3">
              {projects.map((p) => (
                <motion.div key={p._id} layout className="glass-card flex items-start justify-between rounded-xl p-4">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => deleteProject(p._id)}>
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {tab === "messages" && (
          <div className="space-y-3">
            {messages.length === 0 ? (
              <p className="text-muted-foreground">No messages yet.</p>
            ) : (
              messages.map((m) => (
                <Card key={m._id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{m.name} — {m.subject}</p>
                        <p className="text-sm text-muted-foreground">{m.email}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{new Date(m.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="mt-2 text-sm">{m.message}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {tab === "analytics" && analytics && (
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Visits", value: analytics.visits },
              { label: "Resume Downloads", value: analytics.downloads },
              { label: "Contact Submissions", value: analytics.contacts },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
