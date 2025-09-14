import dbConnect from "@/lib/dbConnect";
import Image from "next/image";

const ServicesSection = async () => {
    const data = await dbConnect("services").find({}).toArray();

    return (
        <div className="max-w-7xl mx-auto py-12 grid grid-cols-3 gap-6">
            {data.map((item) => (
                <div key={item._id} className="p-4 border-1">
                    <Image src={item.img} width={314} height={208} className="w-full" alt="image" />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ServicesSection;