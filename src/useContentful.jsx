import { createClient } from "contentful"

const useContentful = () => {
    const client = createClient({
        space: 'dr7zwdsf2qho',
        accessToken: 's3-Lf9hs5avGPp-Zf-8bbbxvj-Z2r5EUsBuhjSLzcqw',
        host: 'preview.contentful.com'
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: 'product',
                select: 'fields',
            });

            const sanitizedEntries = entries.items.map(item => {
                const image = item.fields.image.fields;

                return {
                    ...item.fields,
                    image
                }
            })
            return sanitizedEntries;
        } catch (error) {
            // console.log(`error fetching data: ${error}`)
            throw error;
        }
    }

    return { getProducts };
}
export default useContentful;