import Post from "@/components/post";
import { PostSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

function Dashboard() {
    return (
        <main className="flex w-full flex-grow">
            <div className="felx flex-col flex01 gap-y-8 max-w-lg mx-auto pb-20">
                <Suspense
                    fallback={<PostSkeleton />}
                >
                    <Post />
                </Suspense>
            </div>
        </main>
    );
}

export default Dashboard;

