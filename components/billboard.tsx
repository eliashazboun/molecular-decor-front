import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
  home?:boolean;
}

const Billboard: React.FC<BillboardProps> = ({ data, home }) => {
  console.log(data);
  return (
    <div className={`sm:p-6 object-center rounded-xl overflow-hidden relative mb-3 `}>
      <Image
        width={0} 
        height={0} 
        sizes="80vw"
        style={{ width: '100%', height:home ?'auto' :'20rem', objectFit:'cover', objectPosition:'center', aspectRatio:'revert' }} // optional
        alt="img" 
        src={data?.imageUrl} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="font-bold text-green-700 text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {!home && data.label}

          </div>

        </div>
    </div>
  );
};
export default Billboard;
