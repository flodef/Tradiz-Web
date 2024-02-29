import Link from 'next/link';
import Image from 'next/image';

export default function LayoutA() {
  return (
    <div className="grid gap-6 lg:gap-12">
      <div className="relative grid gap-4 lg:gap-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 min-[600px]:gap-4">
            <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Introducing
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modernize your checkout experience</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {
                    "The all-in-one point of sale platform designed for today's businesses. Seamlessly manage transactions, track inventory, and delight customers with our intuitive POS software."
                  }
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-[-1]">
          <div className="w-full max-w-7xl mx-auto aspect-video overflow-hidden rounded-b-lg">
            <Image
              alt="Image"
              className="object-cover object-center"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: '1440/400',
                objectFit: 'cover',
              }}
              width="1440"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl space-y-10 px-4 md:px-6 lg:space-y-16">
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A better way to do business</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our cloud-based POS system is designed to streamline operations and elevate the customer experience.
              Whether you run a boutique shop, a bustling cafe, or a thriving retail store, our software puts the power
              of modern technology at your fingertips.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features that make a difference
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {
                "Our platform is packed with tools to help you run your business more efficiently. From inventory management to customer insights, we've got you covered."
              }
            </p>
          </div>
          <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-2">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Intuitive Interface</h3>
                <p className="text-gray-500 italic dark:text-gray-400">
                  {"Our staff picked up the system in minutes. It's that easy to use."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Real-time Reporting</h3>
                <p className="text-gray-500 italic dark:text-gray-400">
                  {'I can track sales from anywhere, which gives me peace of mind.'}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Inventory Management</h3>
                <p className="text-gray-500 italic dark:text-gray-400">
                  {'No more running out of popular items. I can keep track of my inventory and reorder when I need to.'}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Customer Insights</h3>
                <p className="text-gray-500 italic dark:text-gray-400">
                  {'I can see what my customers are buying and send them personalized offers.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to see it in action?</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Watch our demo video to get a glimpse of what our platform can do for your business. Then, schedule a
              personalized tour with one of our experts to see how the software can be tailored to meet your specific
              needs.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="aspect-video w-full" />
            <button>Watch the Demo</button>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See the difference for yourself
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {
                "Our customers love how our platform helps them run their businesses more efficiently. But you don't have to take their word for it. Sign up for a free trial and experience the benefits firsthand."
              }
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Start Your Free Trial
              <ArrowRightIcon className="w-4 h-4 peer" />
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {
                "Have questions about our platform? Want to learn more about how it can help your business? Our team is here to help. Fill out the form below, and we'll be in touch."
              }
            </p>
          </div>
          <div className="mx-auto w-full max-w-[500px] space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message">Your Message</label>
              <textarea className="min-h-[100px] resize-y" id="message" placeholder="Enter your message" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
