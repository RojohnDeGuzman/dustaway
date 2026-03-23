"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ThemedModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children?: ReactNode;
  onClose?: () => void;
  dismissible?: boolean;
};

export default function ThemedModal({
  open,
  title,
  description,
  children,
  onClose,
  dismissible = true,
}: ThemedModalProps) {
  const canClose = dismissible && onClose;

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-[var(--text-dark)]/30 backdrop-blur-[2px]"
            onClick={canClose ? onClose : undefined}
            aria-hidden
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md rounded-[28px] border border-pastel-pink-200/70 bg-[var(--bg-cream)] p-6 shadow-[0_20px_60px_rgba(94,74,59,0.18)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="themed-modal-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2
                    id="themed-modal-title"
                    className="font-display text-center text-2xl font-semibold text-[var(--text-dark)]"
                  >
                    {title}
                  </h2>
                  {description ? (
                    <p className="mt-2 text-center text-sm leading-6 text-[var(--text-body)]">
                      {description}
                    </p>
                  ) : null}
                </div>
                {canClose ? (
                  <button
                    type="button"
                    onClick={onClose}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-pastel-pink-200/60 bg-white/80 text-[var(--text-body)] transition-colors hover:bg-white"
                    aria-label="Close"
                  >
                    ×
                  </button>
                ) : null}
              </div>

              <div className="mt-5">{children}</div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
