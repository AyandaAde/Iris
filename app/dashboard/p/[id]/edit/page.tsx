import { fetchPostById } from "@/lib/data";
import EditPost from "@/components/editPost";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

async function EditPage({ params: { id } }: Props) {
    const post = await fetchPostById(id);

    if (!post) {
        notFound();
    }
    return <EditPost id={id} post={post} />
}

export default EditPage
