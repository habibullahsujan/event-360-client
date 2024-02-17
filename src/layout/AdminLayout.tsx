import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type TAdminLayoutProps = {
    children: ReactNode;
    className?:string;
}
const AdminLayout = ({ children,className }: TAdminLayoutProps) => {
    return (
        <div className={cn(className)}>
            {children}
        </div>
    )
}

export default AdminLayout