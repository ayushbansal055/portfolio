export default function Hero() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg animate-float hover:animate-glow transition-all">
            AB
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Ayush Bansal
            </h1>
            <p className="text-xl text-primary font-semibold">
              Software Developer | IoT Engineer | Full-Stack Builder
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            B.Tech in Electrical Engineering from IIT Dharwad. Passionate about
            building scalable web applications and IoT solutions. Currently
            exploring the intersection of cloud technology and embedded systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="mailto:ayushbansal022@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="tel:+918770058660"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Indian Institute Of Technology, Dharwad</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📧</span>
              <a
                href="mailto:ayushbansal022@gmail.com"
                className="text-primary hover:underline"
              >
                ayushbansal022@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span>📱</span>
              <a
                href="tel:+918770058660"
                className="text-primary hover:underline"
              >
                +91-8770058660
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
