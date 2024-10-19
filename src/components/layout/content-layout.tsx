import { ReactNode } from "react";
import Separator from "../ui/separator";

type ContentLayoutProps = {
    title: string;
    subtitle?: string;
    border: boolean;
    children: ReactNode;
}

const ContentLayout = ({ title, subtitle, border, children }: ContentLayoutProps) => {
  return (
    <div className="w-full">
    {border && <div className="overflow-x-hidden"><Separator /></div>}
    <div className="w-full flex items-baseline py-4 my-2">
        <div className="hidden lg:block md:block w-1/4 capitalize">
            <h3 className="m-0">{title}</h3>
            <p className="">{subtitle}</p>
        </div>
        <div className="w-full">
            {children}
        </div>
    </div>
    </div>
  )
}

export default ContentLayout;