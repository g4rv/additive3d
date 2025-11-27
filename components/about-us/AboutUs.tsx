export default function AboutUs() {
  return (
    <section className="py-8 lg:py-12">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-primary text-3xl font-bold lg:text-4xl">Про Additive3D</h2>
          <p className="text-base-content/80 mt-4 lg:text-xl">
            Провідна українська компанія адитивних технологій
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Company Introduction */}
          <div className="card bg-base-200 border-base-300 shadow-sm">
            <div className="card-body p-6 lg:p-8">
              <h3 className="text-primary mb-4 text-2xl font-semibold lg:text-3xl">Наша місія</h3>
              <p className="text-base-content/90 mb-4 text-lg leading-relaxed lg:text-xl">
                <span className="text-primary font-semibold">Additive3D</span> — це провідна
                українська компанія, що спеціалізується на наданні повного спектру послуг в
                адитивних технологіях. Ми забезпечуємо українську промисловість високоточними
                кінцевими виробами, функціональними прототипами та технологічною оснасткою з
                гарантією якості та швидкості.
              </p>
              <p className="text-base-content/90 text-lg leading-relaxed lg:text-xl">
                Наша діяльність зосереджена на комплексному виробництві: від аналізу вашого
                технічного завдання та вибору оптимального матеріалу до серійного 3D-друку та
                фінальної обробки деталей.
              </p>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="space-y-6">
            <h3 className="text-primary text-center text-2xl font-semibold lg:text-3xl">
              Наші технології
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="card bg-base-200 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <div className="card-body p-6">
                  <h4 className="text-primary mb-3 text-xl font-semibold">MJF</h4>
                  <p className="text-base-content/90 text-base lg:text-lg">
                    Multi Jet Fusion — швидке серійне виробництво полімерних деталей високої
                    точності
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
                <div className="card-body p-6">
                  <h4 className="text-primary mb-3 text-xl font-semibold">FDM</h4>
                  <p className="text-base-content/90 text-base lg:text-lg">
                    Fused Deposition Modeling — міцні функціональні прототипи та інструментальна
                    оснастка
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 border-accent/20 hover:border-accent/40 transition-colors duration-300">
                <div className="card-body p-6">
                  <h4 className="text-primary mb-3 text-xl font-semibold">LFAM</h4>
                  <p className="text-base-content/90 text-base lg:text-lg">
                    Large Format Additive Manufacturing — великогабаритні композитні форми та моделі
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="card bg-base-200 border-base-300 shadow-sm">
            <div className="card-body p-6 lg:p-8">
              <h3 className="text-primary mb-4 text-2xl font-semibold lg:text-3xl">
                Галузі, з якими ми працюємо
              </h3>
              <p className="text-base-content/90 text-lg leading-relaxed lg:text-xl">
                Ми є надійним виробничим партнером для замовників в авіабудуванні, медицині,
                автомобілебудуванні та оборонній промисловості, допомагаючи їм реалізувати
                найскладніші інженерні проєкти з гарантованою якістю та точністю.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
