import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import Button from "../../components/Button"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'recipe'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': params.slug
    })

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: { recipe: items[0] },
        revalidate: 1
    }

}

export default function RecipeDetails({ recipe }) {
    if (!recipe) return <Skeleton />

    const { featureImage, title, cookingTime, ingredients, method } = recipe.fields;

    return (
        <div>
            <Button />
            <div className="banner">
                <Image
                    fetchPriority="high"
                    priority
                    src={'https:' + featureImage.fields.file.url}
                    width={featureImage.fields.file.details.image.width}
                    height={featureImage.fields.file.details.image.height}
                    alt={featureImage.fields.title}
                />
                <h2>{title}</h2>
                <div className="info">
                    <p>Take about {cookingTime} mins to cook</p>
                    <h3>Ingredients: </h3>
                    {ingredients.map(ing => (
                        <span key={ing}>{ing}</span>
                    ))}
                </div>

                <div className="method">
                    <h3>Method: </h3>
                    <div>{documentToReactComponents(method)}</div>
                </div>
            </div>
            <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          border-radius: 10px;
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
        </div>
    )
}