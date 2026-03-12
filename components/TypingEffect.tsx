"use client";

import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypingEffect({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 4000,
}: TypingEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullPhrase = phrases[currentPhraseIndex];
      if (!fullPhrase) return;

      if (!isDeleting) {
        // Typing
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));

        if (currentText === fullPhrase) {
          // Finished typing, pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="relative inline-flex items-center">
      <span className="text-gradient-gold">{currentText}</span>
      <span className="ml-1 w-[2px] h-[0.8em] bg-gold-primary inline-block animate-pulse" />
    </span>
  );
}
