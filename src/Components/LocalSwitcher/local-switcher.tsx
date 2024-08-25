'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = currentLocale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const buttonLabel = currentLocale === 'en' ? 'عربي' : 'English';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`text-slate-900 dark:text-white p-1 rounded-md text-[12px] lg:text-[14px] hover:opacity-45 ${currentLocale === "en" ? " " : ""}`}
        onClick={toggleLocale}
        aria-pressed={isPending}
        disabled={isPending}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
