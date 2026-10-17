"use client";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/content/site";
export function Logo() {
  return (
    <Link
      className="logo"
      href="/#home"
      aria-label={`${site.name} — на главную`}
    >
      <span className="logo-symbol" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        точка
        <span className="logo-second">
          сборки<span className="blue">.</span>
        </span>
      </span>
    </Link>
  );
}
export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  const close = () => {
    dialog.current?.close();
    setOpen(false);
  };
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.slice(1, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="header-cta">
          Обсудить проект <ArrowUpRight size={16} />
        </Link>
        <button
          type="button"
          className="menu-toggle icon-button"
          aria-label="Открыть меню"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <Menu />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-menu"
        aria-label="Меню сайта"
        className="mobile-menu"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span>Навигация</span>
            <button
              className="icon-button"
              aria-label="Закрыть меню"
              onClick={close}
            >
              <X />
            </button>
          </div>
          <nav aria-label="Мобильная навигация">
            {navigation.map((item, i) => (
              <Link key={item.href} href={item.href} onClick={close}>
                <small>0{i + 1}</small>
                {item.label}
                <ArrowUpRight />
              </Link>
            ))}
          </nav>
          <p>Три человека. Один фокус — ваш продукт.</p>
        </div>
      </dialog>
    </header>
  );
}
