import React from "react";

type Props = {};

type CardTypes = {
  phone: string;
  email: string;
  address: string;
  city: string;
};

const Cards: React.FC<CardTypes> = ({ city, phone, email, address }) => {
  return (
    <div className="card  border-2 pb-4 pl-2 pr-2 pt-4 hover:border-black">
      <div>
        <h2 className="text-lg font-bold">{city}</h2>
        <h2 className="font-bold"> Phone</h2>
        <p className="text-sm">{phone} </p>
        <h2 className="font-bold"> Email:</h2>
        <p>{email} </p>
        <h2 className="font-bold"> Address</h2>
        <p className="text-sm">{address} </p>
      </div>
    </div>
  );
};

const StoreBody = (props: Props) => {
  return (
    <div className="flex w-full flex-col  justify-center gap-3 lg:w-[80%] lg:flex-row">
      {/* Card Container */}
      <div className="grid h-screen  flex-1 grid-rows-4 gap-5 lg:h-full">
        <Cards
          city="New York Office"
          phone="+1 666 234 8888"
          email="tamim.furious@gmail.com"
          address="432 Park Avenue, New York, New York"
        />
        <Cards
          city="Houston Office"
          phone="+1 713 432 8765"
          email="tamim.furious@gmail.com"
          address="789 Main Street, Houston, Texas"
        />
        <Cards
          city="San Francisco Office"
          phone="+1 415 987 6543"
          email="tamim.furious@gmail.com"
          address="321 Market Street, San Francisco, California"
        />
        <Cards
          city="Miami Office"
          phone="+1 305 543 2109"
          email="tamim.furious@gmail.com"
          address="654 Ocean Drive, Miami, Florida"
        />
      </div>

      {/* Google Maps Container */}
      <div className="flex-[1.5] w-full sm:h-[50vh] lg:h-[75vh] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.017129875108!2d-73.97433512338634!3d40.761647971386296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258face4cb11b%3A0xa734e5b5aef4c1dc!2s432%20Park%20Ave%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sbd!4v1739579902305!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default StoreBody;
