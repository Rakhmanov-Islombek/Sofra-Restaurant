export default function SofraRestaurant() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-[Inter]">
      <section
        className="h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050505]"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
            Restaurant • Lounge • Premium Dining
          </p>

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tight leading-none text-white">
            SOFRA
          </h1>

          <div className="w-24 h-[1px] bg-zinc-700 mx-auto my-8"></div>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-8 font-light">
            Современный ресторан с атмосферой восточной роскоши,
            авторской кухней и минималистичным премиальным интерьером.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-zinc-200 transition duration-300">
              Забронировать
            </button>

            <button className="border border-zinc-700 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:border-white transition duration-300">
              Меню
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase text-zinc-600 tracking-[0.3em] text-sm mb-6">
            About
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
            Искусство
            <br />
            современной кухни
          </h2>

          <p className="text-zinc-400 text-lg leading-9 max-w-xl font-light">
            Sofra объединяет восточные традиции и современную гастрономию.
            Тёмный интерьер, мягкий свет и авторская подача создают атмосферу
            приватности и премиального отдыха.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[2rem] object-cover h-[700px] w-full grayscale hover:grayscale-0 transition duration-700"
          />

          <div className="absolute -bottom-8 -left-8 bg-[#0d0d0d] border border-zinc-800 p-8 rounded-[2rem] backdrop-blur-xl">
            <p className="text-5xl font-bold">10+</p>
            <p className="text-zinc-500 mt-2 uppercase text-xs tracking-[0.3em]">
              Years Experience
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <p className="uppercase text-zinc-600 tracking-[0.3em] text-sm mb-4">
                Signature Dishes
              </p>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Популярные блюда
              </h2>
            </div>

            <p className="text-zinc-500 max-w-md leading-8 font-light">
              Минималистичная подача, премиальные ингредиенты и настоящий вкус.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Турецкий кебаб',
                image:
                  'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Узбекский плов',
                image:
                  'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Стейк премиум',
                image:
                  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] bg-[#0d0d0d] border border-zinc-900"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-8">
                  <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-3">
                    Signature
                  </p>

                  <h3 className="text-3xl font-semibold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase text-zinc-600 tracking-[0.3em] text-sm mb-4">
            Interior
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Атмосфера Sofra
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
          ].map((img, index) => (
            <div className="overflow-hidden rounded-[1.8rem]" key={index}>
              <img
                src={img}
                className="h-80 w-full object-cover hover:scale-110 transition duration-700 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 border-t border-zinc-900 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase text-zinc-600 tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Забронировать стол
          </h2>

          <div className="space-y-5 text-zinc-400 text-lg font-light leading-8">
            <p>📍 Uzbekistan</p>
            <p>📞 +998 90 000 00 00</p>
            <p>⏰ Ежедневно — 10:00 / 00:00</p>
          </div>

          <div className="mt-14 flex justify-center gap-5 flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-zinc-200 transition duration-300">
              Telegram
            </button>

            <button className="border border-zinc-700 text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:border-white transition duration-300">
              Instagram
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-zinc-900 text-center text-zinc-600 text-sm tracking-widest uppercase bg-[#050505]">
        © 2026 Sofra Restaurant
      </footer>
    </div>
  )
}
