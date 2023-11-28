import Image from "next/image";

export function Header() {
  return (
    <header>
      <Image
        src="/e-alumni-logo.png"
        alt="E alumni logo"
        width={32}
        height={32}
      />
      <div className="desktopNavigation">
        <a className="active">Фонд</a>
        <a>Выпускникам</a>
        <a>Вложиться в будущее человечества</a>
        <a>Подать заявку на грант</a>
      </div>
    </header>
  );
}
