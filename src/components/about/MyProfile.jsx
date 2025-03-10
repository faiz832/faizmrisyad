export default function MyProfile() {
  return (
    <section className="max-screen px-4 md:px-6 lg:px-8 pt-12 pb-16 sm:pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <div className="flex flex-col items-center gap-8 overflow-x-hidden pt-0 sm:flex-row md:gap-16 md:py-12 md:pt-8">
        <div class="relative w-full sm:w-1/2">
          <div class="h-full w-full overflow-hidden rounded-b-full">
            <img alt="Hero Image" loading="lazy" width="400" height="600" decoding="async" data-nimg="1" class="aspect-[3/4] h-full w-full object-cover transition duration-300 hover:scale-[1.015]" src="" />
          </div>
        </div>
      </div>
    </section>
  );
}
