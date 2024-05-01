import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function Location() {
  return (
    <section className="px-8 py-4 lg:py-16 mt-4 bg-[#fff]">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We're Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it's a question about our services, a request for technical
          assistance, or suggestions for improvement, our team is eager to hear
          from you.
        </Typography>
        <div className="flex justify-center">
  <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-center max-w-4xl w-full px-6">
    <div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.019117886812!2d75.78330917478593!3d26.902888360513888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db41304b375fd%3A0xcff33493e900c779!2sJagdish%20Enclave%2C%20Keshav%20Nagar%2C%20Civil%20Lines%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1714490549911!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <form action="#" className="flex flex-col mt-0 gap-4 lg:max-w-sm">
      <Typography
        variant="small"
        className="text-left !font-semibold !text-gray-600"
      >
        Select Options for Business Engagement
      </Typography>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            First Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="First Name"
            name="first-name"
            className="focus:border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Last Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Last Name"
            name="last-name"
            className="focus:border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Your Email
        </Typography>
        <Input
          color="gray"
          size="lg"
          placeholder="name@email.com"
          name="email"
          className="focus:border-t-gray-900"
          containerProps={{
            className: "!min-w-full",
          }}
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Your Message
        </Typography>
        <Textarea
          rows={6}
          color="gray"
          placeholder="Message"
          name="message"
          className="focus:border-t-gray-900"
          containerProps={{
            className: "!min-w-full",
          }}
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
      <Button className="w-full" color="gray">
        Send message
      </Button>
    </form>
  </div>
</div>

      </div>
    </section>
  );
}

export default Location;
