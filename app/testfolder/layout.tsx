import SideNav from '@/app/ui/dashboard/sidenav';
import { lusitana } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div>
                <SideNav />
            </div>
            <div>{children}</div>
    </div>
    );
}
