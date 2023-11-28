import Image from "next/image";

export function Header() {
  return (
    <header>
      <a href="/" className="logoContainer">
        <Image
          src="/e-alumni-logo.png"
          alt="E alumni logo"
          width={32}
          height={32}
        />
      </a>
      <div className="desktopNavigation">
        <a href="/fund" className="active">
          Фонд
        </a>
        <a href="/about">Выпускникам</a>
        <a href="/fund/invest">
          Вложиться в будущее человечества
        </a>
        <a href="/fund/grant">
          Подать заявку на грант
        </a>
      </div>
    </header>
  );
}
