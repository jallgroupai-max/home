import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Coins, CreditCard, Smartphone, Bitcoin, Upload, ArrowLeft, ArrowRight, MessageCircle, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface RechargeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "method" | "amount" | "payment" | "confirm" | "card_maintenance";

const EXCHANGE_RATE = 590; // Bs por dólar
const POINTS_PER_DOLLAR = 100;

const pagoMovilData = {
  banco: "Banco de Venezuela",
  telefono: "0412-1234567",
  cedula: "V-12345678",
  titular: "Jall AI C.A.",
};

const whatsappNumber = "584121234567";

const RechargeDialog = ({ open, onOpenChange }: RechargeDialogProps) => {
  const { toast } = useToast();
  const { t, isVenezuela } = useLanguage();
  const [step, setStep] = useState<Step>("method");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [proofUploaded, setProofUploaded] = useState(false);

  const paymentMethods = [
    ...(isVenezuela ? [{ id: "pago_movil", labelKey: "recharge.pagoMovil", icon: Smartphone, descKey: "recharge.pagoMovilDesc" }] : []),
    { id: "binance", labelKey: "recharge.binance", icon: Bitcoin, descKey: "recharge.binanceDesc" },
    { id: "crypto", labelKey: "recharge.crypto", icon: Bitcoin, descKey: "recharge.cryptoDesc" },
    { id: "card", labelKey: "recharge.card", icon: CreditCard, descKey: "recharge.cardDesc" },
  ];

  const amountNum = parseFloat(amount) || 0;
  const pointsEquivalent = Math.floor(amountNum * POINTS_PER_DOLLAR);
  const bsAmount = amountNum * EXCHANGE_RATE;

  const resetDialog = () => {
    setStep("method");
    setSelectedMethod("");
    setAmount("");
    setReference("");
    setProofUploaded(false);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) resetDialog();
    onOpenChange(isOpen);
  };

  const handleFileUpload = () => {
    setProofUploaded(true);
    toast({
      title: t("recharge.proofReceived"),
      description: t("recharge.proofReceivedDesc"),
    });
  };

  const handleSubmit = () => {
    toast({
      title: t("recharge.inProgress"),
      description: t("recharge.inProgressDesc"),
    });
    handleClose(false);
  };

  const generateWhatsAppLink = () => {
    const methodLabel = paymentMethods.find(m => m.id === selectedMethod);
    const message = encodeURIComponent(
      `Hola! Quiero reportar mi pago:\n\n` +
      `Método: ${methodLabel ? t(methodLabel.labelKey) : ""}\n` +
      `Monto: $${amountNum} USD\n` +
      `${selectedMethod === "pago_movil" ? `Monto en Bs: ${bsAmount.toLocaleString()} Bs\n` : ""}` +
      `Referencia: ${reference || "Pendiente"}\n` +
      `Puntos a recibir: ${pointsEquivalent}`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const canProceed = () => {
    switch (step) {
      case "method": return !!selectedMethod;
      case "amount": return amountNum >= 2;
      case "payment": return proofUploaded || !!reference;
      default: return true;
    }
  };

  const goNext = () => {
    if (step === "method") {
      if (selectedMethod === "card") {
        setStep("card_maintenance");
      } else {
        setStep("amount");
      }
    }
    else if (step === "amount") setStep("payment");
    else if (step === "payment") setStep("confirm");
  };

  const goBack = () => {
    if (step === "amount") setStep("method");
    else if (step === "payment") setStep("amount");
    else if (step === "confirm") setStep("payment");
    else if (step === "card_maintenance") setStep("method");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {step === "method" && t("recharge.methodTitle")}
            {step === "amount" && t("recharge.amountTitle")}
            {step === "payment" && t("recharge.paymentTitle")}
            {step === "confirm" && t("recharge.confirmTitle")}
            {step === "card_maintenance" && t("recharge.cardMaintenanceTitle")}
          </DialogTitle>
          <DialogDescription>
            {step === "method" && t("recharge.methodDesc")}
            {step === "amount" && t("recharge.amountDesc")}
            {step === "payment" && t("recharge.paymentDesc")}
            {step === "confirm" && t("recharge.confirmDesc")}
            {step === "card_maintenance" && t("recharge.cardMaintenanceDesc")}
          </DialogDescription>
        </DialogHeader>

        <div className="pt-4">
          {/* Step 1: Payment Method */}
          {step === "method" && (
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-3">
              {paymentMethods.map((method) => (
                <Label
                  key={method.id}
                  htmlFor={method.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value={method.id} id={method.id} />
                  <method.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{t(method.labelKey)}</p>
                    <p className="text-sm text-muted-foreground">{t(method.descKey)}</p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          )}

          {/* Card Maintenance Step */}
          {step === "card_maintenance" && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{t("recharge.cardMaintenanceHeading")}</h3>
                <p className="text-muted-foreground">
                  {t("recharge.cardMaintenanceMessage")}
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">{t("recharge.stripeComingSoon")}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("recharge.stripeDescription")}
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Amount */}
          {step === "amount" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">{t("recharge.amountUsd")}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="amount"
                    type="number"
                    min="2"
                    step="0.5"
                    placeholder="2.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-8"
                  />
                </div>
                {amountNum > 0 && amountNum < 2 && (
                  <p className="text-sm text-destructive">{t("recharge.minAmount")}</p>
                )}
              </div>

              {amountNum >= 2 && (
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t("recharge.youWillReceive")}</span>
                    <div className="flex items-center gap-2">
                      <Coins className="w-5 h-5 text-accent" />
                      <span className="text-xl font-bold text-primary">{pointsEquivalent} {t("dashboard.points")}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Payment Details */}
          {step === "payment" && (
            <div className="space-y-6">
              {selectedMethod === "pago_movil" && (
                <div className="p-4 bg-secondary rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary">{t("recharge.pagoMovilData")}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">{t("recharge.bank")}</span>
                    <span className="font-medium">{pagoMovilData.banco}</span>
                    <span className="text-muted-foreground">{t("recharge.phone")}</span>
                    <span className="font-medium">{pagoMovilData.telefono}</span>
                    <span className="text-muted-foreground">{t("recharge.id")}</span>
                    <span className="font-medium">{pagoMovilData.cedula}</span>
                    <span className="text-muted-foreground">{t("recharge.holder")}</span>
                    <span className="font-medium">{pagoMovilData.titular}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{t("recharge.amountToPay")}</span>
                      <span className="text-xl font-bold text-accent">{bsAmount.toLocaleString()} Bs</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("recharge.rate")} {EXCHANGE_RATE} Bs/USD</p>
                  </div>
                </div>
              )}

              {selectedMethod !== "pago_movil" && (
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-center text-muted-foreground">
                    {t("recharge.dataViaSocial")} {paymentMethods.find(m => m.id === selectedMethod) ? t(paymentMethods.find(m => m.id === selectedMethod)!.labelKey) : ""} {t("recharge.willBeSent")}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="reference">{t("recharge.reference")}</Label>
                <Input
                  id="reference"
                  placeholder="Ej: 123456789"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full gap-2"
                onClick={handleFileUpload}
              >
                <Upload className="w-4 h-4" />
                {proofUploaded ? t("recharge.proofUploaded") : t("recharge.uploadProof")}
              </Button>

              <div className="text-center">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("recharge.reportWhatsApp")}
                </a>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirm" && (
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold">{t("recharge.almostDone")}</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {t("recharge.reviewData")}
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-secondary rounded">
                  <span className="text-muted-foreground">{t("recharge.method")}</span>
                  <span className="font-medium">{paymentMethods.find(m => m.id === selectedMethod) ? t(paymentMethods.find(m => m.id === selectedMethod)!.labelKey) : ""}</span>
                </div>
                <div className="flex justify-between p-2 bg-secondary rounded">
                  <span className="text-muted-foreground">{t("recharge.amountUsdLabel")}</span>
                  <span className="font-medium">${amountNum}</span>
                </div>
                {selectedMethod === "pago_movil" && (
                  <div className="flex justify-between p-2 bg-secondary rounded">
                    <span className="text-muted-foreground">{t("recharge.amountBsLabel")}</span>
                    <span className="font-medium">{bsAmount.toLocaleString()} Bs</span>
                  </div>
                )}
                <div className="flex justify-between p-2 bg-secondary rounded">
                  <span className="text-muted-foreground">{t("recharge.pointsReceive")}</span>
                  <span className="font-bold text-primary">{pointsEquivalent} {t("dashboard.points")}</span>
                </div>
                {reference && (
                  <div className="flex justify-between p-2 bg-secondary rounded">
                    <span className="text-muted-foreground">{t("recharge.referenceLabel")}</span>
                    <span className="font-medium">{reference}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          {step !== "method" && (
            <Button variant="outline" onClick={goBack} className="flex-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("recharge.back")}
            </Button>
          )}
          {step !== "confirm" ? (
            <Button
              onClick={goNext}
              disabled={!canProceed()}
              className="flex-1 box-glow-green"
            >
              {t("recharge.next")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 box-glow-green">
              {t("recharge.confirmRecharge")}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RechargeDialog;
