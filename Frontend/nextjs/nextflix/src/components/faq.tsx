import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container mx-auto text-center py-12 sm:py-16 md:py-20 px-4">
        <h1 className="text-center mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Frequently Asked Questions
        </h1>

        <Accordion
          type="single"
          collapsible
          className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto mt-8"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              What is Nextflix?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              Nextflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              How much does Nextflix cost?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              Nextflix offers several membership plans to suit your needs. The
              basic plan starts at $8.99 per month, while the standard plan is
              $13.99 per month, and the premium plan is $17.99 per month.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              Where can I watch Nextflix?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              Nextflix is available on a wide range of devices, including smart
              TVs, game consoles, streaming media players, and mobile devices.
              You can also watch Nextflix on your computer by visiting the
              Nextflix website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              How do I cancel my Nextflix subscription?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              To cancel your Nextflix subscription, sign in to your account, go
              to the "Account" section, and select "Cancel Membership." Follow
              the prompts to complete the cancellation process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              What can I watch on Nextflix?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              Nextflix offers a wide variety of content, including original
              series, movies, documentaries, and more. You can find popular
              titles like "Stranger Things," "The Crown," and "The Witcher," as
              well as a vast library of films and shows from various genres.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="bg-[#2A2A2A] text-start px-4 sm:px-6 text-lg sm:text-xl md:text-2xl py-4 hover:no-underline">
              Is Nextflix good for kids?
            </AccordionTrigger>
            <AccordionContent className="bg-[#2A2A2A] px-4 sm:px-6 pb-4 text-base sm:text-lg text-gray-300">
              Nextflix offers a wide range of family-friendly content, including
              animated series, educational shows, and movies suitable for
              children. Parents can also set up profiles with content
              restrictions to ensure a safe viewing experience for their kids.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="text-center mt-8 px-4 sm:px-6 md:px-8 lg:px-10">
          <p className="font-semibold text-lg">
            Ready to watch ? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="mt-4 py-4 px-2 rounded-sm border h-12 sm:h-16 w-[30%] min-w-0"
            />
            <button className="mt-4 bg-red-600 hover:bg-red-700 transition-colors  px-6 rounded-md  sm:text-md text-lg h-10 sm:h-16 whitespace-nowrap ml-2">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
