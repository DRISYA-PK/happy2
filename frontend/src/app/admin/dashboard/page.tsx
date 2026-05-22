"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import { clearCredentials } from "@/lib/store/features/authSlice";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Shield, LogOut, Activity, Users, Settings, Award } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isInitialized, isAdmin } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // If auth state has initialized and user is not an admin, redirect them
    if (isInitialized && (!user || !isAdmin)) {
      toast.error("Access Denied", {
        description: "You do not have administrative clearance to access the operations node.",
      });
      router.push("/admin/login");
    }
  }, [user, isAdmin, isInitialized, router]);

  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Sign out database sync error:", err);
    }

    dispatch(clearCredentials());
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    
    // Clear cookies legacy
    document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict; Secure";
    
    window.dispatchEvent(new Event("storage"));
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };

  if (!isInitialized || !user || !isAdmin) {
    return (
      <main className="relative min-h-screen w-full flex items-center justify-center">
        <GlobalBackground />
        <div className="text-center z-10">
          <Shield className="h-10 w-10 text-primary animate-spin mx-auto mb-4" />
          <h2 className="text-nature-black/70 font-semibold">Verifying credentials...</h2>
        </div>
      </main>
    );
  }

  return (
    <>
      <title>Admin Dashboard | Happiness Coaching Academy</title>
      <main className="relative min-h-screen w-full overflow-hidden flex flex-col p-6 sm:p-12">
        <GlobalBackground />

        <div className="max-w-6xl w-full mx-auto z-10 flex flex-col gap-8 flex-grow">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/20 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
                <Shield className="h-4 w-4" />
                <span>Secure Operations Command</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-nature-black/90 mt-1">
                Admin Console
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Logged in as <span className="font-semibold text-nature-black">{user.name}</span>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-black text-white bg-red-500 hover:bg-red-600 shadow-md cursor-pointer transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out Terminal</span>
            </motion.button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-surface p-6 rounded-3xl border border-white/30 flex items-center gap-4 shadow-lg"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Active Students</p>
                <h3 className="text-2xl font-black text-nature-black/90 mt-0.5">142</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-surface p-6 rounded-3xl border border-white/30 flex items-center gap-4 shadow-lg"
            >
              <div className="p-4 rounded-2xl bg-secondary/15 text-nature-black">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Course Completions</p>
                <h3 className="text-2xl font-black text-nature-black/90 mt-0.5">88%</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-surface p-6 rounded-3xl border border-white/30 flex items-center gap-4 shadow-lg"
            >
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">System Health</p>
                <h3 className="text-2xl font-black text-nature-black/90 mt-0.5">Optimal</h3>
              </div>
            </motion.div>
          </div>

          {/* Operational Area */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-surface flex-grow rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black tracking-tight text-nature-black/90 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>Console Logs & Management</span>
              </h2>
            </div>
            
            <div className="border border-dashed border-nature-black/10 rounded-2xl p-12 text-center text-muted-foreground bg-white/10 backdrop-blur-sm">
              <Shield className="h-12 w-12 mx-auto text-nature-black/20 mb-3" />
              <p className="text-sm font-semibold">Everything is running smoothly.</p>
              <p className="text-xs mt-1">Both client and administrator sessions are protected using double HttpOnly cookies.</p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
