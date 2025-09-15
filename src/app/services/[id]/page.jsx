import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServicesDetails = async ({ params }) => {
    const p = await params;
    const services = dbConnect(collectionObj.services);
    const data = await services.findOne({ _id: new ObjectId(p.id) });

    return (
        <div className="max-w-7xl mx-auto my-12 flex justify-center">
            <div className="bg-gray-100 p-6 rounded-sm shadow">
                <Image src={"/assets/images/checkout/checkout.png"} width={1000} height={1000} className="w-full h-[250px]" alt="image" />
                <p className="font-bold text-2xl">{data.title}</p>
                <div className="flex items-center justify-between">
                    <p className="font-medium text-red-500">Price: {data.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;