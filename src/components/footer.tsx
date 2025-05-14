import { FOOTER_LINKS } from "../config/links";

const Footer = () => {
  return (
    <footer className="mt-20 bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list, index: number) => (
          <div
            key={index}
            className="mb-10 flex flex-col items-start gap-4 pr-4"
          >
            {list.links.map((link) => {
              const { href, public_name } = link;

              return (
                <a
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
                >
                  {public_name}
                </a>
              );
            })}
          </div>
        ))}
      </div>
      <span className="text-muted-foreground text-center mt-8">
        © 2025 Maksims Nikitins
      </span>
    </footer>
  );
};
export default Footer;
