import Link from 'next/link';
import { Card, Carousel, Collapse } from 'antd';
import Image from 'next/image';

export default function LayoutB() {
  const items = [
    {
      key: '0',
      label: 'How can I add more users to my account?',
      children:
        'To add more users to your account, please contact our support team with your account information, and we will be happy to assist you with the process.',
    },
    {
      key: '1',
      label: 'Can I customize the layout of the POS terminal?',
      children: (
        <p>
          {
            'Yes, you can customize the layout of the POS terminal to suit your business needs. Our system allows you to add or remove buttons, create custom categories, and adjust the appearance of the interface. Contact our team for more information on customization options.'
          }
        </p>
      ),
    },
    {
      key: '2',
      label: 'Are software updates included in my subscription?',
      children: (
        <p>
          {
            'Yes, your subscription includes access to all software updates and new features. We are constantly improving our platform and adding enhancements based on customer feedback. You can enjoy the latest innovations as part of your subscription.'
          }
        </p>
      ),
    },
  ];

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modernize your point of sale</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                {
                  "A point of sale system that's fast, reliable, and easy to use. Whether you're running a small shop or a bustling restaurant, we've got you covered."
                }
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-md shadow transition-colors duration-150 hover:bg-gray-100/40 dark:hover:bg-gray-800/60"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-md bg-gray-900 text-white shadow transition-colors duration-150 hover:opacity-90"
                  href="#"
                >
                  Sign Up for a Demo
                </Link>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto aspect-video overflow-hidden rounded-xl">
              <Image
                alt="Demo"
                className="object-cover"
                height="360"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '640/360',
                  objectFit: 'cover',
                }}
                width="640"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The complete point of sale solution</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                {
                  "Our point of sale software is designed to streamline your business operations. From inventory management to customer transactions, we've packed all the essential features into one easy-to-use platform."
                }
              </p>
            </div>
            <div className="grid gap-4 order-1 lg:order-2">
              <Card className="p-4 grid gap-2">
                <WarehouseIcon className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Inventory Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily track stock levels and automate reordering.
                </p>
              </Card>
              <Card className="p-4 grid gap-2">
                <UsersIcon className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Customer Profiles</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Capture customer information and preferences for targeted marketing.
                </p>
              </Card>
              <Card className="p-4 grid gap-2">
                <AreaChartIcon className="w-8 h-8" />
                <h3 className="text-lg font-semibold">Sales Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gain insights into your business performance with detailed reports.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See it in action</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Watch the demo to experience the features and capabilities of our point of sale software.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="aspect-video" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Highlights</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Here are some of the key features that make our point of sale software stand out.
              </p>
            </div>
            <div className="grid gap-6">
              <Carousel autoplay>
                <div className="p-4 grid items-center gap-4 md:gap-8">
                  <TerminalIcon className="w-12 h-12" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Intuitive POS Terminal</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The POS terminal is designed for speed and simplicity, allowing your staff to process transactions
                      with ease.
                    </p>
                  </div>
                </div>
                <div className="p-4 grid items-center gap-4 md:gap-8">
                  <MenuIcon className="w-12 h-12" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Mobile Ordering</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Allow customers to place orders from their own devices with the mobile ordering feature, reducing
                      wait times and increasing convenience.
                    </p>
                  </div>
                </div>
                <div className="p-4 grid items-center gap-4 md:gap-8">
                  <WarehouseIcon className="w-12 h-12" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Advanced Inventory Management</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Gain full visibility and control over your inventory with features such as real-time tracking,
                      automated stock alerts, and vendor management.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Have questions about our point of sale software? Ready to request a personalized demo? Fill out the form
                below, and our team will be in touch.
              </p>
            </div>
            <div className="grid gap-4">
              <form className="grid gap-4">
                <div className="grid gap-1.5">
                  <label className="text-base" htmlFor="name">
                    Name
                  </label>
                  <input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-base" htmlFor="email">
                    Email
                  </label>
                  <input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-base" htmlFor="message">
                    Message
                  </label>
                  <textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border rounded-lg">
                  <Collapse items={items} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Advantages of our POS Software</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="grid gap-2">
                  <MouseIcon className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Intuitive Interface</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our POS system features an intuitive and user-friendly interface, making it easy for your staff to
                    learn and navigate.
                  </p>
                </div>
                <div className="grid gap-2">
                  <SmartphoneIcon className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Mobile POS</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    With our mobile POS capabilities, you can take the checkout to your customers, reducing wait times
                    and improving customer satisfaction.
                  </p>
                </div>
                <div className="grid gap-2">
                  <WarehouseIcon className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Inventory Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gain full visibility and control over your inventory with our advanced management features.
                  </p>
                </div>
                <div className="grid gap-2">
                  <AreaChartIcon className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Sales Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access powerful analytics and reporting tools to gain insights into your sales performance and
                    customer behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AreaChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3v18h18" />
      <path d="M7 12v5h12V8l-5 5-4-4Z" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MouseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
}

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TerminalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WarehouseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}
