export default function Contact() {
  return (
    <div className="max-screen px-4 md:px-6 lg:px-8 pt-12 pb-16 sm:pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <button>Send Message</button>
      </form>
    </div>
  );
}
