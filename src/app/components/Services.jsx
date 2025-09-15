import dbConnect, { collectionObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = async () => {
    const data = await dbConnect(collectionObj.services).find({}).toArray();

    return (
        <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
                <div key={item._id} className="p-4 border-1 space-y-2">
                    <Image src={item.img} width={314} height={208} className="w-full h-[210px]" alt="image" />
                    <p className="font-bold text-2xl">{item.title}</p>
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-red-500">Price: {item.price}</p>
                        <Link href={`/services/${item._id}`}><FaArrowRight size={20} className="text-red-500" /></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesSection;