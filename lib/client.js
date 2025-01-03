import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client=SanityClient(
    {
        projectId:"et61uioq",
        dataset:"production",
        apiVersion:"2025-01-02",
        useCdn:true,
        token:process.env.NEXT_SANITY_TOKEN

    }
)

const builder=ImageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source)

