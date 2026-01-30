import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Coins, Home, Sparkles, Play, Mic, Menu, X, LogOut, Plus, MessageSquarePlus, Clock, HelpCircle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AccountMenu from "@/components/dashboard/AccountMenu";
import RechargeDialog from "@/components/dashboard/RechargeDialog";
import FeedbackDialog from "@/components/dashboard/FeedbackDialog";

type ToolType = "chatgpt" | "elevenlabs" | "aiultra";

const ToolHelpButton = ({ tool }: { tool: ToolType }) => {
  const { t } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  const features: Record<ToolType, string[]> = {
    chatgpt: [
      t("toolHelp.chatgpt.1"),
      t("toolHelp.chatgpt.2"),
      t("toolHelp.chatgpt.3"),
      t("toolHelp.chatgpt.4"),
      t("toolHelp.chatgpt.5"),
      t("toolHelp.chatgpt.6"),
      t("toolHelp.chatgpt.7"),
      t("toolHelp.chatgpt.8"),
    ],
    elevenlabs: [
      t("toolHelp.elevenlabs.1"),
      t("toolHelp.elevenlabs.2"),
      t("toolHelp.elevenlabs.3"),
      t("toolHelp.elevenlabs.4"),
      t("toolHelp.elevenlabs.5"),
      t("toolHelp.elevenlabs.6"),
    ],
    aiultra: [
      t("toolHelp.aiultra.1"),
      t("toolHelp.aiultra.2"),
      t("toolHelp.aiultra.3"),
      t("toolHelp.aiultra.4"),
      t("toolHelp.aiultra.5"),
      t("toolHelp.aiultra.6"),
    ],
  };

  const titles: Record<ToolType, string> = {
    chatgpt: t("toolHelp.chatgpt.title"),
    elevenlabs: t("toolHelp.elevenlabs.title"),
    aiultra: t("toolHelp.aiultra.title"),
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className={`
            relative inline-flex items-center justify-center w-6 h-6 rounded-full 
            border border-primary/30 bg-primary/10 text-primary 
            hover:bg-primary/20 hover:border-primary/50 transition-all ml-2
            ${isAnimating ? 'animate-help-pulse' : ''}
          `}
        >
          {isAnimating && (
            <>
              <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping-slow" />
              <span className="absolute inset-[-2px] rounded-full border border-primary/20 animate-ping-slower" />
            </>
          )}
          <HelpCircle className="w-4 h-4 relative z-10" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="center">
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">{titles[tool]}</h4>
          <ul className="space-y-2">
            {features[tool].map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

// Demo membership: 30 days from now
const DEMO_MEMBERSHIP_END = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

type TabType = "inicio" | "chatgpt" | "elevenlabs" | "aiultra";

const ChatGPTMembership = () => {
  const { t } = useLanguage();
  const [timeRemaining, setTimeRemaining] = useState("");

  const formatTimeRemaining = (endDate: Date): string => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    
    if (diff <= 0) return t("dashboard.expired");
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else {
      return `${minutes}m ${seconds}s`;
    }
  };

  useEffect(() => {
    setTimeRemaining(formatTimeRemaining(DEMO_MEMBERSHIP_END));
    const interval = setInterval(() => {
      setTimeRemaining(formatTimeRemaining(DEMO_MEMBERSHIP_END));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-6 max-w-lg mx-auto">
      <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold inline-flex items-center justify-center">
          ChatGPT Plus
          <ToolHelpButton tool="chatgpt" />
        </h2>
        <div className="flex justify-center">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
            <span className="text-primary font-semibold">{t("dashboard.membershipActive")}</span>
          </div>
        </div>
      </div>
      
      {/* Countdown Timer */}
      <div className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-lg border border-border">
        <Clock className="w-5 h-5 text-accent" />
        <span className="text-muted-foreground">{t("dashboard.timeRemaining")}</span>
        <span className="font-mono font-bold text-foreground">{timeRemaining}</span>
      </div>
      
      <p className="text-muted-foreground">
        {t("dashboard.fullAccess")}
      </p>
      <Button
        asChild
        className="box-glow-cyan"
        size="lg"
      >
        <a href="https://gpt.jall.lat/" target="_blank" rel="noopener noreferrer">
          {t("dashboard.openChatGPT")}
        </a>
      </Button>
    </div>
  );
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRechargeDialog, setShowRechargeDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleRecharge = () => {
    setShowRechargeDialog(true);
  };

  const tabs = [
    { id: "inicio" as TabType, label: t("dashboard.home"), icon: Home },
    { id: "chatgpt" as TabType, label: "ChatGPT", icon: Sparkles },
    { id: "elevenlabs" as TabType, label: "Eleven Labs", icon: Mic },
    { id: "aiultra" as TabType, label: "AI Ultra", icon: Play },
  ];

  const renderContent = () => {
    if (activeTab === "inicio") {
      return (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">{t("dashboard.welcome")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("dashboard.selectTool")}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            {tabs.slice(1).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <tab.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-medium">{tab.label}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    const toolNames: Record<TabType, string> = {
      inicio: "",
      chatgpt: "ChatGPT Plus",
      elevenlabs: "Eleven Labs",
      aiultra: "Google AI Ultra",
    };

    // ChatGPT - Active for demo user
    if (activeTab === "chatgpt") {
      return (
        <ChatGPTMembership />
      );
    }

    // Eleven Labs - Coming Soon
    if (activeTab === "elevenlabs") {
      return (
        <div className="text-center space-y-6 max-w-lg mx-auto">
      <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
            <Mic className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold inline-flex items-center justify-center">
              Eleven Labs
              <ToolHelpButton tool="elevenlabs" />
            </h2>
            <div className="flex justify-center">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-accent font-semibold">{t("dashboard.comingSoon")}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">
            {t("dashboard.elevenLabsDesc")}
          </p>
          <Button
            onClick={() => setActiveTab("inicio")}
            variant="outline"
            size="lg"
          >
            {t("dashboard.backHome")}
          </Button>
        </div>
      );
    }

    return (
      <div className="text-center space-y-6 max-w-lg mx-auto">
        <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
          <Play className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-2xl font-bold inline-flex items-center justify-center">
          {t("dashboard.noAccess")} {toolNames[activeTab]}
          {activeTab === "aiultra" && <ToolHelpButton tool="aiultra" />}
        </h2>
        <p className="text-muted-foreground">
          {t("dashboard.noAccessDesc")}
        </p>
        <Button
          onClick={handleRecharge}
          className="box-glow-green"
          size="lg"
        >
          {t("dashboard.rechargeNow")}
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <span className="text-2xl font-bold text-primary glow-green">
              Jall AI
            </span>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Points & Account */}
            <div className="hidden md:flex items-center gap-4">
              <HoverCard openDelay={100} closeDelay={200}>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors">
                    <Coins className="w-4 h-4 text-accent" />
                    <span className="font-medium">{user?.points || 0} {t("dashboard.points")}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-48 p-2" align="end">
                  <Button
                    onClick={handleRecharge}
                    className="w-full gap-2"
                    size="sm"
                  >
                    <Plus className="w-4 h-4" />
                    {t("dashboard.rechargePoints")}
                  </Button>
                </HoverCardContent>
              </HoverCard>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFeedbackDialog(true)}
                className="gap-2"
              >
                <MessageSquarePlus className="w-4 h-4" />
                {t("dashboard.suggestChanges")}
              </Button>
              <AccountMenu email={user?.email || ""} onLogout={handleLogout} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-in border-t border-border">
            <div className="flex items-center justify-between gap-2 px-4 py-2 bg-secondary rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-accent" />
                <span className="font-medium">{user?.points || 0} {t("dashboard.points")}</span>
              </div>
              <Button onClick={handleRecharge} size="sm" variant="ghost" className="h-7 px-2">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border">
                <AccountMenu email={user?.email || ""} onLogout={handleLogout} />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Recharge Dialog */}
      <RechargeDialog open={showRechargeDialog} onOpenChange={setShowRechargeDialog} />

      {/* Feedback Dialog */}
      <FeedbackDialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog} />
    </div>
  );
};

export default Dashboard;
