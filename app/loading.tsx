import { LoaderList } from "@/components";

export default function Loading() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoaderList />
        </div>
    )
}
