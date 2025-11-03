import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-one w-screen h-screen flex items-center justify-center flex-col gap-2">
      <Loader2Icon size={120} className="animate-spin text-principal" />
      <p className="text-white text-xl">Carregando informações...</p>
    </div>
  );
}
